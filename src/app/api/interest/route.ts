import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    // Λαμβάνουμε τα δεδομένα της φόρμας από το frontend
    const data = await req.json();

    // Δημιουργία του transporter του Nodemailer με τα στοιχεία από το .env.local
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.MAIL_USER, // geodora.site@gmail.com
        pass: process.env.MAIL_PASS, // ο κωδικός σου
      },
    });

    // Ρυθμίσεις του email που θα σταλεί
    const mailOptions = {
      from: process.env.MAIL_USER, // geodora.site@gmail.com
      to: process.env.MAIL_TO, // info@geodora.gr
      subject: '🌟 Νέα Εκδήλωση Ενδιαφέροντος από το Geodora.gr',
      // Διαμόρφωση του κυρίως κειμένου του email με HTML
      html: `
        <h1>Νέα Εκδήλωση Ενδιαφέροντος</h1>
        <p><strong>Όνομα:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Ρόλος:</strong> ${data.role}</p>
        <p><strong>Είδος Προϊόντων:</strong> ${data.productType || 'Δεν συμπληρώθηκε'}</p>
        <hr>
        <p><strong>Σχόλιο:</strong></p>
        <p>${data.comment.replace(/\n/g, '<br>') || 'Δεν συμπληρώθηκε'}</p>
      `,
    };

    // Αποστολή του email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error (interest):', error);
    return NextResponse.json({ error: 'Σφάλμα κατά την αποστολή email' }, { status: 500 });
  }
}