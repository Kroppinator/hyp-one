import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure your email service here
    // This is a placeholder - configure with your GMX/email settings
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Neue Kontaktanfrage: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Telefon: ${phone || 'Nicht angegeben'}

Nachricht:
${message}
      `,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
        <hr />
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Wir haben deine Nachricht erhalten',
      text: `
Hallo ${name},

danke für deine Kontaktanfrage. Wir haben deine Nachricht erhalten und werden uns so bald wie möglich bei dir melden.

Liebe Grüße
      `,
      html: `
        <h2>Danke für deine Nachricht!</h2>
        <p>Hallo ${name},</p>
        <p>danke für deine Kontaktanfrage. Wir haben deine Nachricht erhalten und werden uns so bald wie möglich bei dir melden.</p>
        <p>Liebe Grüße</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
