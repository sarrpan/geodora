'use client';

import { motion } from 'framer-motion';

const textBlocks = [
  {
    title: "Η ιδέα μας",
    text: `Η Geodora ξεκινά από μια απλή ιδέα: Ότι τα προϊόντα — δώρα της ελληνικής γης — αξίζουν να φτάσουν σε εκείνους που τα εκτιμούν, με δίκαιη τιμή για τον παραγωγό και λιγότερα περιττά κόστη για τον τελικό καταναλωτή.`
  },
  {
    title: "Ο ρόλος μας",
    text: `Δεν μεσολαβούμε απλώς — χτίζουμε σχέσεις και προσθέτουμε αξία με διαφάνεια. Είμαστε ο κρίκος που φροντίζει να υπάρχει ποιότητα, αξιοπιστία και ισορροπία σε όλη τη διαδρομή.`
  },
  {
    title: "Η αρχή μας",
    text: `Ξεκινάμε με λίγες συνεργασίες, δοκιμασμένες αποστολές, και πραγματικό σεβασμό στον άνθρωπο που παράγει και σε εκείνον που επιλέγει να διαθέσει χώρο στο ράφι του.`
  },
];

export default function AboutSection() {
  return (
    <section className="section-box bg-[#e6efcd] text-[#2E3A25] py-12 sm:py-16">
      <div className="w-[90%] max-w-screen-xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-title-xl inline-block">Ποιοι είμαστε</h2>
          <span className="text-subtitle block mt-2 xl:mt-0 xl:inline-block xl:ml-4 text-orange-700">
            – Το όραμά μας
          </span>
        </div>

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