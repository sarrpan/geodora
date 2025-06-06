export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">

        {/* HERO */}
        <section className="pt-0 pb-8 max-w-5xl mx-auto px-4">
          <div className="relative h-[calc(100vh-120px)] tall:max-h-[500px] overflow-hidden shadow-md">
            <img
              src="/HeroIcon.png"
              alt="Ελαιόδεντρα με θέα τη θάλασσα στην Ελλάδα"
              className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 flex flex-col justify-start items-center pt-12 text-center px-4 max-w-md mx-auto">
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight drop-shadow-md text-balance">
                <span className="text-[#b44d00]">Δώρα</span>
                <span className="text-[rgba(27,71,48,1)]"> της</span><br />
                <span className="text-[rgba(27,71,48,1)]">Ελληνικής γης</span>
              </h1>
              <button className="mt-8 bg-[#b44d00] hover:bg-[#9f3c00] text-white font-semibold px-6 py-2 rounded shadow-md transition">
                Δείτε τα προϊόντα μας
              </button>
            </div>
          </div>
        </section>

        {/* Σχετικά με εμάς */}
        <section className="py-6 px-4 grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-center">Σχετικά με εμάς</h2>
            <p className="text-sm sm:text-base md:text-[17px] lg:text-[18px] leading-relaxed">
              Η Geodora είναι μια νέα προσπάθεια με στόχο να προσφέρει αυθεντικά ελληνικά προϊόντα υψηλής ποιότητας στην αγορά.
            </p>
            <p className="text-sm sm:text-base md:text-[17px] lg:text-[18px] leading-relaxed">
              Ξεκινήσαμε με εκτίμηση για τους ανθρώπους που αγαπούν και καλλιεργούν τη γη τους με μεράκι και υπευθυνότητα,
              πιστεύοντας ότι η ποιότητα γεννιέται από τη συνέπεια, την επιλογή και τον σεβασμό στην παράδοση.
            </p>
            <p className="text-sm sm:text-base md:text-[17px] lg:text-[18px] leading-relaxed">
              Φροντίζουμε να φτάνουν στα ράφια των συνεργαζόμενων καταστημάτων προϊόντα που ξεχωρίζουν για τη γεύση,
              την καθαρότητα και την ταυτότητά τους.
            </p>
            <p className="text-sm sm:text-base md:text-[17px] lg:text-[18px] leading-relaxed">
              Η ποιότητα είναι για εμάς αδιαπραγμάτευτη και κάθε συνεργασία βασίζεται στην εμπιστοσύνη και τη συνέπεια.
            </p>
            <p className="text-sm sm:text-base md:text-[17px] lg:text-[18px] leading-relaxed">
              Στόχος μας είναι να γινόμαστε κάθε μέρα καλύτεροι — με σταθερά βήματα, μεράκι και διαφάνεια.
            </p>
          </div>
        </section>

        {/* Τα προϊόντα μας */}
        <section className="py-6 px-4 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Τα προϊόντα μας</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-[rgba(229,229,224,1)] p-4 rounded-lg hover:shadow-md transition">
              <img src="/OliveOil.png" alt="OliveOil" className="w-24 h-36 mx-auto mb-2" />
              <p>Ελαιόλαδο</p>
            </div>
            <div className="text-center bg-[rgba(229,229,224,1)] p-4 rounded-lg hover:shadow-md transition">
              <img src="/Olives.png" alt="Olives" className="w-24 h-36 mx-auto mb-2" />
              <p>Ελιές</p>
            </div>
            <div className="text-center bg-[rgba(229,229,224,1)] p-4 rounded-lg hover:shadow-md transition">
              <img src="/Oregano.png" alt="Oregano" className="w-24 h-36 mx-auto mb-2" />
              <p>Βότανα</p>
            </div>
          </div>
        </section>

        {/* Πού θα μας βρείτε */}
        <section className="py-10 px-4 bg-white max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Πού θα μας βρείτε</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
            <div className="md:w-1/2 text-sm sm:text-base md:text-[17px] lg:text-[18px] leading-relaxed space-y-4">
              <p>Η Geodora έχει έδρα στην Πτολεμαΐδα και λειτουργεί ως ψηφιακή πλατφόρμα.</p>
              <p>Δεν διαθέτουμε φυσικά καταστήματα και δεν επενδύουμε σε μόνιμες εγκαταστάσεις — εκτός αν αυτό εξυπηρετεί συγκεκριμένες λειτουργικές ανάγκες, όπως η προσωρινή συλλογή προϊόντων ή η υποστήριξη συνεργασιών.</p>
              <p>Η επιλογή αυτού του μοντέλου δεν έγινε τυχαία: μας επιτρέπει να κινούμαστε με ευελιξία, να περιορίζουμε περιττά κόστη και να εστιάζουμε σε αυτό που έχει πραγματική αξία — τη συνέπεια, τη διαφάνεια και τις ουσιαστικές συνεργασίες.</p>
            </div>
            <div className="md:w-1/2 w-full rounded overflow-hidden shadow-md mb-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.945284798204!2d21.6780394!3d40.511605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1359d03023b7606b%3A0x83a0cb7c6a36411e!2sAgiou%20Tryphonos%205%2C%20Ptolemaida%2050200!5e0!3m2!1sen!2sgr!4v1716054027335!5m2!1sen!2sgr"
                width="100%"
                height="300"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="text-sm text-right mt-2 pr-2">
                <a
                  href="https://www.google.com/maps?q=Αγίου+Τρύφωνος+5,+Πτολεμαΐδα"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b44d00] underline hover:text-[#9f3c00]"
                >
                  Δείτε στον χάρτη →
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
