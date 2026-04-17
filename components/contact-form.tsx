"use client";

import { FormEvent, useState } from "react";

type FormLabels = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  submit: string;
  submitting: string;
  success: string;
  error: string;
};

const defaultLabels: FormLabels = {
  name: "Meno a priezvisko",
  email: "E-mail",
  phone: "Telefón",
  topic: "Vaša správa",
  message: "Vaša správa",
  submit: "Odoslať",
  submitting: "Odosielame...",
  success: "Správa bola úspešne odoslaná. Ozveme sa vám čo najskôr.",
  error: "Nepodarilo sa odoslať formulár. Skúste to prosím znova."
};

export function ContactForm({ labels = defaultLabels }: { labels?: FormLabels }) {
  const [feedback, setFeedback] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "loading") {
      return;
    }

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim()
    };

    setStatus("loading");
    setFeedback(labels.submitting);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string }
        | null;

      if (!response.ok || !result?.ok) {
        setStatus("error");
        setFeedback(result?.message ?? labels.error);
        return;
      }

      event.currentTarget.reset();
      setStatus("success");
      setFeedback(result.message ?? labels.success);
    } catch {
      setStatus("error");
      setFeedback(labels.error);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-black">
          <span>{labels.name}</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-black"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-black">
          <span>{labels.email}</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-black"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-black">
        <span>{labels.phone}</span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-black"
          placeholder="+421..."
        />
      </label>

      <label className="space-y-2 text-sm font-medium text-black">
        <span>{labels.message}</span>
        <textarea
          required
          name="message"
          rows={6}
          className="w-full rounded-[1.5rem] border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
        />
      </label>

      <div className="flex justify-start">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:bg-black/90 disabled:cursor-not-allowed disabled:bg-black/60"
        >
          {status === "loading" ? labels.submitting : labels.submit}
        </button>
      </div>

      {feedback ? (
        <p
          aria-live="polite"
          className={`rounded-2xl px-4 py-3 text-sm ${
            status === "success"
              ? "border border-emerald-200 bg-emerald-50 text-emerald-900"
              : status === "error"
                ? "border border-red-200 bg-red-50 text-red-900"
                : "border border-blue-200 bg-blue-50 text-blue-900"
          }`}
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
