'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const desktopLinkClass = (href: string) =>
  `text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] transition-colors hover:text-primary ${

      pathname === href ? 'font-bold text-primary' : 'text-gray-800'
    }`;
  const mobileItems = [
    { href: '/', icon: '/icons/home.svg', label: 'Αρχική' },
    { href: '/products', icon: '/icons/products.svg', label: 'Προϊόντα' },
    { href: '/synergasia', icon: '/icons/partnership.svg', label: 'Συνεργασία' },
    { href: '/contact', icon: '/icons/contact.svg', label: 'Επικοινωνία' },
    { href: '/about', icon: '/icons/about.svg', label: 'Σχετικά' },
  ];
  return (
    <nav
      className={`sticky top-0 z-50 bg-[#f9f9f3] transition-all duration-300 ${
        scrolled ? 'py-2 sm:py-3 shadow-md' : 'py-4 sm:py-6'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-6 md:px-8 lg:px-20 xl:px-32 2xl:px-32 [@media(min-width:1920px)]:px-[96px]">
        <div className="flex items-center justify-start gap-4 sm:gap-6 md:gap-10 lg:gap-12 xl:gap-16 [@media(min-width:1920px)]:gap-[80px]">
          {/* Logo + Branding */}
          <Link href="/" className="flex items-center gap-2 ml-[13%] sm:ml-[4%] lg:ml-[2%] 2xl:ml-[1.5%] [@media(min-width:1920px)]:ml-[1%]">
            <Image
              src="/images/geodora-logo.svg"
              alt="Logo"
              width={scrolled ? 30 : 40}
              height={scrolled ? 30 : 40}
              className="transition-all duration-300 -mt-3"
            />

            {/* Mobile version (inline) */}
            <div
              className={`flex items-center gap-2 transition-all duration-300 ${
                scrolled ? 'mt-2' : 'mt-3'
              } sm:hidden`}
            >
              <span className="text-[22px] font-bold text-[rgba(75,46,30,1)]">
                eodora –
              </span>
              <span className="text-[14px] font-semibold italic text-orange-600">
                Δώρα της γης
              </span>
            </div>

            {/* Desktop version (stacked) */}
            <div
              className={`hidden sm:flex flex-col transition-all duration-300 ${
                scrolled ? 'mt-1' : 'mt-2'
              } -translate-y-[8px]`}
            >
              <span className="text-[14px] font-semibold italic text-orange-600 leading-tight sm:-ml-[2px] whitespace-nowrap">
                Δώρα της γης
              </span>
              <span className="text-[22px] font-bold text-[rgba(75,46,30,1)] leading-none">
                eodora
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden sm:flex ml-auto space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 2xl:space-x-12 [@media(min-width:1920px)]:space-x-[64px]">

            {mobileItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                    href={href}
                    className={`text-[17px] font-medium transition-colors hover:text-primary ${
                      pathname === href ? 'text-orange-600 font-bold' : 'text-gray-800'
                    }`}
                  >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Icons Menu */}
      <div className="sm:hidden mt-2 overflow-x-auto whitespace-nowrap">
        <div className="flex justify-evenly items-center px-4">
          {mobileItems.map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center text-[10px] transition-colors hover:text-primary whitespace-nowrap ${
                pathname === href ? 'text-orange-600 font-semibold' : 'text-gray-800'
              }`}
            >
              <Image src={icon} alt={label} width={32} height={32} />
              <span className="mt-1 text-[10px]">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
