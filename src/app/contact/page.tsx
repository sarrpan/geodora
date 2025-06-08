import { siteMeta } from "../../lib/siteMeta";

export const metadata = siteMeta.contact;

import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <section className="p-6 md:p-10 max-w-5xl mx-auto text-[17px] leading-relaxed space-y-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Επικοινωνία</h1>

      <p className="text-center">
        Είμαστε πάντα διαθέσιμοι να ακούσουμε τις ερωτήσεις, τις ιδέες ή τα ενδιαφέροντά σας για συνεργασία.
        Μη διστάσετε να επικοινωνήσετε μαζί μας!
      </p>

      <div className="space-y-2">
        <p><strong>Email:</strong> <a href="mailto:info@geodora.gr" className="underline">info@geodora.gr</a></p>
      </div>

      <ContactForm />
    </section>
  );
}
