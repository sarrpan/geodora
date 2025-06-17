'use client';

import { useTranslations } from 'next-intl';
import Head from 'next/head';
import SuggestProductForm from '../../../../components/SuggestProductForm';

export default function SuggestProductPage() {
  const t = useTranslations('SuggestProductPage');

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>

      <section className="max-w-2xl mx-auto px-4 py-10 text-[17px]">
        <h1 className="text-2xl font-bold mb-6 text-center">{t('title')}</h1>
        <SuggestProductForm />
      </section>
    </>
  );
}
