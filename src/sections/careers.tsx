import React from "react";
import Arrow from "@/assets/arrow-right.svg";
import { getTranslations } from 'next-intl/server';
import ApplyButtonWrapper from "@/components/ApplyButtonWrapper";
import { headers } from "next/headers";

export default async function Careers() {
  const t = await getTranslations('careers');

const host = headers().get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;

  const [jobsRes, trainingsRes] = await Promise.all([
    fetch(`${baseUrl}/api/jobs`, { next: { revalidate: 60 } }),
    fetch(`${baseUrl}/api/training`, { next: { revalidate: 60 } }),
  ]);

  const jobs = await jobsRes.json();
  const trainings = await trainingsRes.json();

  return (
  <main className="min-h-screen p-6 bg-[#EAEEFE]">
    <h1 className="section-title">{t('title')}</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="section-title text-2xl font-semibold mb-4 border-b-2 pb-2">{t('job')}</h2>
        <ul className="space-y-4">
          {jobs && Array.isArray(jobs) && jobs.length > 0 ? (
            jobs.map(job => (
              <li key={job.id} className="border-b pb-2">
                <h3 className="font-bold text-lg">{job.title}</h3>
                <p className="section-paragraph">{job.description}</p>
                <ApplyButtonWrapper id={job.id} type="job" label={t('learn')} />
              </li>
            ))
          ) : (
            <li className="text-gray-500 italic py-8">
              {jobs === null || jobs === undefined ? t('loading') || 'Loading...' : t('noJobsAvailable') || 'No jobs available at the moment'}
            </li>
          )}
        </ul>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="section-title text-2xl font-semibold mb-4 border-b-2 pb-2">{t('training')}</h2>
        <ul className="space-y-4">
          {trainings && Array.isArray(trainings) && trainings.length > 0 ? (
            trainings.map(training => (
              <li key={training.id} className="border-b pb-2">
                <h3 className="font-bold text-lg">{training.title}</h3>
                <p className="section-paragraph">{training.description}</p>
                <p className="section-paragraph">
                  {t('start')}{new Date(training.startDate).toISOString().split('T')[0]}
                </p>
                <p className="section-paragraph">
                  {t('end')}{new Date(training.endDate).toISOString().split('T')[0]}
                </p>
                <ApplyButtonWrapper id={training.id} type="training" label={t('learn')} />
              </li>
            ))
          ) : (
            <li className="text-gray-500 italic py-8">
              {trainings === null || trainings === undefined ? t('loading') || 'Loading...' : t('noTrainingsAvailable') || 'No trainings available at the moment'}
            </li>
          )}
        </ul>
      </section>
    </div>
  </main>
);
}
