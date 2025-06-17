'use client';

import Link from "next/link";
import { useTranslations } from 'next-intl';
import Head from 'next/head';

const bgVariants = [
  "bg-[#fdfef8]",
  "bg-[#e9fcd9]",
  "bg-[#fff2d6]",
  "bg-[#edf3ff]",
  "bg-[#fbe4e4]",
  "bg-[#e1f2ec]"
];

export default function SynergasiaPage() {
  const t = useTranslations('CooperationPage');

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>

      <section className="p-6 md:p-10 max-w-5xl mx-auto text-[17px] leading-relaxed space-y-10">
        <div className="text-left space-y-4 max-w-3xl mx-auto mb-8">
          <p className="text-[17px] leading-relaxed">
            <strong>{t('intro.strong')}</strong><br />
            {t('intro.text')}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <a href="#producers">
              <button className="bg-[#0D4715] text-white px-5 py-2 rounded hover:bg-opacity-90 transition w-full sm:w-auto">
                {t('buttons.producer')}
              </button>
            </a>
            <a href="#stores">
              <button className="bg-[#2B6CB0] text-white px-5 py-2 rounded hover:bg-opacity-90 transition w-full sm:w-auto">
                {t('buttons.store')}
              </button>
            </a>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center">{t('title')}</h1>

        {/* ΠΑΡΑΓΩΓΟΙ */}
        <div>
          <h2 id="producers" className="text-xl font-semibold mt-8 mb-4 scroll-mt-[150px]">{t('producers.title')}</h2>
          <p className="mb-6">
            <strong>{t('producers.introStrong')}</strong><br />
            {t('producers.introText')}
          </p>

          <div className="space-y-6">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className={`flex items-start gap-4 ${bgVariants[i]} card-text-box`}>
                <div>
                  <h3 className="text-subtitle mb-1 leading-snug">{t(`producers.points.${i}.title`)}</h3>
                  <p className="text-body">{t(`producers.points.${i}.text`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ΚΑΤΑΣΤΗΜΑΤΑ */}
        <div>
          <h2 id="stores" className="text-xl font-semibold mt-12 mb-4 scroll-mt-[150px]">{t('stores.title')}</h2>
          <div className="space-y-6">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className={`${bgVariants[i]} p-4 rounded-lg shadow-sm`}>
                <h3 className="text-base font-semibold">{t(`stores.points.${i}.title`)}</h3>
                <p className="text-sm mt-1">{t(`stores.points.${i}.text`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ΕΠΙΚΟΙΝΩΝΙΑ */}
        <div className="pt-10 text-center">
          <p className="mb-4">{t('contact.prompt')}</p>
          <Link href="/contact">
            <button className="bg-[#0D4715] text-white px-6 py-2 rounded hover:bg-opacity-90 transition">
              {t('contact.button')}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
