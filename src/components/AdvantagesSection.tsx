'use client';
import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: '🔍',
    title: 'Διαφάνεια σε κάθε στάδιο',
    text: 'Από τη συμφωνία με τον παραγωγό μέχρι την παράδοση στο κατάστημα, όλα τεκμηριώνονται και παρακολουθούνται.'
  },
  {
    icon: '🧭',
    title: 'Χαμηλό ρίσκο — μικρές, δοκιμασμένες συνεργασίες',
    text: 'Ξεκινάμε με μικρές ποσότητες και δοκιμαστικές αποστολές, για να χτίσουμε εμπιστοσύνη, όχι υποσχέσεις.'
  },
  {
    icon: '🚚',
    title: 'Εξαγωγική οργάνωση χωρίς επιπλέον βάρη',
    text: 'Ο παραγωγός δεν αναλαμβάνει διαδικασίες, πιστοποιήσεις ή μεταφορές. Η Geodora διαχειρίζεται όλο το κύκλωμα.'
  },
  {
    icon: '🌱',
    title: 'Σεβασμός στην πραγματικότητα κάθε παραγωγού',
    text: 'Δουλεύουμε με βάση τα χαρακτηριστικά, τις δυνατότητες και την εποχικότητα κάθε παραγωγού — χωρίς πίεση για όγκους, και πάντα με σεβασμό στο προϊόν όπως δημιουργήθηκε.'
  },
  {
    icon: '💶❌',
    title: 'Καμία συνδρομή — μόνο εμπιστοσύνη',
    text: 'Δεν ζητάμε κόστη συμμετοχής, δεσμεύσεις ή προκαταβολές. Ζητάμε μόνο ποιοτικά προϊόντα — όλα τα υπόλοιπα τα αναλαμβάνει η Geodora.'
  }
];

const bgVariants = [
  'bg-[#fdfef8]',
  'bg-[#e9fcd9]',
  'bg-[#fff2d6]',
  'bg-[#edf3ff]',
  'bg-[#fbe4e4]'
];

export default function AdvantagesSection() {
  return (
    <section className="section-box bg-[#f5f9e6] text-[#2E3A25]">
      <div className="w-[90%] max-w-screen-xl mx-auto">
        <h2 className="text-title-xl text-center mb-[clamp(3rem,6vh,6rem)]">
          Γιατί να μας εμπιστευτείτε
        </h2>
        <div className="space-y-6">
          {items.map(({ icon, title, text }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex items-start gap-4 ${bgVariants[i % bgVariants.length]} card-text-box`}
            >
              <span className="text-2xl">
                {icon}
              </span>
              <div>
                <h3 className="text-subtitle mb-1 leading-snug">{title}</h3>
                <p className="text-body">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
