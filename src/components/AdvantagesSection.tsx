// components/AdvantagesSection.tsx

'use client';

import { motion } from 'framer-motion';
// ΒΗΜΑ 1: Κάνουμε import το useTranslations
import { useTranslations } from 'next-intl';

// Τα δεδομένα που αφορούν την εμφάνιση (εικονίδια, χρώματα) παραμένουν εδώ.
const itemsData = [
  { icon: '🔍', bg: 'bg-[#fdfef8]' },
  { icon: '🧭', bg: 'bg-[#e9fcd9]' },
  { icon: '🚚', bg: 'bg-[#fff2d6]' },
  { icon: '🌱', bg: 'bg-[#edf3ff]' },
  { icon: '💶❌', bg: 'bg-[#fbe4e4]' },
];

export default function AdvantagesSection() {
  // ΒΗΜΑ 2: "Φορτώνουμε" το λεξικό για αυτό το component.
  const t = useTranslations('AdvantagesSection');

  // ΒΗΜΑ 3: Δημιουργούμε τη λίστα δυναμικά.
  // Συνδυάζουμε τα δεδομένα εμφάνισης (π.χ. icon) με το περιεχόμενο από το .json.
  // Η πρόσβαση στα στοιχεία του πίνακα 'items' στο .json γίνεται με τον δείκτη (index).
  const items = itemsData.map((item, index) => ({
    icon: item.icon,
    bg: item.bg,
    // Για το πρώτο αντικείμενο (index=0), διαβάζει τα 'items.0.title' και 'items.0.text'
    title: t(`items.${index}.title`),
    text: t(`items.${index}.text`),
  }));

  return (
    <section className="section-box bg-[#f5f9e6] text-[#2E3A25]">
      <div className="w-[90%] max-w-screen-xl mx-auto">
        {/* ΒΗΜΑ 4: Αντικαθιστούμε τον στατικό τίτλο */}
        <h2 className="text-title-xl text-center mb-[clamp(3rem,6vh,6rem)]">
          {t('title')}
        </h2>

        {/* Η υπόλοιπη λογική παραμένει η ίδια, απλώς χρησιμοποιεί τη νέα λίστα "items" */}
        <div className="space-y-6">
          {items.map(({ icon, title, text, bg }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex items-start gap-4 ${bg} card-text-box`}
            >
              <span className="text-2xl">{icon}</span>
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