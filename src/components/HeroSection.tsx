'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <header className="relative w-full min-h-[85vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/HeroImage.png"
        alt="Ελαιώνας ανατολή"
        fill
        priority
        className="object-cover object-top "
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(40,34,22,0.3) 0%, rgba(40,34,22,0.65) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-[12vh] sm:pt-[12vh] sm:px-6 lg:px-8">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white drop-shadow-lg mb-4">
          <span className="block">Η Γη προσφέρει</span>
          <span className="block mt-2">εμείς μεταφέρουμε αξία</span>
        </h1>
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#E1E8D9] opacity-95 drop-shadow-sm mb-8 max-w-2xl">
          Από το χωράφι στο ράφι. Με σεβασμό στον άνθρωπο και στο προϊόν.
        </p>

        <div className="flex flex-col gap-y-3 gap-x-4 sm:flex-row">
          <Link
            href="/contact"
            className="px-5 py-3 text-[20px] whitespace-nowrap bg-[#a54614] hover:bg-[#913e12] text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#a54614] focus:ring-opacity-50"
          >
            Ξεκίνα ως Παραγωγός
          </Link>
          <Link
            href="/contact"
            className="px-5 py-3 text-[20px] whitespace-nowrap bg-white text-[#2E3A25] font-semibold rounded-lg shadow-md hover:bg-[#f3f1ec] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#ccc]"
          >
            Συνεργασία με Καταστήματα
          </Link>
        </div>
      </div>
    </header>
  );
}
