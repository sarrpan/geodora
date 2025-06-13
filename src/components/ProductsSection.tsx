'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProductsSection() {
  const [animate, setAnimate] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wheelRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimate(true);
          } else {
            setAnimate(false);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(wheelRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (animate) {
      interval = setInterval(() => {
        setAnimate(false);
        setTimeout(() => setAnimate(true), 50);
      }, 20000);
    }

    return () => clearInterval(interval);
  }, [animate]);

  const textBlocks = [
    {
      title: "Μικρή αλλά ποιοτική αρχική γκάμα",
      text: `Η Geodora ξεκίνησε με μια μικρή, επιλεγμένη γκάμα — ελαιόλαδο, ελιές, βότανα και αποξηραμένα τρόφιμα — που επιλέγονται, τυποποιούνται και διακινούνται με δική μας ευθύνη, υπό την ετικέτα Geodora.`,
    },
    {
      title: "Αναζητούμε αυθεντικά προϊόντα",
      text: `Παράλληλα, αναζητούμε προϊόντα που ξεχωρίζουν για την ποιότητά τους και σχετίζονται είτε με τις κατηγορίες που ήδη διακινούμε, είτε ανοίγουν δρόμους σε νέες, εξίσου αξιόλογες κατευθύνσεις.`,
    },
  ];

  return (
    <section className="section-box bg-[#EEF5ED] text-[#2E3A25]">
      <div className="w-[90%] max-w-screen-xl mx-auto">
        <h2 className="text-title-xl text-center mb-6">Ποια προϊόντα αναζητούμε</h2>
      </div>

      {/* Description blocks */}
      <div className="about-section-columns flex flex-col lg:flex-row gap-6 mt-10 w-[90%] max-w-screen-xl mx-auto">
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

      {/* Philosophy Block */}
      <div className="products-philosophy-box product-cta-columns w-[90%] max-w-screen-xl mx-auto mt-6 mb-20 flex justify-center">
        <div className="card-text-box bg-[#fefcf8] text-left max-w-[640px]">
          <h3 className="text-subtitle mb-4 text-center text-[#e67b00]">Η φιλοσοφία μας</h3>
          <p className="text-body ">
            "Η Geodora πιστεύει στη βιώσιμη γεωργία, τη συνεργασία με σεβασμό και την ποιότητα που αξίζει να φτάσει μακριά."
          </p>
        </div>
      </div>

      {/* Product Wheel + CTA */}
      <div className="w-[90%] max-w-screen-xl mx-auto mt-10 mb-12">
        <div className="about-section-columns product-cta-columns flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Product Wheel as SVG */}
          <div className="w-full lg:w-[60%] flex flex-col items-center justify-center">
            <div
              ref={wheelRef}
              className={`${animate ? 'wheel-animate' : ''} relative w-[250px] md:w-[350px] lg:w-[500px]`}
            >
              <Image
                src="/images/roda.svg"
                alt="Ρόδα προϊόντων"
                width={500}
                height={500}
                className="w-full h-auto select-none"
                priority
              />

              {/* Μόνο το ερωτηματικό */}
              <div className="absolute left-1/2 top-[87%] -translate-x-1/2 -translate-y-1/2 z-10 w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] md:w-[54px] md:h-[54px] lg:w-[56px] lg:h-[56px] flex items-center justify-center">
                <span className="text-white text-2xl sm:text-4xl font-bold">?</span>
              </div>
            </div>

            {/* Κείμενο κάτω από τη ρόδα */}
            <p className="text-sm md:text-base font-semibold text-center mt-6 text-[#2E3A25] animate-heartbeat">
              Το επόμενο προϊόν
            </p>
          </div>

          {/* CTA Box */}
          <div className="w-full lg:w-[40%]">
            <div className="card-text-box bg-[#FFFBF0] text-left mt-16 lg:mt-0">
              <p className="text-body">
                Αν έχετε κάτι ποιοτικό και αυθεντικό, επικοινωνήστε μαζί μας.<br />
                Η Geodora επεκτείνει σταδιακά το εύρος της,<br />
                με προτεραιότητα στη σταθερότητα, τη σωστή συσκευασία και την αμοιβαία εμπιστοσύνη.
              </p>
              <div className="flex justify-center mt-8 mb-4">
                <Link href="/products/suggest-product">
                  <button className="bg-[#e67b00] hover:bg-[#2E3A25] text-white text-lg md:text-xl font-semibold py-2 px-6 rounded-full">
                    Πρότεινε προϊόν
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wheelLoad {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(-5deg); }
          100% { transform: rotate(0deg); }
        }
        .wheel-animate {
          animation: wheelLoad 0.8s ease-out;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        .animate-heartbeat {
          animation: heartbeat 1.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
