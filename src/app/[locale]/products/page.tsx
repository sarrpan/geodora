'use client';

import Link from "next/link";
import { useTranslations } from 'next-intl';
import Head from 'next/head';

export default function ProductsPage() {
  const t = useTranslations('ProductsPage');

  const productCards = [
    { href: '/products/placeholder/oil', img: 'OliveOil.png', label: t('products.0') },
    { href: '/products/placeholder/olives', img: 'Olives.png', label: t('products.1') },
    { href: '/products/placeholder/herbs', img: 'Oregano.png', label: t('products.2') },
    { href: '/products/placeholder/beans', img: 'Beans.png', label: t('products.3') },
    { href: '/products/placeholder/jam', img: 'Jam&Sweets.png', label: t('products.4') }
  ];

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
      </Head>

      <section className="p-6 md:p-10 max-w-5xl mx-auto text-[17px] leading-relaxed space-y-8">
        <h1 className="text-3xl font-extrabold text-center text-[#b44d00] tracking-wide mt-4">
          {t('title')}
        </h1>

        <div className="space-y-5 w-full mx-auto">
          <p>{t('intro.0')}</p>
          <p>{t('intro.1')}</p>
          <p>{t('intro.2')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
          {productCards.map((product, i) => (
            <Link href={product.href} key={i}>
              <div className="bg-[rgba(229,229,224,1)] p-4 rounded text-center hover:scale-105 transition-transform duration-300">
                <img src={`/images/${product.img}`} alt={product.label} className="w-24 h-32 mx-auto mb-2 rounded-xl shadow-md" />
                <p className="font-semibold">{product.label}</p>
              </div>
            </Link>
          ))}
          <div className="bg-gray-100 p-4 rounded text-center border border-dashed border-gray-400">
            <p className="text-gray-500 italic">{t('nextProduct')}</p>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 w-full mx-auto space-y-4">
          <h2 className="text-xl font-semibold">{t('ctaTitle')}</h2>
          <p>{t('ctaText')}</p>
          <div className="text-center pt-2">
            <Link
              href="/products/suggest-product"
              className="inline-block bg-[#b44d00] hover:bg-[#9f3c00] text-white font-semibold px-6 py-2 rounded shadow-md transition"
            >
              {t('suggestButton')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
