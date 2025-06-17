import React from "react";



export default function Careers()
{
    return (
        <main className="min-h-screen p-6 bg-gray-100">
            <h1 className="text-3xl font-bold text-center mb-6">Career</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Jobs</h2>
                    <ul>
                        <li className="border-b pb-2">
                            <h3 className="font-bold text-lg">Job1</h3>
                            <p>description</p>
                        </li>
                        <li className="border-b pb-2">
                            <h3 className="font-bold text-lg">job2</h3>
                            <p>description</p>
                        </li>
                    </ul>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text=2xl font-semibold mb-4">Vocational Training</h2>
                    <ul className="space-y-4">
                        <li className="border-b pb-2">
                            <h3 className="font-bold text-lg">ausbildung1</h3>
                            <p>description</p>
                        </li>
                        
                    </ul>
                </section>
            </div>
        </main>
    )
}