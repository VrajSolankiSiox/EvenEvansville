"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/send-email";

export function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [result, setResult] = useState<{ success?: boolean; error?: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setResult(null);

    const formData = new FormData(event.currentTarget);
    const response = await sendContactEmail(formData);
    setResult(response);
    
    if (response.success) {
      event.currentTarget.reset();
    }
    setIsPending(false);
  }

  return (
    <form onSubmit={handleSubmit} className="luxury-card grid gap-5 p-8 relative overflow-hidden">
      {result?.success && (
        <div className="absolute inset-0 bg-[#f9f4ea]/95 backdrop-blur-md z-10 flex flex-col items-center justify-center text-center p-8">
          <div className="h-16 w-16 rounded-full bg-[#063f49] flex items-center justify-center mb-6">
             <span className="text-white text-2xl">✓</span>
          </div>
          <h3 className="font-serif text-3xl tracking-[-0.05em] text-[#1d2523]">Request Sent</h3>
          <p className="mt-4 text-[#68706b]">Thank you for your inquiry. Our front desk team will contact you shortly.</p>
          <button 
            type="button" 
            onClick={() => setResult(null)}
            className="mt-8 rounded-full border border-[#063f49]/20 px-6 py-2 text-sm font-bold uppercase tracking-[0.1em] text-[#063f49] hover:bg-[#063f49]/5 transition"
          >
            Send Another
          </button>
        </div>
      )}

      {result?.error && (
        <div className="rounded-xl bg-red-50 p-4 text-sm text-red-800 border border-red-200">
          <p><strong>Error:</strong> {result.error}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#68706b]">
          Name
          <input
            name="name"
            required
            className="rounded-xl border border-[#063f49]/15 bg-white px-4 py-3 text-base font-normal normal-case tracking-normal text-[#1d2523] outline-none focus:border-[#063f49]"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#68706b]">
          Email
          <input
            name="email"
            required
            className="rounded-xl border border-[#063f49]/15 bg-white px-4 py-3 text-base font-normal normal-case tracking-normal text-[#1d2523] outline-none focus:border-[#063f49]"
            placeholder="you@example.com"
            type="email"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#68706b]">
          Arrival
          <input
            name="arrival"
            className="rounded-xl border border-[#063f49]/15 bg-white px-4 py-3 text-base font-normal text-[#1d2523] outline-none focus:border-[#063f49]"
            type="date"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#68706b]">
          Guests
          <input
            name="guests"
            className="rounded-xl border border-[#063f49]/15 bg-white px-4 py-3 text-base font-normal text-[#1d2523] outline-none focus:border-[#063f49]"
            min="1"
            placeholder="2"
            type="number"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#68706b]">
        Message
        <textarea
          name="message"
          required
          className="min-h-40 rounded-xl border border-[#063f49]/15 bg-white px-4 py-3 text-base font-normal normal-case tracking-normal text-[#1d2523] outline-none focus:border-[#063f49]"
          placeholder="Suite preferences, celebrations, dining requests..."
        />
      </label>
      <button
        disabled={isPending}
        className="rounded-full bg-[#063f49] px-7 py-4 font-bold text-white transition hover:bg-[#17211f] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        type="submit"
      >
        {isPending ? "Sending..." : "Send Request"}
      </button>
    </form>
  );
}
