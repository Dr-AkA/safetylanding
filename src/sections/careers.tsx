import React from "react";
import Arrow from "@/assets/arrow-right.svg";
import {getTranslations} from 'next-intl/server';



export default async function Careers()
{
      const t = await getTranslations('careers');

    return (
        <main className="min-h-screen p-6 bg-[#EAEEFE]">
            <h1 className="text-3xl font-bold text-center mb-6"> {t('title')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-semibold mb-4"> {t('job')}</h2>
                    <ul>
                        <li className="border-b pb-2">
                            <h3 className="font-bold text-lg">Job1</h3>
                            <p>description</p>
                             <button className="btn btn-text gap-1 text-black/90"><span> {t('learn')}</span>
                            <Arrow className="h-5 w-5"/></button>
                        </li>
                        <li className="border-b pb-2">
                            <h3 className="font-bold text-lg">job2</h3>
                            <p>description</p>
                              <button className="btn btn-text gap-1 text-black/90"><span> {t('learn')}</span>
                            <Arrow className="h-5 w-5"/></button>
                        </li>
                    </ul>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text=2xl font-semibold mb-4"> {t('training')}</h2>
                    <ul className="space-y-4">
                        <li className="border-b pb-2">
                            <h3 className="font-bold text-lg">ausbildung1</h3>
                            <p>description</p>
                             <button className="btn btn-text gap-1 text-black/90"><span> {t('learn')}</span>
                            <Arrow className="h-5 w-5"/></button>
                        </li>
                        
                    </ul>
                </section>
            </div>
        </main>
    )
}