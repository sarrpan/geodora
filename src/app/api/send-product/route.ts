'use server';

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const now = new Date();
    const datetime = now.toLocaleString('el-GR', {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      subject: '📬 Νέα πρόταση προϊόντος από Geodora',
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5;">
          <div style="text-align: center; margin-bottom: 1em;">
            <img src="https://geodora.gr/logo.png" alt="Geodora logo" width="140" />
          </div>
          <h2 style="color: #b44d00;">📬 Πρόταση προϊόντος</h2>
          <p><strong>Ημερομηνία:</strong> ${datetime}</p>
          <p><strong>Όνομα:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          {/* ΠΡΟΣΘΗΚΗ: Το πεδίο του τηλεφώνου */}
          <p><strong>Τηλέφωνο:</strong> ${data.phone || '<em>(δεν δόθηκε)</em>'}</p>
          <hr style="margin: 1.5em 0;" />
          <p><strong>Είδος προϊόντος:</strong> ${data.productType}</p>
          <p><strong>Προέλευση / Περιοχή:</strong> ${data.origin}</p>
          <p><strong>Συσκευασία / Διαθεσιμότητα:</strong> ${data.packaging}</p>
          <p><strong>Σχόλια:</strong><br/>${data.message || '<em>(κανένα σχόλιο)</em>'}</p>
          <hr style="margin-top: 2em;" />
          <p style="font-size: 14px; color: #777;">
            Email αυτόματης ενημέρωσης από τον ιστότοπο <strong>Geodora</strong><br/>
            Μην απαντήσετε σε αυτό το μήνυμα. Αν θέλετε να επικοινωνήσετε μαζί μας,<br/>
            γράψτε στο <a href="mailto:info@geodora.gr">info@geodora.gr</a>.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // ΔΙΟΡΘΩΣΗ: Η απάντηση επιτυχίας
    return NextResponse.json({ success: true, message: "Ευχαριστούμε για την πρότασή σας! Θα την εξετάσουμε με προσοχή." });

  } catch (error) {
    console.error('[MAIL ERROR]', error);
    return NextResponse.json(
      { success: false, error: 'Αποτυχία αποστολής email' },
      { status: 500 }
    );
  }
}