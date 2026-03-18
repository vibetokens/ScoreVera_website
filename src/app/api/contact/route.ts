import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }
  if (!message || message.trim().length < 5) {
    return NextResponse.json({ error: "Please include a message." }, { status: 400 });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  // Add/update subscriber in MailerLite with contact details as custom fields
  const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      email,
      fields: {
        name: name || "",
        last_name: "",
        // Store contact inquiry info in notes field
        company: `Contact: [${subject}] ${message.slice(0, 200)}`,
      },
      groups: [],
    }),
  });

  if (!res.ok && res.status !== 409) {
    const body = await res.json().catch(() => ({}));
    console.error("MailerLite contact error:", body);
    // Don't fail the user — log it but return success anyway
  }

  return NextResponse.json({ ok: true, message: "Message received! We'll be in touch within 1–2 business days." });
}
