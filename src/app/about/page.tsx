export default function AboutPage() {
  return (
    <section className="p-6 md:p-10 max-w-5xl mx-auto text-[17px] leading-relaxed space-y-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Σχετικά με τη Geodora</h1>

      {/* Flex row on md+, stack on mobile */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* Text block */}
        <div className="md:w-1/2 space-y-4">
          <p>
            Η Geodora είναι μια μικρή αλλά δυναμική πρωτοβουλία που δημιουργήθηκε με στόχο να συνδέσει
            αυθεντικά ελληνικά προϊόντα υψηλής ποιότητας με επιλεγμένα σημεία πώλησης στην Ευρώπη.
            Ξεκινήσαμε με σεβασμό στη γη, τους ανθρώπους που την καλλιεργούν και την αξία του ποιοτικού προϊόντος.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/images/Handshake.png"
            alt="Συνεργασία με παραγωγό"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Remaining text paragraphs */}
      <div className="space-y-4">
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
    </section>
  );
}
