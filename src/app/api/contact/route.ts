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
      text: `Όνομα: ${data.name}\nEmail: ${data.email}\nΤηλέφωνο: ${data.phone || 'Δεν συμπληρώθηκε'}\n\nΜήνυμα:\n${data.message}`,
    };

    await transporter.sendMail(mailOptions);

    // Η ΔΙΟΡΘΩΣΗ ΕΙΝΑΙ ΕΔΩ: Προσθέτουμε το μήνυμα επιτυχίας
    return NextResponse.json({ success: true, message: "Το μήνυμά σας εστάλη με επιτυχία! Θα επικοινωνήσουμε μαζί σας σύντομα." });
    
  } catch (error) {
    console.error('Email sending error (contact):', error);
    return NextResponse.json({ error: 'Σφάλμα κατά την αποστολή email' }, { status: 500 });
  }
}