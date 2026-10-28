// Kontaktformular → Brevo (transaktionale E-Mail)
//
// Validiert serverseitig (Pflichtfelder, E-Mail-Format, Längen, Sicherheitsfrage),
// damit direkte POSTs ohne Browser nicht ungeprüft Mails auslösen können.

const CAPTCHA_ANSWER = "5"; // muss zur Rechenaufgabe in components/Contact.vue passen
const MAX_NAME = 120;
const MAX_COMPANY = 200;
const MAX_MESSAGE = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const asString = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

const badRequest = (message: string) =>
  createError({ statusCode: 400, statusMessage: "Bad Request", message });

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) ?? {};
  const config = useRuntimeConfig();

  const name = asString(body.name, MAX_NAME);
  const company = asString(body.company, MAX_COMPANY);
  const email = asString(body.email, 254);
  const message = asString(body.message, MAX_MESSAGE);
  const captcha = asString(body.captcha, 10);

  // --- Validierung ---
  if (!name) throw badRequest("Bitte gib deinen Namen an.");
  if (!email || !EMAIL_RE.test(email)) throw badRequest("Bitte gib eine gültige E-Mail-Adresse an.");
  if (captcha !== CAPTCHA_ANSWER) throw badRequest("Die Sicherheitsfrage wurde nicht richtig beantwortet.");

  // Key kommt zur Laufzeit aus NUXT_BREVO_API_KEY (Nuxt-Standard) oder BREVO_API_KEY (Vercel-Setup).
  const apiKey = (config.brevoApiKey as string) || process.env.BREVO_API_KEY || "";
  if (!apiKey) {
    console.error("Brevo API Key is not configured. Set BREVO_API_KEY (or NUXT_BREVO_API_KEY).");
    throw createError({
      statusCode: 500,
      statusMessage: "Mail service not configured",
      message: "E-Mail-Service ist nicht konfiguriert. Bitte schreib direkt an kontakt@nils-gerber.de.",
    });
  }

  const companyText = company || "Nicht angegeben";
  const messageText = message || "Keine Nachricht angegeben";

  const textContent = `
Neue Kontaktanfrage von deiner Website:

Name: ${name}
Unternehmen: ${companyText}
E-Mail: ${email}

Nachricht:
${messageText}
  `.trim();

  const htmlContent = `
    <h2>Neue Kontaktanfrage von deiner Website</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Unternehmen:</strong> ${escapeHtml(companyText)}</p>
    <p><strong>E-Mail:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <h3>Nachricht:</h3>
    <p>${escapeHtml(messageText).replace(/\n/g, "<br>")}</p>
  `;

  const payload = {
    sender: { name: "Nils Gerber Website", email: "kontakt@nils-gerber.de" },
    to: [{ email: "justnils83+kontakt@gmail.com", name: "Nils Gerber" }],
    replyTo: { email, name },
    subject: `Neue Kontaktanfrage von ${name}`,
    textContent,
    htmlContent,
  };

  try {
    await $fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: payload,
    });

    return { success: true, message: "E-Mail erfolgreich gesendet" };
  } catch (error: any) {
    const status = error?.statusCode ?? error?.status;
    // Antwort-Body von Brevo loggen (enthält z. B. "sender not valid"), aber nie den Key.
    console.error("Brevo API Error:", status, error?.data ?? error?.message);

    if (status === 401 || status === 403) {
      throw createError({
        statusCode: 500,
        statusMessage: "Mail service not configured",
        message: "E-Mail-Service ist nicht konfiguriert. Bitte schreib direkt an kontakt@nils-gerber.de.",
      });
    }

    throw createError({
      statusCode: 502,
      statusMessage: "Mail delivery failed",
      message: "Fehler beim Senden der E-Mail. Bitte versuche es erneut oder schreib direkt an kontakt@nils-gerber.de.",
    });
  }
});
