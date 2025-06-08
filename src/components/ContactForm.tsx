'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(`❌ Σφάλμα: ${result.error || 'Αποτυχία αποστολής.'}`);
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('❌ Σφάλμα κατά την αποστολή του μηνύματος.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <div>
        <label htmlFor="name" className="block mb-1 font-medium">
          Όνομα <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 font-medium">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-1 font-medium">
          Μήνυμα <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <button type="submit" className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-opacity-90">
        Αποστολή
      </button>

      {submitted && (
        <p className="text-green-700 text-sm mt-2">
          ✅ Το μήνυμά σας εστάλη με επιτυχία.
        </p>
      )}
    </form>
  );
}
