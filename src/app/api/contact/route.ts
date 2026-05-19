import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { fullName, email, phone, message } = data;

    if (!fullName || !email) {
      return NextResponse.json({ error: "Fehlende Pflichtfelder" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Deploy Change <info@deploy-change.de>",
      to: "info@deploy-change.de",
      replyTo: email,
      subject: `Neue Anfrage von ${fullName}`,
      text: `Name: ${fullName}\nE-Mail: ${email}\nTelefon: ${phone || "–"}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Serverfehler" }, { status: 500 });
  }
}
