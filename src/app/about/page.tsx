import { siteMeta } from "../../lib/siteMeta";

export const metadata = siteMeta.about;

export default function AboutPage() {
  return (
    <section className="p-6 md:p-10 max-w-5xl mx-auto text-[17px] leading-relaxed space-y-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Σχετικά με τη Geodora</h1>

      {/* Flex row on md+, stack on mobile */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-center">
        {/* Text block */}
        <div className="md:w-1/2 space-y-4">
          <p>
            Η Geodora είναι μια μικρή αλλά δυναμική πρωτοβουλία που δημιουργήθηκε με στόχο να συνδέσει
            αυθεντικά ελληνικά προϊόντα υψηλής ποιότητας με επιλεγμένα σημεία πώλησης.
            Ξεκινήσαμε με σεβασμό στη γη, τους ανθρώπους που την καλλιεργούν και την αξία του ποιοτικού προϊόντος.
          </p>
          <p>
            Φιλοδοξούμε να δημιουργήσουμε ένα δίκτυο συνεργασιών βασισμένο στην εμπιστοσύνη και τη συνέπεια,
            όπου κάθε προϊόν έχει πρόσωπο και ιστορία. Επιλέγουμε προϊόντα με αυθεντική ταυτότητα,
            από παραγωγούς που μοιράζονται τις ίδιες αξίες: ποιότητα, διαφάνεια, ανθρώπινη σχέση.
          </p>
          <p>
            Πιστεύουμε σε μια απλή αλλά ουσιαστική προσέγγιση: λιγότερα λόγια, περισσότερη πράξη.
            Η Geodora χτίζεται βήμα-βήμα, με ελεγχόμενο ρίσκο, προσεκτικές επιλογές και αληθινή φροντίδα.
            Σκοπός μας δεν είναι η μαζικότητα, αλλά η σταθερότητα και η ειλικρινής συνεργασία.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/images/ProductBasket.png"
            alt="Συνεργασία με παραγωγό"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <p className="text-lg text-center text-gray-600 mt-2">
            Επιλεγμένα ελληνικά προϊόντα από τη γη στο ράφι — με σεβασμό στον άνθρωπο και το περιβάλλον.
          </p>
        </div>
      </div>
    </section>
  );
}
