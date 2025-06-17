// components/AboutSection.tsx

'use client';

import { motion } from 'framer-motion';
// ΒΗΜΑ 1: Κάνουμε import το useTranslations
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  // ΒΗΜΑ 2: "Φορτώνουμε" το λεξικό για αυτό το component.
  // Το 'AboutSection' πρέπει να υπάρχει στο αρχείο .json
  const t = useTranslations('AboutSection');

  // ΒΗΜΑ 3: Δημιουργούμε τη λίστα δυναμικά, διαβάζοντας από το "λεξικό" μας.
  // Ορίζουμε απλά τα "κλειδιά" για κάθε μπλοκ κειμένου.
  const blockKeys = ['idea', 'role', 'principle'];

  const textBlocks = blockKeys.map(key => ({
    // Για το κλειδί 'idea', θα ψάξει το 'blocks.idea.title' και 'blocks.idea.text' στο .json
    title: t(`blocks.${key}.title`),
    text: t(`blocks.${key}.text`),
  }));

  return (
    <section className="section-box bg-[#e6efcd] text-[#2E3A25] py-12 sm:py-16">
      <div className="w-[90%] max-w-screen-xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          {/* ΒΗΜΑ 4: Αντικαθιστούμε τα στατικά κείμενα με κλήσεις στη συνάρτηση t() */}
          <h2 className="text-title-xl inline-block">{t('title')}</h2>
          <span className="text-subtitle block mt-2 xl:mt-0 xl:inline-block xl:ml-4 text-orange-700">
            {t('subtitle')}
          </span>
        </div>

        {/* Η υπόλοιπη λογική παραμένει ΑΚΡΙΒΩΣ η ίδια */}
        <div className="flex flex-col lg:flex-row gap-6 xl:gap-32 about-section-columns">
          {textBlocks.map(({ title, text }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-[#fefcf8] card-text-box flex-1"
            >
              <h3 className="text-subtitle mb-2">{title}</h3>
              <p className="text-body">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}