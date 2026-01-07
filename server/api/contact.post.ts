export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  const { name, company, email, message } = body;

  // Brevo API endpoint
  const brevoUrl = "https://api.brevo.com/v3/smtp/email";

  const emailContent = `
Neue Kontaktanfrage von deiner Website:

Name: ${name}
Unternehmen: ${company || "Nicht angegeben"}
E-Mail: ${email}

Nachricht:
${message || "Keine Nachricht angegeben"}
  `.trim();

  const payload = {
    sender: {
      name: "Nils Gerber Website",
      email: "kontakt@nils-gerber.de",
    },
    to: [
      {
        email: "justnils83+kontakt@gmail.com",
        name: "Nils Gerber",
      },
    ],
    replyTo: {
      email: email,
      name: name,
    },
    subject: `Neue Kontaktanfrage von ${name}`,
    textContent: emailContent,
    htmlContent: `
      <h2>Neue Kontaktanfrage von deiner Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Unternehmen:</strong> ${company || "Nicht angegeben"}</p>
      <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
      <h3>Nachricht:</h3>
      <p>${message ? message.replace(/\n/g, "<br>") : "Keine Nachricht angegeben"}</p>
    `,
  };

  try {
    const response = await $fetch(brevoUrl, {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": config.brevoApiKey as string,
        "content-type": "application/json",
      },
      body: payload,
    });

    return { success: true, message: "E-Mail erfolgreich gesendet" };
  } catch (error: any) {
    console.error("Brevo API Error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Fehler beim Senden der E-Mail",
    });
  }
});



