'use client';

import { useTranslations } from 'next-intl';
import Head from 'next/head';

export default function PrivacySettingsPage() {
  const t = useTranslations('PrivacySettingsPage');

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>

      <section className="p-6 md:p-10 max-w-5xl mx-auto text-[17px] leading-relaxed space-y-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-[#d35400]">
          {t('title')}
        </h1>

        <p>{t('p1')}</p>
        <p>{t('p2')}</p>
        <p>{t('p3')}</p>
        <p>{t('p4')}</p>
      </section>
    </>
  );
}
