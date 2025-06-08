// src/app/page.tsx

import React from 'react';
import AboutSection from '../../components/AboutSection';
import AdvantagesSection from '../../components/AdvantagesSection';
import ProductsSection from '../../components/ProductsSection';
import InterestFormSection from '../../components/InterestFormSection';
import LocationSection from '../../components/LocationSection';


export default function HomePage() {
  return (
    <>
      <AboutSection />
      <AdvantagesSection />
      <ProductsSection />
      <InterestFormSection />
      <LocationSection />      
    </>
  );
}
