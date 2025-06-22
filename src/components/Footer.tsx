// src/components/Footer.tsx

"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const t = useTranslations("Footer");
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [openUseful, setOpenUseful] = useState(false);

  const menuLinks = [
    { href: "/", label: t("menu.home") },
    { href: "/products", label: t("menu.products") },
    { href: "/synergasia", label: t("menu.collaboration") },
    { href: "/contact", label: t("menu.contact") },
    { href: "/about", label: t("menu.about") },
  ];

  const legalLinks = [
    { href: "/terms", label: t("legal.terms") },
    { href: "/privacy", label: t("legal.privacy") },
    { href: "/cookies", label: t("legal.cookies") },
    { href: "/privacy-settings", label: t("legal.privacySettings") },
  ];

  // ΒΕΛΤΙΩΣΗ: Όταν ανοίγει το ένα μενού, κλείνει το άλλο.
  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
    if (!openMenu) setOpenUseful(false);
  };
  const handleUsefulToggle = () => {
    setOpenUseful(!openUseful);
    if (!openUseful) setOpenMenu(false);
  };

  const linkClass = (href: string) =>
    `block px-3 py-2 hover:text-orange-600 ${
      pathname === href ? "text-orange-600 font-semibold" : "font-normal"
    }`;

  const SocialAndLanguageLinks = () => (
    <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-4 mt-6">
      <div className="flex gap-5 items-center">
        <a href="https://www.facebook.com/profile.php?id=61577839610921" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-75">
          <Image src="/images/facebook.svg" alt={t('alt.facebook')} width={28} height={28} />
        </a>
        <a href="https://www.instagram.com/geodora.gr/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-75">
          <Image src="/images/instagram.svg" alt={t('alt.instagram')} width={28} height={28} />
        </a>
        {/*<a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-75">
          <Image src="/images/youtube.svg" alt={t('alt.youtube')} width={28} height={28} />
        </a>*/}
      </div>
      <LanguageSwitcher variant="inline" />
    </div>
  );

  return (
    <footer className="border-t border-gray-200 pt-6 pb-10 text-gray-700 shadow-inner mt-12 bg-[#f9f9f3]">
      <div className="max-w-screen-lg mx-auto px-4 md:px-8">
        
        {/* ----- Desktop Layout ----- */}
        <div className="hidden lg:flex flex-col items-center text-sm mb-8 gap-y-6">
          <Link href="/" className="flex items-center gap-1 justify-center">
            <Image src="/images/logo.svg" alt={t('alt.logo')} width={40} height={40} className="self-center -mt-1" />
            <div className="flex items-center gap-2 mt-4">
              <span className="text-2xl font-bold text-[rgba(75,46,30,1)]">eodora –</span>
              <span className="text-base italic text-orange-600">{t("tagline")}</span>
            </div>
          </Link>
          <div className="flex justify-center items-center gap-4">
            {menuLinks.map(link => <Link key={link.href} href={link.href} className={linkClass(link.href)}>{link.label}</Link>)}
          </div>
          <div className="flex justify-center items-center gap-4">
            {legalLinks.map(link => <Link key={link.href} href={link.href} className={linkClass(link.href)}>{link.label}</Link>)}
          </div>
          <div className="text-center space-y-2">
            <p>{t('contact.email')}: <a href="mailto:info@geodora.gr" className="underline hover:text-orange-600">info@geodora.gr</a> | {t('contact.phone')}: +30 6936181744</p>
            <p>{t('contact.locationHeader')}: {t('contact.locationValue')} | {t('contact.hoursHeader')}: <span className="font-bold">09:00 – 17:00</span></p>
          </div>
          <SocialAndLanguageLinks />
        </div>

        {/* ----- Mobile Layout ----- */}
        <div className="lg:hidden">
          <div className="flex items-center gap-4 mb-6">
            <Image src="/images/logo.svg" alt={t('alt.logo')} width={50} height={50} />
            <div>
              <h3 className="text-xl font-bold text-[#4b2e1e]">Geodora</h3>
              <p className="text-sm italic leading-snug">{t("tagline")}</p>
            </div>
          </div>
          <div className="space-y-3 text-base">
            <div className="border rounded-md overflow-hidden">
              <button onClick={handleMenuToggle} className="w-full flex justify-between items-center px-4 py-3 font-medium">
                {t('menu.title')}
                <svg className={`w-5 h-5 transform transition-transform ${openMenu ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openMenu ? "max-h-96" : "max-h-0"}`}>
                <div className="py-2 flex flex-col">
                  {/* Η ΑΛΛΑΓΗ ΕΙΝΑΙ ΕΔΩ: Προσθήκη onClick για να κλείνει το μενού */}
                  {menuLinks.map(link => <Link key={link.href} href={link.href} onClick={() => setOpenMenu(false)} className={linkClass(link.href)}>{link.label}</Link>)}
                </div>
              </div>
            </div>
            <div className="border rounded-md overflow-hidden">
              <button onClick={handleUsefulToggle} className="w-full flex justify-between items-center px-4 py-3 font-medium">
                {t('legal.title')}
                <svg className={`w-5 h-5 transform transition-transform ${openUseful ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openUseful ? "max-h-96" : "max-h-0"}`}>
                <div className="py-2 flex flex-col">
                  {/* ΚΑΙ ΕΔΩ: Προσθήκη onClick για να κλείνει το μενού */}
                  {legalLinks.map(link => <Link key={link.href} href={link.href} onClick={() => setOpenUseful(false)} className={linkClass(link.href)}>{link.label}</Link>)}
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-center my-6 space-y-3">
            <div><p className="font-semibold">{t('contact.email')}</p><a href="mailto:info@geodora.gr" className="underline hover:text-orange-600">info@geodora.gr</a></div>
            <div><p className="font-semibold">{t('contact.phone')}</p><p>+30 6936181744</p></div>
            <div><p className="font-semibold">{t('contact.locationHeader')}</p><p>{t('contact.locationValue')}</p></div>
            <div><p className="font-semibold">{t('contact.hoursHeader')}</p><p>{t('contact.hoursValue')} <span className="font-bold">09:00 – 17:00</span></p></div>
          </div>
          <SocialAndLanguageLinks />
        </div>

        {/* ----- Copyright (Κοινό για όλες τις οθόνες) ----- */}
        <div className="text-sm text-center border-t pt-5 mt-8">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}