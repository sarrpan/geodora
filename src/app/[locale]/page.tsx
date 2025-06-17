'use client';

import { useTranslations } from 'next-intl';
import Head from 'next/head';

import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import AdvantagesSection from '../../components/AdvantagesSection';
import ProductsSection from '../../components/ProductsSection';
import InterestFormSection from '../../components/InterestFormSection';
import LocationSection from '../../components/LocationSection';

export default function HomePage() {
 const t = useTranslations('HomePage');

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>

      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <HeroSection />
      </div>
      <AboutSection />
      <AdvantagesSection />
      <ProductsSection />
      <InterestFormSection />
      <LocationSection />
    </>
  );
}
