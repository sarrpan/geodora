import Link from "next/link";

import { siteMeta } from "../../lib/siteMeta";

export const metadata = siteMeta.products;



export default function Page() {
  return (
    <section className="p-6 md:p-10 max-w-5xl mx-auto text-[17px] leading-relaxed space-y-8">
      {/* Τίτλος */}
      <h1 className="text-3xl font-extrabold text-center text-[#b44d00] tracking-wide mt-4">Τα προϊόντα μας</h1>

      {/* Εισαγωγικό κείμενο */}
      <div className="space-y-5 w-full mx-auto">
        <p>
          Η Geodora ξεκινά με προϊόντα που εκφράζουν αυθεντικότητα, ποιότητα και διατροφική αξία.
          Στόχος μας είναι να διαθέτουμε είδη που έχουν ρίζες στην ελληνική παραγωγή, διατηρούν την ταυτότητά τους και φτάνουν στον καταναλωτή με φροντίδα και συνέπεια.
        </p>

        <p>
          Η γκάμα μας διαμορφώνεται σταδιακά, όχι με βάση τη μαζικότητα, αλλά με βάση το περιεχόμενο.
          Ξεκινάμε με προϊόντα όπως το έξτρα παρθένο ελαιόλαδο, οι ελιές, τα βότανα, τα όσπρια (νωπά και μαγειρεμένα),
          καθώς και επιλεγμένα παραδοσιακά τρόφιμα όπως γλυκά του κουταλιού, μαρμελάδες ή έτοιμα γεύματα σε βάζο.
        </p>

        <p>
          Αν διαθέτετε ένα προϊόν που θεωρείτε ότι ταιριάζει στη φιλοσοφία μας, είμαστε εδώ για να το συζητήσουμε.
          Δεν περιμένουμε “δεύτερη φάση” — κάθε σοβαρή πρόταση αξιολογείται με προσοχή και σεβασμό.
        </p>
      </div>

      {/* Κάρτες Προϊόντων */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
        <Link href="/products/placeholder/oil">
          <div className="bg-[rgba(229,229,224,1)] p-4 rounded text-center hover:scale-105 transition-transform duration-300">
            <img src="/images/OliveOil.png" alt="Ελαιόλαδο" className="w-24 h-32 mx-auto mb-2 rounded-xl shadow-md" />
            <p className="font-semibold">Ελαιόλαδο</p>
          </div>
        </Link>
        <Link href="/products/placeholder/olives">
          <div className="bg-[rgba(229,229,224,1)] p-4 rounded text-center hover:scale-105 transition-transform duration-300">
            <img src="/images/Olives.png" alt="Ελιές" className="w-24 h-32 mx-auto mb-2 rounded-xl shadow-md" />
            <p className="font-semibold">Ελιές</p>
          </div>
        </Link>
        <Link href="/products/placeholder/herbs">
          <div className="bg-[rgba(229,229,224,1)] p-4 rounded text-center hover:scale-105 transition-transform duration-300">
            <img src="/images/Oregano.png" alt="Βότανα" className="w-24 h-32 mx-auto mb-2 rounded-md shadow-md" />
            <p className="font-semibold">Βότανα</p>
          </div>
        </Link>
        <Link href="/products/placeholder/beans">
          <div className="bg-[rgba(229,229,224,1)] p-4 rounded text-center hover:scale-105 transition-transform duration-300">
            <img src="/images/Beans.png" alt="Φασόλια" className="w-24 h-32 mx-auto mb-2 rounded-md shadow-md" />
            <p className="font-semibold">Φασόλια</p>
          </div>
        </Link>
        <Link href="/products/placeholder/jam">
          <div className="bg-[rgba(229,229,224,1)] p-4 rounded text-center hover:scale-105 transition-transform duration-300">
            <img src="/images/Jam.png" alt="Μαρμελάδες" className="w-24 h-32 mx-auto mb-2 rounded-md shadow-md" />
            <p className="font-semibold">Μαρμελάδες & Γλυκά</p>
          </div>
        </Link>
        <div className="bg-gray-100 p-4 rounded text-center border border-dashed border-gray-400">
          <p className="text-gray-500 italic">
            Η θέση για το επόμενο αυθεντικό προϊόν
          </p>
        </div>
      </div>

      {/* Πρόσκληση προς καταστήματα */}
      <div className="mt-12 border-t pt-6 w-full mx-auto space-y-4">
        <h2 className="text-xl font-semibold">Αναζητάτε κάτι συγκεκριμένο;</h2>
        <p>
          Αν εκπροσωπείτε κατάστημα και αναζητάτε ένα αυθεντικό, ποιοτικό προϊόν ελληνικής προέλευσης που δεν βλέπετε στη γκάμα μας, μπορείτε να μας το προτείνετε.
          Αν ταιριάζει με τις αξίες και τη φιλοσοφία της Geodora, θα κάνουμε κάθε δυνατή προσπάθεια να το εντάξουμε στις επόμενες επιλογές μας.
        </p>
        <div className="text-center pt-2">
          <Link
            href="/products/suggest-product"
            className="inline-block bg-[#b44d00] hover:bg-[#9f3c00] text-white font-semibold px-6 py-2 rounded shadow-md transition"
          >
            Πρότεινε προϊόν
          </Link>
        </div>
      </div>
    </section>
  );
}
