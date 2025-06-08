// src/app/page.tsx

import React from 'react';
import AboutSection from '../components/AboutSection';
import AdvantagesSection from '../components/AdvantagesSection';
import ProductsSection from '../components/ProductsSection';
import InterestFormSection from '../components/InterestFormSection';
import LocationSection from '../components/LocationSection';


export const metadata = {
  title: "Geodora – Δίκτυο αυθεντικών ελληνικών προϊόντων",
  description:
    "Η Geodora μεταφέρει αυθεντικά ελληνικά προϊόντα από το χωράφι στο ράφι, με διαφάνεια, ποιοτικές συνεργασίες και σεβασμό στον παραγωγό και τον καταναλωτή.",
};


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
