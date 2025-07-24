"use client";
import React, { useState } from "react";
import Arrow from "@/assets/arrow-right.svg";

type Props = {
  id: number;
  type: "job" | "training";
  label: string;
  translation: {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    phone: string;
    cv: string;
    upload: string;
    apply: string;
    cancel: string;
  };
};

export const ApplyButton = ({ id, type, label, translation }: Props) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    cv: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      setForm(prev => ({ ...prev, cv: files?.[0] || null }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) data.append(key, value as string | Blob);
    });

    if (type === "job") {
      data.append("jobId", id.toString());
    } else if (type === "training") {
      data.append("trainingId", id.toString());
    }

    try {
      const res = await fetch("/api/upload-cv", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        alert("Application submitted!");
        setOpen(false);
      } else {
        alert("Failed to submit.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <>
      <button
        className="btn btn-text gap-1 text-black/90"
        onClick={() => setOpen(true)}
      >
        <span>{label}</span>
        <Arrow className="h-5 w-5" />
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-6 w-full max-w-md space-y-3"
          >
            <h3 className="text-xl font-semibold">{translation.apply}</h3>

            <input
              type="text"
              name="firstname"
              placeholder={translation.firstName}
              value={form.firstname}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="lastname"
              placeholder={translation.lastName}
              value={form.lastname}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder={translation.email}
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder={translation.phone}
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="address"
              placeholder={translation.address}
              value={form.address}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />

            <div className="w-full space-y-1">
              <input
                id="cv-upload"
                type="file"
                name="cv"
                accept=".pdf"
                onChange={handleChange}
                required
                className="hidden"
              />
              <label
                htmlFor="cv-upload"
                className="btn btn-primary w-full cursor-pointer text-center hover:translate-y-1"
              >
                {translation.upload} {translation.cv}
              </label>
              {form.cv && (
                <p className="text-sm text-gray-700 text-center truncate">
                  Selected file: <span className="font-medium">{form.cv.name}</span>
                </p>
              )}
            </div>

            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="btn btn-secondary"
              >
                {translation.cancel}
              </button>
              <button
                type="submit"
                className="btn btn-primary hover:translate-y-1"
              >
                {translation.apply}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
