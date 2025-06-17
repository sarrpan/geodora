'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function InterestFormSection() {
  const t = useTranslations('InterestFormSection');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    productType: '',
    comment: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('/api/interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', role: '', productType: '', comment: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
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
          {/* ΔΙΟΡΘΩΣΗ: Αφαιρέθηκε το 'defaultValue' από εδώ */}
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
          <button type="submit" className="form-button" disabled={status === 'sending'}>
            {status === 'sending' ? 'Αποστολή...' : t('form.submitButton')}
          </button>
          
          {status === 'success' && <p className="text-green-700 mt-2">Η φόρμα στάλθηκε με επιτυχία!</p>}
          {status === 'error' && <p className="text-red-500 mt-2">Παρουσιάστηκε σφάλμα. Παρακαλώ δοκιμάστε ξανά.</p>}
        </form>
      </div>
    </section>
  );
}