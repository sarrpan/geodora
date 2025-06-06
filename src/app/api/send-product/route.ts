'use server';

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // π.χ. mail.geodora.gr
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // π.χ. info@geodora.gr
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: '📦 Νέα πρόταση προϊόντος από τη φόρμα',
      text: `
Ονοματεπώνυμο: ${data.name}
Email: ${data.email}
Τύπος προϊόντος: ${data.productType}
Προέλευση / Περιοχή: ${data.origin}
Συσκευασία / Διαθεσιμότητα: ${data.packaging}
Σχόλια: ${data.comments || '(κανένα)'}
      `.trim(),
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[MAIL ERROR]', error);
    return NextResponse.json({ success: false, error: 'Αποτυχία αποστολής email' }, { status: 500 });
  }
}
