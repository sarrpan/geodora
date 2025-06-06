'use client';

export default function InterestFormSection() {
  return (
    <section className="section-box bg-white">
      <div className="max-w-[600px] mx-auto">
        <h2 className="text-title-xl text-center mb-4">
          Εκδήλωση Ενδιαφέροντος
        </h2>
        <p className="text-subtitle text-center mb-8">
          Αν σας ενδιαφέρει συνεργασία με τη Geodora, συμπληρώστε τα στοιχεία σας.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Όνομα"
            className="form-control"
          />
          <input
            type="email"
            placeholder="Email"
            className="form-control"
          />
          <select defaultValue="" className="form-control">
            <option value="" disabled>
              Παραγωγός / Κατάστημα
            </option>
            <option value="producer">Παραγωγός</option>
            <option value="store">Κατάστημα</option>
          </select>
          <input
            type="text"
            placeholder="Είδος προϊόντος"
            className="form-control"
          />
          <textarea
            placeholder="Σχόλιο ή ποσότητες (προαιρετικό)"
            className="form-control"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="form-button"
          >
            Υποβολή
          </button>
        </form>
      </div>
    </section>
  );
}
