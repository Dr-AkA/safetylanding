"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const ContactUs = () => {
  const t = useTranslations("contact");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-20 bg-[#EAEEFE] overflow-x-clip">
      <div className="container mx-auto">
        <div className="section-heading mb-10">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-paragraph mt-5">{t('description')}</p>
        </div>
        <div className="md:flex md:gap-10 items-start md:items-stretch md:relative md:min-h-[600px] md:h-[80vh]">
          <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-md p-8 mb-8 md:mb-0 flex-1 flex flex-col justify-between h-full overflow-hidden">
            <h3 className="text-2xl font-bold text-green-900 mb-6">{t('title')}</h3>
            <ul className="space-y-4 text-green-900 flex-1">
              <li>
                <span className="font-semibold">Adresse:</span><br/>
                Ruhenhof 4<br/>
                48565 Steinfurt<br/>
                Deutschland
              </li>
              <li>
                <span className="font-semibold">Telefon:</span><br/>
                +49 2551 835120
              </li>
              <li>
                <span className="font-semibold">E-Mail:</span><br/>
                info@safety-doors.com
              </li>
              <li>
                <span className="font-semibold">Öffnungszeiten:</span><br/>
                Mo-Fr: 08:00 - 17:00 Uhr<br/>
                Sa-So: Geschlossen
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-md p-8 flex-1 flex flex-col justify-between h-full overflow-hidden">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full">
              <h3 className="text-2xl font-bold text-green-900 mb-6">{t('button')}</h3>
              <div>
                <label htmlFor="name" className="block text-green-900 font-semibold mb-2">{t('first')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder={t('first')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-green-900 font-semibold mb-2">{t('email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder={t('email')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-green-900 font-semibold mb-2">{t('message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                  placeholder={t('message')}
                />
              </div>
              <button type="submit" className="btn btn-primary w-full mt-2">{t('button')}</button>
              {submitted && (
                <p className="text-green-700 text-center mt-4">Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;