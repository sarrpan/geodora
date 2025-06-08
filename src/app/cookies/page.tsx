import { siteMeta } from "../../lib/siteMeta";

export const metadata = siteMeta.cookies;

export default function CookiesPage() {
  return (
    <section className="p-6 md:p-10 max-w-5xl mx-auto text-[17px] leading-relaxed space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-[#d35400]">Πολιτική Cookies</h1>

      <p>
        Τα cookies είναι μικρά αρχεία που αποθηκεύονται στον browser σας και βοηθούν στην καλύτερη εμπειρία πλοήγησης.
      </p>

      <p>
        Η ιστοσελίδα της Geodora χρησιμοποιεί μόνο τα απολύτως απαραίτητα cookies, όπως για την επιλογή γλώσσας και την ασφαλή λειτουργία του site. Δεν χρησιμοποιούμε cookies παρακολούθησης, διαφημιστικά ή cookies τρίτων.
      </p>

      <p>
        Αν προστεθούν επιπλέον λειτουργίες που βασίζονται σε cookies (π.χ. analytics, προτιμήσεις), θα ενημερωθείτε σχετικά και θα έχετε τη δυνατότητα να δώσετε ή να αρνηθείτε τη συγκατάθεσή σας.
      </p>

      <p>
        Μπορείτε να αλλάξετε τις ρυθμίσεις των cookies οποιαδήποτε στιγμή μέσω των ρυθμίσεων του browser σας ή από τη σελίδα "Ρυθμίσεις Απορρήτου".
      </p>
    </section>
  );
}
