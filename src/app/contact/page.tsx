import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#EAEEFE] py-20">
        <div className="container mx-auto px-4">
          <h1 className="section-title mb-8">Kontaktieren Sie uns</h1>
          <p className="section-paragraph max-w-2xl mx-auto mb-16">
            Haben Sie Fragen zu unseren Produkten oder Dienstleistungen? Wir sind für Sie da und freuen uns auf Ihre Nachricht.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 