// src/components/LanguageSwitcher.tsx - Η Νέα, Ευέλικτη Έκδοση

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

const languages = [
  { locale: 'el', flag: '🇬🇷' },
  { locale: 'en', flag: '🇬🇧' },
  { locale: 'de', flag: '🇩🇪' },
  { locale: 'fr', flag: '🇫🇷' },
];

// ΒΗΜΑ 1: Ορίζουμε τις ιδιότητες (props) που δέχεται το component.
type Props = {
  // Το variant καθορίζει την εμφάνιση. Είναι προαιρετικό και από default είναι 'responsive'.
  variant?: 'responsive' | 'inline';
};

export default function LanguageSwitcher({ variant = 'responsive' }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  // ΒΗΜΑ 2: Ορίζουμε τις κλάσεις CSS για κάθε παραλλαγή.
  const containerClasses = {
    responsive: 'grid grid-cols-2 gap-x-3 gap-y-1 sm:flex sm:items-center sm:gap-3', // Πλέγμα σε mobile, σειρά σε desktop
    inline: 'flex items-center gap-3', // Πάντα σε μία σειρά
  };

  return (
    // ΒΗΜΑ 3: Εφαρμόζουμε τη σωστή κλάση ανάλογα με το variant.
    <div className={containerClasses[variant]}>
      {languages.map(({ locale, flag }) => (
        <button
          key={locale}
          onClick={() => handleLanguageChange(locale)}
          className={`text-xl transition-all duration-200 hover:scale-125 ${
            currentLocale === locale
              ? 'opacity-100 scale-110 text-orange-600'
              : 'opacity-50'
          }`}
          aria-label={`Change language to ${locale}`}
        >
          {flag}
        </button>
      ))}
    </div>
  );
}