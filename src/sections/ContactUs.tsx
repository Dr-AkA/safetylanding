'use client';

import { useState } from 'react';

export const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
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
      {/* Contact section with two columns: contact info (left) and contact form (right) */}
      <div className="container mx-auto">
        <div className="section-heading mb-10">
          <h2 className="section-title">Kontaktieren Sie uns</h2>
          {/* Friendly, professional description for users */}
          <p className="section-paragraph mt-5">Sie haben Fragen oder wünschen ein Angebot? Schreiben Sie uns – wir sind gerne für Sie da!</p>
        </div>
        {/* On desktop: two columns, on mobile: stacked */}
        <div className="md:flex md:gap-10 items-start md:items-stretch md:relative md:min-h-[600px] md:h-[80vh]">
          {/* Left column: Contact details, same height as form on desktop */}
          <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-md p-8 mb-8 md:mb-0 flex-1 flex flex-col justify-between h-full overflow-hidden">
            <h3 className="text-2xl font-bold text-green-900 mb-6">Unsere Kontaktdaten</h3>
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
          {/* Right column: Contact form, same height as left on desktop */}
          <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-md p-8 flex-1 flex flex-col justify-between h-full overflow-hidden">
            {/* Contact form with success message */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Senden Sie uns eine Nachricht</h3>
              <div>
                <label htmlFor="name" className="block text-green-900 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-green-900 font-semibold mb-2">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Ihre E-Mail-Adresse"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-green-900 font-semibold mb-2">Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                  placeholder="Ihre Nachricht"
                />
              </div>
              <button type="submit" className="btn btn-primary w-full mt-2">Absenden</button>
              {/* Success message after form submission */}
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
