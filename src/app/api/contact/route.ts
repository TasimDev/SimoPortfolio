import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const attempts = new Map<string, { count: number; resetAt: number }>();

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 16_384) {
    return NextResponse.json({ error: "payload_too_large" }, { status: 413 });
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "invalid_content_type" }, { status: 415 });
  }

  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) {
        return NextResponse.json({ error: "invalid_origin" }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: "invalid_origin" }, { status: 403 });
    }
  }

  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const clientKey = forwarded || "local";
  const now = Date.now();
  const current = attempts.get(clientKey);
  if (attempts.size > 500) {
    for (const [key, attempt] of attempts) {
      if (attempt.resetAt <= now) attempts.delete(key);
    }
  }
  if (current && current.resetAt > now && current.count >= 5) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }
  attempts.set(clientKey, current && current.resetAt > now ? { ...current, count: current.count + 1 } : { count: 1, resetAt: now + 15 * 60_000 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const name = text(body.name);
  const email = text(body.email);
  const phone = text(body.phone);
  const service = text(body.service);
  const message = text(body.message);
  const website = text(body.website);

  if (website) return NextResponse.json({ ok: true });
  if (name.length < 2 || name.length > 80 || !EMAIL_PATTERN.test(email) || email.length > 160 || phone.length > 40 || !service || service.length > 80 || message.length < 20 || message.length > 4000) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return NextResponse.json({ error: "contact_not_configured" }, { status: 503 });
  }

  const safe = { name: escapeHtml(name), email: escapeHtml(email), phone: escapeHtml(phone), service: escapeHtml(service), message: escapeHtml(message).replace(/\n/g, "<br />") };
  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Ново запитване от ${name}`,
        text: `Име: ${name}\nИмейл: ${email}\nТелефон: ${phone || "—"}\nУслуга: ${service}\n\n${message}`,
        html: `<h2>Ново запитване</h2><p><strong>Име:</strong> ${safe.name}</p><p><strong>Имейл:</strong> ${safe.email}</p><p><strong>Телефон:</strong> ${safe.phone || "—"}</p><p><strong>Услуга:</strong> ${safe.service}</p><hr><p>${safe.message}</p>`,
      }),
    });
  } catch {
    return NextResponse.json({ error: "delivery_unavailable" }, { status: 502 });
  }

  if (!response.ok) return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  return NextResponse.json({ ok: true }, { status: 201 });
}
