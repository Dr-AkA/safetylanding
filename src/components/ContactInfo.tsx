import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Kontaktinformationen</h2>
      <div className="space-y-4">
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">E-Mail</span>
          <span className="block text-base text-gray-900">info@example.com</span>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">Telefon</span>
          <span className="block text-base text-gray-900">+49 123 456789</span>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">Adresse</span>
          <span className="block text-base text-gray-900">Musterstraße 1, 12345 Musterstadt</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 