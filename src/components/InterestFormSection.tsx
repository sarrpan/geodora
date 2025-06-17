'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function InterestFormSection() {
  const t = useTranslations('InterestFormSection');

  // ΑΛΛΑΓΗ 1: Προσθήκη του 'phone' στο state της φόρμας
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Προστέθηκε το τηλέφωνο
    role: '',
    productType: '',
    comment: '',
  });

  // ΑΛΛΑΓΗ 2: Βελτιωμένο state για τα μηνύματα επιτυχίας/σφάλματος
  const [formStatus, setFormStatus] = useState({ status: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ status: 'sending', message: '' }); // Ενημέρωση κατάστασης
    try {
      const response = await fetch('/api/interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // ΑΛΛΑΓΗ 3: Χρήση του μηνύματος από το API
        setFormStatus({ status: 'success', message: result.message });
        setFormData({ name: '', email: '', phone: '', role: '', productType: '', comment: '' });
      } else {
        setFormStatus({ status: 'error', message: result.error || t('form.errorGeneric') });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({ status: 'error', message: t('form.errorGeneric') });
    }
  };

  return (
    <section className="section-box bg-white">
      <div className="max-w-[600px] mx-auto">
        <h2 className="text-title-xl text-center mb-4">{t('title')}</h2>
        <p className="text-subtitle text-center mb-8">{t('subtitle')}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t('form.namePlaceholder')}
            className="form-control"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('form.emailPlaceholder')}
            className="form-control"
            required
          />
          
          {/* ΑΛΛΑΓΗ 4: Προσθήκη του πεδίου Τηλεφώνου */}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t('form.phonePlaceholder')}
            className="form-control"
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="" disabled>{t('form.roleSelect.default')}</option>
            <option value="producer">{t('form.roleSelect.producer')}</option>
            <option value="store">{t('form.roleSelect.store')}</option>
          </select>
          <input
            type="text"
            name="productType"
            value={formData.productType}
            onChange={handleChange}
            placeholder={t('form.productTypePlaceholder')}
            className="form-control"
          />
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder={t('form.commentPlaceholder')}
            className="form-control"
            rows={4}
          ></textarea>
          
          <button type="submit" className="form-button" disabled={formStatus.status === 'sending'}>
            {formStatus.status === 'sending' ? t('form.sending') : t('form.submitButton')}
          </button>
          
          {/* ΑΛΛΑΓΗ 5: Εμφάνιση του δυναμικού μηνύματος */}
          {formStatus.status === 'success' && <p className="text-green-700 mt-2">{formStatus.message}</p>}
          {formStatus.status === 'error' && <p className="text-red-500 mt-2">{formStatus.message}</p>}
        </form>
      </div>
    </section>
  );
}