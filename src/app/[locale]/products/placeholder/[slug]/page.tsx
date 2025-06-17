import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from 'next-intl/server';
import { placeholderMetaMap } from '@/utils/placeholderMetaMap';

// Η προσθήκη που λύνει το πρόβλημα
export async function generateStaticParams() {
  const paths = Object.keys(placeholderMetaMap).flatMap((slug) =>
    Object.keys(placeholderMetaMap[slug]).map((locale) => ({
      slug,
      locale,
    }))
  );

  return paths;
}

type Props = {
  params: { slug: string; locale: string };
};

export async function generateMetadata({ params }: Props) {
  const { slug, locale } = params;
  const meta = placeholderMetaMap[slug]?.[locale];
  if (!meta) return { title: "Geodora", description: "" };
  return meta;
}

const placeholderImages = [
  { image: "/images/OliveOilLogo.svg" },
  { image: "/images/OlivesLogo.svg" },
  { image: "/images/OreganoLogo.svg" },
  { image: "/images/BeansLogo.svg" },
  { image: "/images/HoneyLogo.svg" },
];

export default async function PlaceholderPage({ params }: Props) {
  const t = await getTranslations('PlaceholderPage');

  const indexMap: { [key: string]: number } = {
    oil: 0,
    olives: 1,
    herbs: 2,
    beans: 3,
    jam: 4,
  };

  const index = indexMap[params.slug];
  if (index === undefined) return notFound();

  const image = placeholderImages[index].image;

  return (
    <main className="max-w-screen-lg mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold text-orange-800 mb-6">{t('title')}</h1>
      <div className="flex justify-center mb-6">
        <Image
          src={image}
          alt={t('imageAlt')}
          width={200}
          height={200}
          className="rounded-xl shadow-md"
        />
      </div>
      <p className="text-lg text-gray-700 max-w-prose mx-auto mb-8">
        {t('description')}
      </p>
      <Link
        href="/products"
        className="inline-block px-6 py-2 rounded bg-orange-600 text-white font-semibold hover:bg-orange-700 transition"
      >
        {t('back')}
      </Link>
    </main>
  );
}