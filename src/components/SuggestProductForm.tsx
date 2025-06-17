'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function SuggestProductForm() {
  const t = useTranslations('SuggestProductForm');

  // ΑΛΛΑΓΗ 1: Προσθήκη του 'phone' στο state
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '', // Το νέο πεδίο
    productType: '',
    origin: '',
    packaging: '',
    comments: '',
  });
  
  // ΑΛΛΑΓΗ 2: State για τα μηνύματα της φόρμας
  const [formStatus, setFormStatus] = useState({ status: '', message: '' });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ status: 'sending', message: '' }); // Ενημέρωση κατάστασης

    try {
      const response = await fetch('/api/send-product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.comments,
          productType: form.productType,
          origin: form.origin,
          packaging: form.packaging,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // ΑΛΛΑΓΗ 3: Χρήση του μηνύματος από το API, αντί για alert()
        setFormStatus({ status: 'success', message: result.message });
        setForm({ name: '', email: '', phone: '', productType: '', origin: '', packaging: '', comments: '' });
      } else {
        setFormStatus({ status: 'error', message: result.error || t('alerts.genericError') });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({ status: 'error', message: t('alerts.genericError') });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium mb-1">
          {t('labels.name')} <span className="text-red-500">*</span>
        </label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block font-medium mb-1">
          {t('labels.email')} <span className="text-red-500">*</span>
        </label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
      </div>

      {/* ΑΛΛΑΓΗ 4: Προσθήκη του πεδίου Τηλεφώνου */}
      <div>
        <label className="block font-medium mb-1">{t('labels.phone')}</label>
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block font-medium mb-1">
          {t('labels.productType')} <span className="text-red-500">*</span>
        </label>
        <input type="text" name="productType" value={form.productType} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block font-medium mb-1">
          {t('labels.origin')} <span className="text-red-500">*</span>
        </label>
        <input type="text" name="origin" value={form.origin} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block font-medium mb-1">{t('labels.packaging')}</label>
        <input type="text" name="packaging" value={form.packaging} onChange={handleChange} className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block font-medium mb-1">{t('labels.comments')}</label>
        <textarea name="comments" value={form.comments} onChange={handleChange} rows={4} className="w-full border rounded px-3 py-2" />
      </div>

      <button type="submit" className="bg-[#b44d00] hover:bg-[#9f3c00] text-white font-semibold px-6 py-2 rounded shadow-md" disabled={formStatus.status === 'sending'}>
        {formStatus.status === 'sending' ? t('buttonSending') : t('button')}
      </button>

      {/* ΑΛΛΑΓΗ 5: Εμφάνιση του δυναμικού μηνύματος */}
      {formStatus.status === 'success' && <p className="text-green-700 mt-2">{formStatus.message}</p>}
      {formStatus.status === 'error' && <p className="text-red-500 mt-2">{formStatus.message}</p>}
    </form>
  );
}