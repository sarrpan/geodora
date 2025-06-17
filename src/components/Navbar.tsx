'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';

const navLinksData = [
    { href: '/', icon: '/icons/home.svg', key: 'home' },
    { href: '/products', icon: '/icons/products.svg', key: 'products' },
    { href: '/synergasia', icon: '/icons/partnership.svg', key: 'collaboration' },
    { href: '/contact', icon: '/icons/contact.svg', key: 'contact' },
    { href: '/about', icon: '/icons/about.svg', key: 'about' },
];

export default function Navbar() {
  const t = useTranslations('Navbar');
  const pathname = usePathname();

  const navItems = navLinksData.map(item => ({
    ...item,
    label: t(`links.${item.key}`)
  }));

  return (
    <nav className="sticky top-0 z-50 bg-[#f9f9f3] transition-all duration-300 py-4 sm:py-6 shadow-md">
      {/* Το container με max-width και padding εξασφαλίζει τα περιθώρια από τις άκρες της οθόνης */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
        
        {/* ΑΛΛΑΓΗ 1: Αλλάζουμε τη λογική του layout. Είναι flex για mobile/tablet και grid για desktop (lg και πάνω) */}
        <div className="flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-x-8">
          
          {/* ΣΤΗΛΗ 1 (ΑΡΙΣΤΕΡΑ): Logo. Στοιχίζεται στην αρχή. */}
          <Link href="/" className="flex items-center gap-2 shrink-0 lg:justify-self-start">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="transition-all duration-300 -mt-3"
            />
            {/* ΑΛΛΑΓΗ 2: Αλλάζουμε το breakpoint από sm σε lg για σωστή εμφάνιση σε ταμπλέτες */}
            <div className="flex items-center gap-2 transition-all duration-300 mt-3 lg:hidden">
              <span className="text-[22px] font-bold text-[rgba(75,46,30,1)]">eodora –</span>
              <span className="text-[14px] font-semibold italic text-orange-600">Δώρα της γης</span>
            </div>
            <div className="hidden lg:flex flex-col transition-all duration-300 mt-2 -translate-y-[8px]">
              <span className="text-[14px] font-semibold italic text-orange-600 leading-tight sm:-ml-[2px] whitespace-nowrap">Δώρα της γης</span>
              <span className="text-[22px] font-bold text-[rgba(75,46,30,1)] leading-none">eodora</span>
            </div>
          </Link>

          {/* ΣΤΗΛΗ 2 (ΚΕΝΤΡΟ): Desktop Links. Εμφανίζονται μόνο σε lg και πάνω. */}
          <ul className="hidden lg:flex items-center justify-center space-x-4 md:space-x-6 lg:space-x-8">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-[17px] font-medium transition-colors hover:text-orange-500 ${
                    pathname === href ? 'text-orange-600 font-bold' : 'text-gray-800'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ΣΤΗΛΗ 3 (ΔΕΞΙΑ): Language Switcher */}
          <div className="lg:justify-self-end">
            {/* Για mobile/tablet, χρησιμοποιεί τη responsive διάταξη (2x2) */}
            <div className="lg:hidden">
              <LanguageSwitcher variant="responsive" />
            </div>
            {/* Για desktop, χρησιμοποιεί την inline διάταξη (1x4) */}
            <div className="hidden lg:block">
              <LanguageSwitcher variant="inline" />
            </div>
          </div>
        </div>
      </div>

      {/* ΑΛΛΑΓΗ 2: Το κάτω μενού των εικονιδίων εμφανίζεται τώρα σε mobile και tablet */}
      <div className="lg:hidden mt-4 pt-2 border-t border-gray-200">
        <div className="flex justify-around items-center px-2">
          {navItems.map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center text-center w-16 transition-colors hover:text-primary ${
                pathname === href ? 'text-orange-600 font-semibold' : 'text-gray-800'
              }`}
            >
              <Image src={icon} alt={label} width={30} height={30} />
              <span className="mt-1 text-[10px] leading-tight">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}