import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/** Verhindert, dass Eingaben aus dem Formular als HTML in der Mail landen. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const MAX_LENGTHS = {
  name: 120,
  email: 160,
  phone: 60,
  subject: 160,
  message: 5000,
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const phone = String(body.phone ?? '').trim();
    const subject = String(body.subject ?? '').trim();
    const message = String(body.message ?? '').trim();
    const honeypot = String(body.website ?? '').trim();

    // Bots füllen das versteckte Feld aus – wir tun so, als sei alles gut.
    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Bitte fülle alle Pflichtfelder aus.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return NextResponse.json(
        { error: 'Bitte gib eine gültige E-Mail-Adresse an.' },
        { status: 400 }
      );
    }

    const tooLong = Object.entries(MAX_LENGTHS).some(
      ([key, max]) => String(body[key] ?? '').length > max
    );
    if (tooLong) {
      return NextResponse.json({ error: 'Eingabe zu lang.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Benachrichtigung an Isabelle
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Neue Anfrage über die Website: ${subject}`,
      text: [
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Telefon: ${phone || 'nicht angegeben'}`,
        `Anliegen: ${subject}`,
        '',
        'Nachricht:',
        message,
      ].join('\n'),
      html: `
        <h2>Neue Anfrage über die Website</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(phone) || 'nicht angegeben'}</p>
        <p><strong>Anliegen:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    });

    // Bestätigung an die anfragende Person
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Deine Nachricht ist angekommen',
      text: `Hallo ${name},

danke für deine Nachricht. Sie ist bei mir angekommen und ich melde mich so bald wie möglich bei dir.

Herzliche Grüße
Isabelle Kroppenstedt
Transformation bei Isa`,
      html: `
        <p>Hallo ${escapeHtml(name)},</p>
        <p>danke für deine Nachricht. Sie ist bei mir angekommen und ich melde mich
        so bald wie möglich bei dir.</p>
        <p>Herzliche Grüße<br />Isabelle Kroppenstedt<br />
        <em>Transformation bei Isa</em></p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Die Nachricht konnte nicht versendet werden.' },
      { status: 500 }
    );
  }
}
