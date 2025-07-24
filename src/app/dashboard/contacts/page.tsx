"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type Contacts = {
  id: number;
  firstName: string;
  lastName: string;
  company: string;
  email:string;
  phone:string;
  numEmp:string;
  message:string;
};

export default function ContactPage() {
  const [contact, setContact] = useState<Contacts[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email:"",
    phone:"",
    numEmp:"",
    message:""
  });

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    const res = await fetch("/api/contacts");
    const data = await res.json();
    setContact(data);
  }

  async function handleAdd() {
    setLoading(true);
    const res = await fetch("/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      await fetchContacts();
      setForm({ firstName: "", lastName: "", company: "" ,email:"",phone:"",numEmp:"",message:""});
    }
    setLoading(false);
  }

  async function handleDelete(id: number) {
    setLoading(true);
    const res = await fetch(`/api/contacts/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      await fetchContacts();
    }
    setLoading(false);
  }


  async function handleModal(id: number) {
    setLoading(true);
    const res = await fetch(`/api/contacts/${id}`, {
      method: "GET",
    });
    if (res.ok) {
      await fetchContacts();
    }
    setLoading(false);
  }

  return (
   

      <div className="space-y-4">
        {contact.length === 0 ? (
          <p className="text-gray-500">Kein Kontakt Gefunden</p>
        ) : (
          contact.map((Contacts) => (
            <div
              key={Contacts.id}
              className="border rounded-lg p-4 flex justify-between items-start"
            >
              <div>
                
                <h3 className="text-xl font-semibold">Name: {Contacts.firstName}  {Contacts.lastName}</h3>
                <h4 className="text-gray-700">Unternehmen: {Contacts.company}</h4>
                <h4 className="text-sm text-gray-500">Email addresse: {Contacts.email}</h4>
                <p className="text-sm text-gray-500">Telefon-nummer: {Contacts.phone}</p>
                <p className="text-sm text-gray-500">Zahl Der Mitarbeiter: {Contacts.numEmp}</p>
                <p className="text-sm text-gray-500">Nachricht: {Contacts.message}</p>
              </div>
              <div className="gap-2 mb-2">
              <Button
                variant="destructive"
                onClick={() => handleDelete(Contacts.id)}
                disabled={loading}
              >
                Delete
              </Button>

               <Button
                variant="secondary"
                onClick={() => handleModal(Contacts.id)}
                disabled={loading}
              >
                schauen
              </Button>
              </div>
            </div>
          ))
        )}
      </div>
   
  );
}
