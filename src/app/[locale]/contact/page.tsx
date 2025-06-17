'use client';

import { useTranslations } from 'next-intl';
import Head from 'next/head';
import ContactForm from '../../../components/ContactForm';

export default function ContactPage() {
  const t = useTranslations('ContactPage');

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>

      <section className="p-6 md:p-10 max-w-5xl mx-auto text-[17px] leading-relaxed space-y-6">
        <h1 className="text-2xl font-bold mb-4 text-center">{t('title')}</h1>
        <p className="text-center">{t('intro')}</p>
        <div className="space-y-2">
          <p>
            <strong>{t('emailLabel')}</strong>{' '}
            <a href="mailto:info@geodora.gr" className="underline">
              info@geodora.gr
            </a>
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
