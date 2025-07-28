"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

type Applicant = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  cv: string;
  isSeen: boolean;
  job?: {
    title: string;
  } | null;
  training?: {
    title: string;
  } | null;
};

export default function ApplicantPage() {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApplicants();
  }, []);

  async function fetchApplicants() {
    try {
      const res = await fetch("/api/upload-cv");
      if (!res.ok) throw new Error("Failed to fetch applicants");
      const data = await res.json();
      setApplicants(data);
    } catch (err) {
      console.error("Error loading applicants:", err);
    }
  }

  async function handleDelete(id: number) {
    setLoading(true);
    try {
      const res = await fetch(`/api/upload-cv/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        await fetchApplicants();
      }
    } catch (err) {
      console.error("Delete failed:", err);
    }
    setLoading(false);
  }

  async function markAsReaden(id: number, isSeen: boolean) {
    setLoading(true);
    try {
      const res = await fetch(`/api/upload-cv/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isSeen }),
      });
      if (res.ok) {
        await fetchApplicants();
      }
    } catch (err) {
      console.error("Update failed:", err);
    }
    setLoading(false);
  }

  // Function to extract filename from CV URL
  function getFilenameFromUrl(cvUrl: string): string {
    return cvUrl.split('/').pop() || 'cv';
  }

  // Function to download CV
  async function downloadCV(cvUrl: string, applicantName: string) {
    try {
      const filename = getFilenameFromUrl(cvUrl);
      const response = await fetch(`/api/cv/${filename}`);
      
      if (!response.ok) {
        throw new Error('Download failed');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `${applicantName}_CV.${filename.split('.').pop()}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  }

  return (
    <div className="space-y-4">
      {applicants.length === 0 ? (
        <p className="text-gray-500">Kein Bewerber gefunden</p>
      ) : (
        applicants.map((applicant) => (
          <div
            key={applicant.id}
            className={`border rounded-lg p-4 flex justify-between items-start ${
              applicant.isSeen
                ? "bg-white text-gray-500"
                : "bg-gray-100 text-black font-bold"
            }`}
          >
            <div>
              <h3 className="text-xl font-semibold">
                Name: {applicant.firstName} {applicant.lastName}
              </h3>
              <h4 className="text-gray-700">Email: {applicant.email}</h4>
              <p className="text-sm text-gray-500">Telefon: {applicant.phone}</p>
              <p className="text-sm text-gray-500">Adresse: {applicant.address}</p>

              <div className="flex gap-2 mt-2 flex-wrap">
                {applicant.job && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Job: {applicant.job.title}
                  </span>
                )}
                {applicant.training && (
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Training: {applicant.training.title}
                  </span>
                )}
                {!applicant.job && !applicant.training && (
                  <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Keine Zuordnung
                  </span>
                )}
              </div>

              <div className="mt-2 flex gap-3 items-center flex-wrap">
                <a
                  href={`/api/cv/${getFilenameFromUrl(applicant.cv)}`}
                  className="text-blue-600 underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lebenslauf ansehen
                </a>

                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => downloadCV(applicant.cv, `${applicant.firstName}_${applicant.lastName}`)}
                  disabled={loading}
                >
                  CV herunterladen
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  applicant.isSeen
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {applicant.isSeen ? "Gesehen" : "Ungelesen"}
              </span>

              <Button
                variant="secondary"
                onClick={() => markAsReaden(applicant.id, !applicant.isSeen)}
                disabled={loading}
              >
                {applicant.isSeen
                  ? "als ungelesen markieren"
                  : "als beantwortet markieren"}
              </Button>

              <Button
                variant="destructive"
                onClick={() => handleDelete(applicant.id)}
                disabled={loading}
              >
                Delete
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}