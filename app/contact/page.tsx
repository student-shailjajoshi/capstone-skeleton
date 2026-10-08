"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.error || "Something went wrong.");
        return;
      }

      setStatus("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setStatus("Unable to send message. Please try again.");
    }
  };

  return (
    <main className="min-h-screen p-10">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold">Contact Me</h1>

        <p className="mt-4 text-gray-500">
          Have a question or want to work together? Send me a message.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <textarea
            placeholder="Your message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            required
            rows={6}
            className="w-full rounded-lg border px-4 py-3"
          />

          <button
            type="submit"
            className="rounded-lg bg-black px-6 py-3 font-semibold text-white"
          >
            Send Message
          </button>

          {status && (
            <p className="mt-4 font-medium">
              {status}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}