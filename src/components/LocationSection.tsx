'use client';

export default function LocationSection() {
  return (
    <section className="section-box bg-white text-[#2E3A25]">
      <div className="w-[90%] max-w-screen-xl mx-auto">
        <h2 className="text-title-xl text-center mb-[clamp(3rem,6vh,6rem)]">
          Πού θα μας βρείτε
        </h2>
        <div className="text-body space-y-6">
          <p>
            Η Geodora έχει έδρα στην Πτολεμαΐδα και λειτουργεί ως ψηφιακή πλατφόρμα.
          </p>
          <p >
            Δεν διαθέτουμε φυσικά καταστήματα και δεν επενδύουμε σε μόνιμες εγκαταστάσεις —
            εκτός αν αυτό εξυπηρετεί συγκεκριμένες λειτουργικές ανάγκες, όπως η προσωρινή
            συλλογή προϊόντων ή η υποστήριξη συνεργασιών.
          </p>
          <p >
            Η επιλογή αυτού του μοντέλου δεν έγινε τυχαία: μας επιτρέπει να κινούμαστε με
            ευελιξία, να περιορίζουμε περιττά κόστη και να εστιάζουμε σε αυτό που έχει
            πραγματική αξία — τη συνέπεια, τη διαφάνεια και τις ουσιαστικές συνεργασίες.
          </p>
        </div>
        <div className="w-full h-[300px] rounded-lg overflow-hidden mt-[clamp(3rem,6vh,6rem)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.634152897022!2d21.6756!3d40.5143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a7f3652c56e2fd%3A0x1d4b5989c4e3e3d6!2zzpHOu867zqzOtc6xz4TOtc65z4IgzpHOrc6zzrXOuQ!5e0!3m2!1sel!2sgr!4v1681123456789"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
