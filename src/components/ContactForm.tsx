'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('ContactPage');

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  
  // ΑΛΛΑΓΗ 1: Προσθέτουμε state για το μήνυμα επιτυχίας από το API
  const [successMessage, setSuccessMessage] = useState('');
  
  // Το submitted δεν το χρειαζόμαστε πλέον, μπορούμε να ελέγχουμε αν υπάρχει μήνυμα
  // const [submitted, setSubmitted] = useState(false);

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
        // ΑΛΛΑΓΗ 2: Αποθηκεύουμε το μήνυμα από το API στο state
        setSuccessMessage(result.message);
        setFormData({ name: '', email: '', phone: '', message: '' }); // Καθαρίζουμε τη φόρμα
      } else {
        alert(`❌ ${t('errorMessage')}: ${result.error || t('errorGeneric')}`);
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert(t('errorMessage'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <div>
        <label htmlFor="name" className="block mb-1 font-medium">
          {t('form.name')} <span className="text-red-500">*</span>
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
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          {t('form.phone')}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 font-medium">
          {t('form.email')} <span className="text-red-500">*</span>
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
          {t('form.message')} <span className="text-red-500">*</span>
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
        {t('form.submit')}
      </button>

      {/* ΑΛΛΑΓΗ 3: Εμφανίζουμε το μήνυμα που ήρθε από το API */}
      {successMessage && (
        <p className="text-green-700 text-sm mt-2">
          {successMessage}
        </p>
      )}
    </form>
  );
}