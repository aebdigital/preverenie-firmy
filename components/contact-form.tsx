"use client";

import { FormEvent, useState } from "react";

const serviceOptions = [
  "Preverenie tokov firmy",
  "Identifikácia rizík - compliance",
  "Nastavenie procesov - optimalizácia",
  "Zakladanie obchodných spoločností a zmeny",
  "Likvidácia obchodných spoločností a neziskoviek",
  "Premeny a zlúčenia obchodných spoločností",
  "Iné"
];

export function ContactForm() {
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
    setFeedback("Odosielame vašu správu.");

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
        setFeedback(
          result?.message ??
            "Formulár sa nepodarilo odoslať. Skúste to prosím znova alebo nám napíšte priamo na office@legispro.sk."
        );
        return;
      }

      event.currentTarget.reset();
      setStatus("success");
      setFeedback(
        result.message ??
          "Správa bola úspešne odoslaná. Ozveme sa vám čo najskôr."
      );
    } catch {
      setStatus("error");
      setFeedback(
        "Nastala chyba pri odosielaní formulára. Skúste to prosím znova alebo nám napíšte priamo na office@legispro.sk."
      );
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
          <span>Meno a priezvisko</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-black"
            placeholder="Vaše meno"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-black">
          <span>E-mail</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-black"
            placeholder="vas@email.sk"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-black">
          <span>Telefón</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-black"
            placeholder="+421..."
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-black">
          <span>Služba</span>
          <select
            name="service"
            className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-black"
            defaultValue=""
          >
            <option value="" disabled>
              Vyberte oblasť
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-black">
        <span>Vaša správa</span>
        <textarea
          required
          name="message"
          rows={6}
          className="w-full rounded-[1.5rem] border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
          placeholder="Stručne opíšte, s čím potrebujete pomôcť."
        />
      </label>

      <div className="flex justify-start">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:bg-black/90 disabled:cursor-not-allowed disabled:bg-black/60"
        >
          {status === "loading" ? "Odosielame..." : "Odoslať"}
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
