"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [openUseful, setOpenUseful] = useState(false);

  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
    setOpenUseful(false);
  };
  const handleUsefulToggle = () => {
    setOpenUseful(!openUseful);
    setOpenMenu(false);
  };

  const linkClass = (href: string) =>
    `block px-3 py-2 hover:text-orange-600 ${
      pathname === href ? "text-orange-600 font-semibold" : "font-normal"
    }`;

  return (
    <footer className="border-t border-gray-200 pt-6 pb-10 text-gray-700 shadow-inner mt-12">
      <div className="max-w-[1024px] w-full mx-auto px-4 md:px-8">
        {/* Desktop layout for >1024px */}
        <div className="hidden lg:flex footer-desktop flex-col items-center text-sm mb-8 gap-y-6">
          <div className="flex items-center gap-1 justify-center">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} className="self-center -mt-1" />
            <div className="flex items-center gap-2 mt-4">
              <span className="text-title-xl text-[rgba(75,46,30,1)]">eodora –</span>
              <span className="text-subtitle italic">
                Ειλικρινές και ποιοτικό δίκτυο διανομής αυθεντικών ελληνικών προϊόντων.
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex gap-4">
              <Link href="/" className={linkClass("/")}>Αρχική</Link>
              <Link href="/products" className={linkClass("/products")}>Προϊόντα</Link>
              <Link href="/synergasia" className={linkClass("/synergasia")}>Συνεργασία</Link>
              <Link href="/contact" className={linkClass("/contact")}>Επικοινωνία</Link>
              <Link href="/about" className={linkClass("/about")}>Σχετικά</Link>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex gap-4">
              <Link href="/terms" className={linkClass("/terms")}>Όροι χρήσης</Link>
              <Link href="/privacy" className={linkClass("/privacy")}>Πολιτική απορρήτου</Link>
              <Link href="/cookies" className={linkClass("/cookies")}>Cookies</Link>
              <Link href="/privacy-settings" className={linkClass("/privacy-settings")}>Ρυθμίσεις απορρήτου</Link>
            </div>
          </div>

          <div className="footer-contact flex gap-8">
            <div className="footer-contact-row-1 flex gap-8">
              <p>Email: <a href="mailto:info@geodora.gr" className="underline hover:text-orange-600">info@geodora.gr</a></p>
              <p>Τηλέφωνο: +30 6936181744</p>
            </div>
            <div className="footer-contact-row-2 flex gap-8">
              <p>Έδρα: Πτολεμαΐδα, </p>
              <p>Ώρες λειτουργίας: Δευ – Παρ: <span className="font-bold">09:00 – 17:00</span></p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/facebook.svg" alt="Facebook" width={38} height={38} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/twitter.svg" alt="Twitter" width={38} height={38} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/youtube.svg" alt="YouTube" width={38} height={38} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout <1024px */}
        <div className="lg:hidden ">
          {/* Logo and tagline */}
          <div className="flex items-center gap-4 mb-6">
            <Image src="/logo.svg" alt="Logo" width={60} height={60} />
            <div>
              <h3 className="text-subtitle text-[#4b2e1e]">Geodora</h3>
              <p className="text-body italic leading-snug">
                Ειλικρινές και ποιοτικό δίκτυο διανομής<br />
                αυθεντικών ελληνικών προϊόντων.
              </p>
            </div>
          </div>

          {/* Accordion Sections */}
          <div className="mb-6 space-y-3 text-body">
            <div className="border rounded-md overflow-hidden">
              <button onClick={handleMenuToggle} aria-expanded={openMenu} className="w-full flex justify-between items-center px-4 py-2 font-medium">
                Μενού
                <svg className={`w-4 h-4 transform transition-transform duration-200 ${openMenu ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div aria-hidden={!openMenu} className={`transition-[max-height] duration-200 ease-in-out overflow-hidden ${openMenu ? "max-h-60" : "max-h-0"}`}>
                <div className="px-4 pb-2 flex flex-col gap-1">
                  <Link href="/" onClick={() => setOpenMenu(false)} className={linkClass("/")}>Αρχική</Link>
                  <Link href="/products" onClick={() => setOpenMenu(false)} className={linkClass("/products")}>Προϊόντα</Link>
                  <Link href="/synergasia" onClick={() => setOpenMenu(false)} className={linkClass("/synergasia")}>Συνεργασία</Link>
                  <Link href="/contact" onClick={() => setOpenMenu(false)} className={linkClass("/contact")}>Επικοινωνία</Link>
                  <Link href="/about" onClick={() => setOpenMenu(false)} className={linkClass("/about")}>Σχετικά</Link>
                </div>
              </div>
            </div>

            <div className="border rounded-md overflow-hidden">
              <button onClick={handleUsefulToggle} aria-expanded={openUseful} className="w-full flex justify-between items-center px-4 py-2 font-medium">
                Χρήσιμα
                <svg className={`w-4 h-4 transform transition-transform duration-200 ${openUseful ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div aria-hidden={!openUseful} className={`transition-[max-height] duration-200 ease-in-out overflow-hidden ${openUseful ? "max-h-60" : "max-h-0"}`}>
                <div className="px-4 pb-2 flex flex-col gap-1">
                  <Link href="/terms" onClick={() => setOpenUseful(false)} className={linkClass("/terms")}>Όροι χρήσης</Link>
                  <Link href="/privacy" onClick={() => setOpenUseful(false)} className={linkClass("/privacy")}>Πολιτική απορρήτου</Link>
                  <Link href="/cookies" onClick={() => setOpenUseful(false)} className={linkClass("/cookies")}>Cookies</Link>
                  <Link href="/privacy-settings" onClick={() => setOpenUseful(false)} className={linkClass("/privacy-settings")}>Ρυθμίσεις απορρήτου</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Επικοινωνία */}
          <div className="text-body text-center mb-6 px-4 grid grid-cols-1 gap-y-3">
            <div>
              <p className="font-semibold">Email</p>
              <a href="mailto:info@geodora.gr" className="underline hover:text-orange-600">info@geodora.gr</a>
            </div>
            <div>
              <p className="font-semibold">Τηλέφωνο</p>
              <p>+30 210 0000000</p>
            </div>
            <div>
              <p className="font-semibold">Έδρα</p>
              <p>Πτολεμαΐδα, Ελλάδα</p>
            </div>
            <div>
              <p className="font-semibold">Ώρες λειτουργίας</p>
              <p>Δευ – Παρ: <span className="font-bold">09:00 – 17:00</span></p>
            </div>
          </div>

          {/* Social icons */}
          <hr className="my-4" />
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/twitter.svg" alt="Twitter" width={24} height={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/youtube.svg" alt="YouTube" width={24} height={24} />
              </a>
            </div>
        </div>

        {/* Copyright */}
        <div className="text-body text-center border-t pt-4">
          © 2025 Geodora. Όλα τα δικαιώματα διατηρούνται.
        </div>
      </div>
    </footer>
  );
}
