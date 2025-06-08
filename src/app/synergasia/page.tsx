import Link from "next/link";

import { siteMeta } from "../../lib/siteMeta";

export const metadata = siteMeta.cooperation;

const bgVariants = [
  "bg-[#fdfef8]",
  "bg-[#e9fcd9]",
  "bg-[#fff2d6]",
  "bg-[#edf3ff]",
  "bg-[#fbe4e4]",
  "bg-[#e1f2ec]"
];

export default function SynergasiaPage() {
  return (
    <section className="p-6 md:p-10 max-w-5xl mx-auto text-[17px] leading-relaxed space-y-10">
      {/* ΓΕΝΙΚΗ ΕΙΣΑΓΩΓΗ */}
      <div className="text-left space-y-4 max-w-3xl mx-auto mb-8">
        <p className="text-[17px] leading-relaxed">
          <strong>Η Geodora αναζητά συνεργάτες με κοινές αξίες.</strong><br />
          Είτε είστε παραγωγός που θέλει να δει το προϊόν του να ταξιδεύει με αξιοπρέπεια, είτε κατάστημα που αναζητά επιλεγμένα ελληνικά προϊόντα με ταυτότητα, 
          είμαστε εδώ για να χτίσουμε κάτι ουσιαστικό — χωρίς μεσάζοντες, χωρίς πίεση, με αμοιβαία εμπιστοσύνη.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <a href="#producers">
            <button className="bg-[#0D4715] text-white px-5 py-2 rounded hover:bg-opacity-90 transition w-full sm:w-auto">
              Είμαι παραγωγός
            </button>
          </a>
          <a href="#stores">
            <button className="bg-[#2B6CB0] text-white px-5 py-2 rounded hover:bg-opacity-90 transition w-full sm:w-auto">
              Έχω κατάστημα
            </button>
          </a>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center">Συνεργασία</h1>

      {/* ΕΝΟΤΗΤΑ: ΠΑΡΑΓΩΓΟΙ */}
      <div>
        <h2 id="producers" className="text-xl font-semibold mt-8 mb-4 scroll-mt-[150px]">Για παραγωγούς</h2>
        <p className="mb-6">
          <strong>Ξεκινάμε σταδιακά, με προτεραιότητα τη συνέπεια.</strong>
          <br />
          Η Geodora δεν ακολουθεί το μοντέλο της μαζικής αποθήκευσης. Προσεγγίζουμε κάθε συνεργασία με ρεαλισμό,
          χτίζοντας πρώτα μικρές, δοκιμασμένες ροές διάθεσης, ώστε να διασφαλίζουμε συνέπεια.
        </p>

        <div className="space-y-6">
          <div className={`flex items-start gap-4 ${bgVariants[0]} card-text-box`}>
            <div>
              <h3 className="text-subtitle mb-1 leading-snug">Συνεργασία με ταυτότητα — όχι μεταπώληση</h3>
              <p className="text-body">Η Geodora δεν λειτουργεί ως απλός ενδιάμεσος ή μεταπωλητής. Όλα τα προϊόντα κυκλοφορούν με τη δική μας φίρμα και φέρουν την εγγύηση ποιότητας που πρεσβεύουμε. Αυτό μας επιτρέπει να χτίζουμε ενιαία εικόνα στην αγορά και να προσελκύουμε πελάτες που αναζητούν συνέπεια και αξιοπιστία. Η συνεργασία βασίζεται σε κοινό όραμα, όχι σε ευκαιριακές πωλήσεις.</p>
            </div>
          </div>

          <div className={`flex items-start gap-4 ${bgVariants[1]} card-text-box`}>
            <div>
              <h3 className="text-subtitle mb-1 leading-snug">Διαφάνεια σε κάθε στάδιο</h3>
              <p className="text-body">Η συνεργασία με τη Geodora βασίζεται σε ξεκάθαρες αρμοδιότητες. Ο παραγωγός επικεντρώνεται στην ποιότητα και την παραγωγή, ενώ η Geodora αναλαμβάνει τη διάθεση, την παρουσίαση και τις εμπορικές διαδικασίες. Όλα συμφωνούνται εκ των προτέρων και εφαρμόζονται με επαγγελματισμό και διαφάνεια, χωρίς ασάφειες ή παρερμηνείες.</p>
            </div>
          </div>

          <div className={`flex items-start gap-4 ${bgVariants[2]} card-text-box`}>
            <div>
              <h3 className="text-subtitle mb-1 leading-snug">Χαμηλό ρίσκο — δοκιμασμένη συνεργασία</h3>
              <p className="text-body">Δεν ζητάμε δεσμεύσεις από την αρχή. Η συνεργασία ξεκινά δοκιμαστικά, με μικρές ποσότητες, για να χτίσουμε εμπιστοσύνη βήμα-βήμα. Η Geodora αγοράζει, διαθέτει και αξιολογεί. Αν το προϊόν ανταποκρίνεται στην αγορά, η συνεργασία προχωρά σε πιο σταθερή βάση. Ο παραγωγός δεν έχει τίποτα να χάσει — μόνο να κερδίσει.</p>
            </div>
          </div>

          <div className={`flex items-start gap-4 ${bgVariants[3]} card-text-box`}>
            <div>
              <h3 className="text-subtitle mb-1 leading-snug">Η εμπορική ευθύνη περνάει στη Geodora</h3>
              <p className="text-body">Ο παραγωγός δεν επιβαρύνεται με προώθηση, επαφές, συσκευασίες ή μεταφορές. Από τη στιγμή που αγοράζουμε το προϊόν, η Geodora αναλαμβάνει πλήρως την εμπορική του διαχείριση, με στόχο τη σωστή του παρουσίαση και τοποθέτηση στην αγορά. Ο παραγωγός μπορεί να επικεντρωθεί αποκλειστικά στην παραγωγή — με σιγουριά και χωρίς επιπλέον άγχη.</p>
            </div>
          </div>

          <div className={`flex items-start gap-4 ${bgVariants[4]} card-text-box`}>
            <div>
              <h3 className="text-subtitle mb-1 leading-snug">Σεβασμός στον παραγωγό — με επαγγελματικά κριτήρια</h3>
              <p className="text-body">Κατανοούμε τις ιδιαιτερότητες κάθε παραγωγής και αντιμετωπίζουμε κάθε συνεργασία με ευελιξία και σεβασμό. Αυτό όμως δεν σημαίνει απουσία συνέπειας. Η Geodora αναζητά συνεργάτες που μπορούν να υποστηρίξουν σταθερά τη ζήτηση του προϊόντος, ακόμα κι αν πρόκειται για εποχική ή περιορισμένη παραγωγή. Είμαστε δίπλα στον παραγωγό, αλλά λειτουργούμε με επαγγελματικά κριτήρια.</p>
            </div>
          </div>

          <div className={`flex items-start gap-4 ${bgVariants[5]} card-text-box`}>
            <div>
              <h3 className="text-subtitle mb-1 leading-snug">Καμία συνδρομή — μόνο εμπιστοσύνη</h3>
              <p className="text-body">Η Geodora δεν ζητά προκαταβολές, κόστη συμμετοχής ή εμπορικές δεσμεύσεις. Η συνεργασία βασίζεται αποκλειστικά στην ποιότητα του προϊόντος και στη διάθεση για σοβαρή συνεργασία. Αναλαμβάνουμε το ρίσκο, γιατί πιστεύουμε σε αυτό που δημιουργείτε.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ΕΝΟΤΗΤΑ: ΚΑΤΑΣΤΗΜΑΤΑ */}
      <div>
        <h2 id="stores" className="text-xl font-semibold mt-12 mb-4 scroll-mt-[150px]">Για καταστήματα</h2>

        <div className="space-y-6">
          <div className="bg-[#fdfef8] p-4 rounded-lg shadow-sm">
            <h3 className="text-base font-semibold">Προϊόντα με ταυτότητα, όχι απρόσωπα barcodes</h3>
            <p className="text-sm mt-1">
              Η Geodora δεν είναι άλλη μια πλατφόρμα μαζικής διανομής. Τα προϊόντα μας έχουν όνομα, ιστορία και συνέπεια.
              Προσφέρουμε επιλεγμένα ελληνικά προϊόντα με ξεκάθαρη ταυτότητα, που απευθύνονται σε καταστήματα με σεβασμό προς τον πελάτη τους.
            </p>
          </div>

          <div className="bg-[#e9fcd9] p-4 rounded-lg shadow-sm">
            <h3 className="text-base font-semibold">Συνεργασία χωρίς υποχρεώσεις και πίεση</h3>
            <p className="text-sm mt-1">
              Δεν απαιτούμε συμβόλαια, ελάχιστες ποσότητες ή αποκλειστικότητες.
              Η συνεργασία βασίζεται στην εμπιστοσύνη, τη συνέπεια και την επαναληψιμότητα.
              Μπορείτε να δοκιμάσετε λίγα προϊόντα, να δείτε την ανταπόκριση και να χτίσουμε τη συνεργασία βήμα-βήμα.
            </p>
          </div>

          <div className="bg-[#edf3ff] p-4 rounded-lg shadow-sm">
            <h3 className="text-base font-semibold">Προσωπική επικοινωνία — άμεση ανταπόκριση</h3>
            <p className="text-sm mt-1">
              Δεν θα βρείτε τηλεφωνικό κέντρο ή αυτόματες απαντήσεις.
              Η Geodora διατηρεί προσωπική επαφή με κάθε συνεργάτη, ακούει τις ανάγκες του και ανταποκρίνεται άμεσα σε κάθε ερώτημα ή αλλαγή.
            </p>
          </div>
        </div>
      </div>

      {/* ΕΝΟΤΗΤΑ: ΚΟΥΜΠΙ ΕΠΙΚΟΙΝΩΝΙΑΣ */}
      <div className="pt-10 text-center">
        <p className="mb-4">
          Αν πιστεύετε ότι ταιριάζουμε, μη διστάσετε να επικοινωνήσετε μαζί μας.
        </p>
        <Link href="/contact">
          <button className="bg-[#0D4715] text-white px-6 py-2 rounded hover:bg-opacity-90 transition">
            Επικοινωνήστε μαζί μας
          </button>
        </Link>
      </div>
    </section>
  );
}
