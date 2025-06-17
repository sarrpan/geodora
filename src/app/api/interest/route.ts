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
      to: process.env.MAIL_TO,
      subject: '🌟 Νέα Εκδήλωση Ενδιαφέροντος από το Geodora.gr',
      html: `
        <h1>Νέα Εκδήλωση Ενδιαφέροντος</h1>
        <p><strong>Όνομα:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        {/* ΠΡΟΣΘΗΚΗ ΤΗΛΕΦΩΝΟΥ */}
        <p><strong>Τηλέφωνο:</strong> ${data.phone || '<em>(δεν δόθηκε)</em>'}</p>
        <p><strong>Ρόλος:</strong> ${data.role}</p>
        <p><strong>Είδος Προϊόντων:</strong> ${data.productType || 'Δεν συμπληρώθηκε'}</p>
        <hr>
        <p><strong>Σχόλιο:</strong></p>
        <p>${data.comment.replace(/\n/g, '<br>') || 'Δεν συμπληρώθηκε'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    // ΔΙΟΡΘΩΣΗ ΑΠΑΝΤΗΣΗΣ
    return NextResponse.json({ success: true, message: "Η εκδήλωση ενδιαφέροντος καταχωρήθηκε. Σας ευχαριστούμε!" });

  } catch (error) {
    console.error('Email sending error (interest):', error);
    return NextResponse.json({ error: 'Σφάλμα κατά την αποστολή email' }, { status: 500 });
  }
}