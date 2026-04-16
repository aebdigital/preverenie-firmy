import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  website?: string;
};

type Smtp2goResponse = {
  data?: {
    succeeded?: number;
    failed?: number;
    failures?: string[];
    email_id?: string;
  };
  request_id?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  const recipient = process.env.CONTACT_FORM_RECIPIENT?.trim();
  const apiKey = process.env.SMTP2GO_API_KEY?.trim();
  const sender = process.env.SMTP2GO_SENDER?.trim();

  if (!recipient || !apiKey || !sender) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Kontaktný formulár ešte nie je nakonfigurovaný. Doplnite SMTP2GO premenné do prostredia."
      },
      { status: 500 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Neplatné dáta formulára."
      },
      { status: 400 }
    );
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const phone = String(payload.phone ?? "").trim();
  const service = String(payload.service ?? "").trim();
  const message = String(payload.message ?? "").trim();
  const website = String(payload.website ?? "").trim();

  if (website) {
    return NextResponse.json({
      ok: true,
      message: "Správa bola prijatá."
    });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        ok: false,
        message: "Prosím vyplňte meno, e-mail a správu."
      },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      {
        ok: false,
        message: "Prosím zadajte platnú e-mailovú adresu."
      },
      { status: 400 }
    );
  }

  const subject = service
    ? `Dopyt z prevereniefirmy.sk - ${service}`
    : "Dopyt z prevereniefirmy.sk";

  const textBody = [
    "Nový dopyt z kontaktného formulára na prevereniefirmy.sk",
    "",
    `Meno: ${name}`,
    `E-mail: ${email}`,
    `Telefón: ${phone || "-"}`,
    `Služba: ${service || "-"}`,
    "",
    "Správa:",
    message
  ].join("\n");

  const htmlBody = `
    <h1>Nový dopyt z prevereniefirmy.sk</h1>
    <p><strong>Meno:</strong> ${escapeHtml(name)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefón:</strong> ${escapeHtml(phone || "-")}</p>
    <p><strong>Služba:</strong> ${escapeHtml(service || "-")}</p>
    <p><strong>Správa:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `.trim();

  const smtpResponse = await fetch("https://api.smtp2go.com/v3/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      "X-Smtp2go-Api-Key": apiKey
    },
    body: JSON.stringify({
      sender,
      to: [recipient],
      subject,
      text_body: textBody,
      html_body: htmlBody
    })
  });

  const smtpResult = (await smtpResponse
    .json()
    .catch(() => null)) as Smtp2goResponse | null;

  if (
    !smtpResponse.ok ||
    !smtpResult?.data ||
    smtpResult.data.succeeded !== 1 ||
    smtpResult.data.failed
  ) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Správu sa nepodarilo odoslať cez SMTP2GO. Skontrolujte API kľúč, sender adresu a recipient adresu."
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Správa bola úspešne odoslaná. Ozveme sa vám čo najskôr."
  });
}
