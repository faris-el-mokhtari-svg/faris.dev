import { NextRequest, NextResponse } from "next/server";

// TODO: npm install resend
// Then replace this handler with:
//
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);
//
// await resend.emails.send({
//   from: "Deploy Kontaktformular <noreply@yourdomain.com>",
//   to: "faris.elmokhtari@icloud.com",
//   subject: `Neue Anfrage von ${data.fullName}`,
//   text: `Name: ${data.fullName}\nE-Mail: ${data.email}\nTel: ${data.phone}\n\n${data.message}`,
// });

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { fullName, email, phone, message } = data;

    if (!fullName || !email) {
      return NextResponse.json({ error: "Fehlende Pflichtfelder" }, { status: 400 });
    }

    // Remove this log and uncomment the Resend block above once installed
    console.log("Kontaktanfrage:", { fullName, email, phone, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Serverfehler" }, { status: 500 });
  }
}
