// Einmaliges Skript: konvertiert grosse Bilder zu WebP (max. Breite begrenzt)
import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "images");

const jobs = [
  { in: "hero.png", out: "hero.webp", width: 800 },
  { in: "Nils_Gerber_Alsdorf_bei_aachen.png", out: "Nils_Gerber_Alsdorf_bei_aachen.webp", width: 800 },
  { in: "NilsGerberCropZoneGruender.png", out: "NilsGerberCropZoneGruender.webp", width: 900 },
  { in: "NilsGerberSpeakerBarcDataAiSummit.png", out: "NilsGerberSpeakerBarcDataAiSummit.webp", width: 900 },
  { in: "NIlsGerberMaisfeldAlsdorfBeiAachen.jpg", out: "NIlsGerberMaisfeldAlsdorfBeiAachen.webp", width: 900 },
  { in: "NilsGerber Public Speaking.jpg", out: "NilsGerberPublicSpeaking.webp", width: 900 },
  { in: "NilsGerber_bei_der_BARC.jpg", out: "NilsGerber_bei_der_BARC.webp", width: 900 },
  { in: "NilsGerberEvent.jpg", out: "NilsGerberEvent.webp", width: 900 },
];

for (const job of jobs) {
  const input = path.join(dir, job.in);
  const output = path.join(dir, job.out);
  try {
    const img = sharp(input);
    const meta = await img.metadata();
    const width = Math.min(meta.width ?? job.width, job.width);
    await img.resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(output);
    const { size } = await import("fs").then((fs) => fs.promises.stat(output));
    console.log(`${job.in} -> ${job.out}: ${Math.round(size / 1024)} KB`);
  } catch (e) {
    console.error(`FEHLER bei ${job.in}:`, e.message);
  }
}
