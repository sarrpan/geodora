import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const placeholderImages = [
  { image: '/images/geo_olive-oil.png' },
  { image: '/images/geo_olives.png' },
  { image: '/images/geo_herbs.png' },
  { image: '/images/geo_beans.png' },
  { image: '/images/geo_jam.png' },
];

export default function PlaceholderPage({ params }: { params: { slug: string } }) {
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
      <h1 className="text-3xl font-bold text-orange-800 mb-6">Εικονικό προϊόν</h1>
      <div className="flex justify-center mb-6">
        <Image
          src={image}
          alt="Εικονικό προϊόν"
          width={300}
          height={300}
          className="rounded-xl shadow-md"
        />
      </div>
      <p className="text-lg text-gray-700 max-w-prose mx-auto mb-8">
        Το προϊόν αυτό δεν είναι ακόμη διαθέσιμο. Μόλις ολοκληρωθεί η αναζήτηση παραγωγών ή η διαδικασία τυποποίησης, η σελίδα αυτή θα ενημερωθεί με πλήρεις πληροφορίες.
        Ευχαριστούμε για την κατανόηση και το ενδιαφέρον σας.
      </p>
      <Link
        href="/products"
        className="inline-block px-6 py-2 rounded bg-orange-600 text-white font-semibold hover:bg-orange-700 transition"
      >
        Επιστροφή στα προϊόντα
      </Link>
    </main>
  );
}
