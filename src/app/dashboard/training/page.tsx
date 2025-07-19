"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type Training = {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  tags: string;
};

export default function TrainingPage() {
  const [trainingList, setTrainingList] = useState<Training[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    tags: "",
  });

  useEffect(() => {
    fetchTraining();
  }, []);

  async function fetchTraining() {
    const res = await fetch("/api/training");
    const data = await res.json();
    setTrainingList(data);
  }

  async function handleAdd() {
    setLoading(true);
    const res = await fetch("/api/training", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      await fetchTraining();
      setForm({ title: "", description: "", startDate: "", endDate: "", tags: "" });
    }
    setLoading(false);
  }

  async function handleDelete(id: number) {
    setLoading(true);
    const res = await fetch(`/api/training/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      await fetchTraining();
    }
    setLoading(false);
  }

  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold mb-6">Ausbildung (Training)</h2>

      <div className="space-y-4 mb-8">
        <Input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <Textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <Input
          type="date"
          placeholder="Start Date"
          value={form.startDate}
          onChange={(e) => setForm({ ...form, startDate: e.target.value })}
        />
        <Input
          type="date"
          placeholder="End Date"
          value={form.endDate}
          onChange={(e) => setForm({ ...form, endDate: e.target.value })}
        />
        <Input
          placeholder="Tags"
          value={form.tags}
          onChange={(e) => setForm({ ...form, tags: e.target.value })}
        />
        <Button onClick={handleAdd} disabled={loading}>
          {loading ? "Saving..." : "Add Training"}
        </Button>
      </div>

      <div className="space-y-4">
        {trainingList.length === 0 ? (
          <p className="text-gray-500">No training found.</p>
        ) : (
          trainingList.map((training) => (
            <div
              key={training.id}
              className="border rounded-lg p-4 flex justify-between items-start"
            >
              <div>
                <h3 className="text-xl font-semibold">{training.title}</h3>
                <p className="text-gray-700">{training.description}</p>
                <p className="text-sm text-gray-500">
                  {new Date(training.startDate).toLocaleDateString()} →{" "}
                  {new Date(training.endDate).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-500">Tags: {training.tags}</p>
              </div>
              <Button
                variant="destructive"
                onClick={() => handleDelete(training.id)}
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
