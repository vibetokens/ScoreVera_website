import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    // 409 = already subscribed — treat as success
    if (res.status === 409) {
      return NextResponse.json({ ok: true, message: "You're already subscribed!" });
    }
    console.error("MailerLite error:", body);
    return NextResponse.json({ error: "Could not subscribe. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, message: "You're subscribed!" });
}
