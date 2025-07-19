"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type Job = {
  id: number;
  title: string;
  description: string;
  tags: string;
};

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    tags: "",
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  async function fetchJobs() {
    const res = await fetch("/api/jobs");
    const data = await res.json();
    setJobs(data);
  }

  async function handleAdd() {
    setLoading(true);
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      await fetchJobs();
      setForm({ title: "", description: "", tags: "" });
    }
    setLoading(false);
  }

  async function handleDelete(id: number) {
    setLoading(true);
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      await fetchJobs();
    }
    setLoading(false);
  }

  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold mb-6">Jobs</h2>

      <div className="space-y-4 mb-8">
        <Input
          placeholder="Job Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <Textarea
          placeholder="Job Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <Input
          placeholder="Tags (comma separated)"
          value={form.tags}
          onChange={(e) => setForm({ ...form, tags: e.target.value })}
        />
        <Button onClick={handleAdd} disabled={loading}>
          {loading ? "Saving..." : "Add Job"}
        </Button>
      </div>

      <div className="space-y-4">
        {jobs.length === 0 ? (
          <p className="text-gray-500">No jobs found.</p>
        ) : (
          jobs.map((job) => (
            <div
              key={job.id}
              className="border rounded-lg p-4 flex justify-between items-start"
            >
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-700">{job.description}</p>
                <p className="text-sm text-gray-500">Tags: {job.tags}</p>
              </div>
              <Button
                variant="destructive"
                onClick={() => handleDelete(job.id)}
                disabled={loading}
              >
                Delete
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
