import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const REQUIRED_ENV = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_FROM"];

function validateEnv() {
  const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
  if (missing.length) {
    const err = new Error(`Missing SMTP configuration: ${missing.join(", ")}`);
    err.code = "MISSING_ENV";
    throw err;
  }
}

function mapError(error) {
  if (error?.code === "MISSING_ENV") {
    return {
      status: 500,
      message: "Configuration SMTP incomplète côté serveur."
    };
  }

  if (error?.code === "EAUTH") {
    return {
      status: 502,
      message: "Authentification SMTP refusée (vérifier clé/mot de passe)."
    };
  }

  if (["ESOCKET", "ECONNECTION", "ETIMEDOUT"].includes(error?.code)) {
    return {
      status: 504,
      message: "Connexion au serveur SMTP impossible."
    };
  }

  return { status: 500, message: "Impossible d'envoyer votre demande pour le moment." };
}

export async function POST(request) {
  try {
    validateEnv();

    const { name, email, phone } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Nom et email sont obligatoires." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.SMTP_TO || process.env.SMTP_FROM;
    const from = process.env.SMTP_FROM;

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: "Nouveau lead - Formation moniteur de ski",
      text: [
        `Nom: ${name}`,
        `Email: ${email}`,
        `Téléphone: ${phone || "Non communiqué"}`,
      ].join("\n"),
      html: `
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || "Non communiqué"}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead submission failed:", error);
    const mapped = mapError(error);
    return NextResponse.json(
      { error: mapped.message },
      { status: mapped.status }
    );
  }
}
