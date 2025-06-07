'use server';

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      subject: '📬 Νέο μήνυμα από τη φόρμα επικοινωνίας',
      text: `Όνομα: ${data.name}\nEmail: ${data.email}\n\nΜήνυμα:\n${data.message}`,

    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[MAIL ERROR]', error);
    return NextResponse.json({ success: false, error: 'Αποτυχία αποστολής email' }, { status: 500 });
  }
}
