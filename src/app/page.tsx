// src/app/page.tsx

import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import AdvantagesSection from '../components/AdvantagesSection';
import ProductsSection from '../components/ProductsSection';
import InterestFormSection from '../components/InterestFormSection';
import LocationSection from '../components/LocationSection';


import { siteMeta } from "../lib/siteMeta";

export const metadata = siteMeta.home;


export default function HomePage() {
  return (
    <>
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
