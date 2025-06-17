'use client';

import { useTranslations } from 'next-intl';
import Head from 'next/head';

export default function TermsPage() {
  const t = useTranslations('TermsPage');

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>

      <section className="p-6 md:p-10 max-w-5xl mx-auto text-[17px] leading-relaxed space-y-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-[#d35400]">{t('title')}</h1>

        <p>{t('intro')}</p>

        <ul className="list-disc list-inside space-y-2">
          <li>{t('points.0')}</li>
          <li>{t('points.1')}</li>
          <li>{t('points.2')}</li>
          <li>{t('points.3')}</li>
          <li>{t('points.4')}</li>
        </ul>
      </section>
    </>
  );
}
