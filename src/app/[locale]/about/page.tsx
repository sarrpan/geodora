'use client';

import { useTranslations } from 'next-intl';
import Head from 'next/head';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>

      <section className="p-6 md:p-10 max-w-5xl mx-auto text-[17px] leading-relaxed space-y-8">
        <h1 className="text-2xl font-bold mb-6 text-center">{t('title')}</h1>
        <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-center">
          <div className="md:w-1/2 space-y-4">
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
            <p>{t('paragraph3')}</p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/ProductBasket.png"
              alt={t('image.alt')}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="text-lg text-center text-gray-600 mt-2">
              {t('image.caption')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
