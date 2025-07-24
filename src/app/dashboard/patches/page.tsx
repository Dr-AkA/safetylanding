"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type Patches = {
  id: number;
  title: string;
  description: string;
  releasedAt: string;
};

export default function PatchesPage() {
  const [patches, setPatches] = useState<Patches[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    releasedAt: "",
  });

  useEffect(() => {
    fetchPatches();
  }, []);

  async function fetchPatches() {
    const res = await fetch("/api/patches");
    const data = await res.json();
    setPatches(data);
  }

  async function handleAdd() {
    setLoading(true);
    const res = await fetch("/api/patches", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      await fetchPatches();
      setForm({ title: "", description: "", releasedAt: "" });
    }
    setLoading(false);
  }

  async function handleDelete(id: number) {
    setLoading(true);
    const res = await fetch(`/api/patches/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      await fetchPatches();
    }
    setLoading(false);
  }

  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold mb-6">Patches</h2>

      <div className="space-y-4 mb-8">
        <Input
          placeholder="Patch Version"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <Textarea
          placeholder="Patch Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <Input
        type="date"
          placeholder="Release Date "
          value={form.releasedAt}
          onChange={(e) => setForm({ ...form, releasedAt: e.target.value })}
        />
        <Button onClick={handleAdd} disabled={loading}>
          {loading ? "Saving..." : "Add Patch"}
        </Button>
      </div>

      <div className="space-y-4">
        {patches.length === 0 ? (
          <p className="text-gray-500">No Patches found.</p>
        ) : (
          
          patches.map((Patch) => (
            <div
              key={Patch.id}
              className="border rounded-lg p-4 flex justify-between items-start"
            >
              <div>
                <h3 className="text-xl font-semibold">{Patch.title}</h3>
                <p className="text-gray-700">{Patch.description}</p>
                <p className="text-sm text-gray-500">Release Date: {Patch.releasedAt}</p>
              </div>
              <Button
                variant="destructive"
                onClick={() => handleDelete(Patch.id)}
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
