export const metadata = {
  title: "Πρότεινε προϊόν | Geodora",
  description:
    "Έχεις ένα αυθεντικό ελληνικό προϊόν; Πρότεινέ το στη Geodora και γίνε μέρος του δικτύου μας για ποιοτική διανομή στην Ευρώπη.",
};

import SuggestProductForm from '../../../components/SuggestProductForm';

export default function SuggestProductPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-10 text-[17px]">
      <h1 className="text-2xl font-bold mb-6 text-center">Πρότεινε ένα προϊόν</h1>
      <SuggestProductForm />
    </section>
  );
}
