'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function SuggestProductForm() {
  const t = useTranslations('SuggestProductForm');

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
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.comments, // ✅ το πεδίο που διαβάζει ο server
          productType: form.productType,
          origin: form.origin,
          packaging: form.packaging,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert(t('alerts.success'));
        setForm({
          name: '',
          email: '',
          productType: '',
          origin: '',
          packaging: '',
          comments: '',
        });
      } else {
        alert(`❌ ${t('alerts.error')}: ${result.error || t('alerts.genericError')}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t('alerts.error'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* όλα τα input παραμένουν όπως τα έχεις */}
      <div>
        <label className="block font-medium mb-1">
          {t('labels.name')} <span className="text-red-500">*</span>
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
          {t('labels.email')} <span className="text-red-500">*</span>
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
          {t('labels.productType')} <span className="text-red-500">*</span>
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
          {t('labels.origin')} <span className="text-red-500">*</span>
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
        <label className="block font-medium mb-1">{t('labels.packaging')}</label>
        <input
          type="text"
          name="packaging"
          value={form.packaging}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block font-medium mb-1">{t('labels.comments')}</label>
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
        {t('button')}
      </button>
    </form>
  );
}
