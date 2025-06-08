'use client';

import { useState } from 'react';

export default function SuggestProductForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    productType: '',
    origin: '',
    packaging: '',
    comments: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (response.ok) {
        alert('✅ Η πρόταση υποβλήθηκε με επιτυχία!');
        setForm({
          name: '',
          email: '',
          productType: '',
          origin: '',
          packaging: '',
          comments: '',
        });
      } else {
        alert(`❌ Σφάλμα: ${result.error || 'Αποτυχία αποστολής.'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('❌ Σφάλμα κατά την αποστολή της πρότασης.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium mb-1">
          Ονοματεπώνυμο <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block font-medium mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block font-medium mb-1">
          Τύπος προϊόντος <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="productType"
          value={form.productType}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block font-medium mb-1">
          Προέλευση / Περιοχή <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="origin"
          value={form.origin}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Συσκευασία / Διαθεσιμότητα</label>
        <input
          type="text"
          name="packaging"
          value={form.packaging}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Προαιρετικά σχόλια</label>
        <textarea
          name="comments"
          value={form.comments}
          onChange={handleChange}
          rows={4}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="bg-[#b44d00] hover:bg-[#9f3c00] text-white font-semibold px-6 py-2 rounded shadow-md"
      >
        Υποβολή πρότασης
      </button>
    </form>
  );
}
