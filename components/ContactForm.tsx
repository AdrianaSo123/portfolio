"use client";

import { useState } from "react";
import { Button } from "./Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate network latency for UX
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  if (status === "success") {
    return (
      <div className="w-full max-w-xl py-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
        <h3 className="font-serif text-2xl font-bold text-ink">Message Received.</h3>
        <p className="text-body mt-2">Thank you. I will get back to you shortly.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm uppercase tracking-widest text-accent hover:text-ink transition-colors font-medium border-b border-accent/20 pb-1"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col gap-10 mt-12 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted">Name</label>
        <input 
          type="text" 
          id="name" 
          required 
          className="w-full bg-transparent border-b border-border py-2 text-ink placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
          placeholder="Jane Doe"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted">Email</label>
        <input 
          type="email" 
          id="email" 
          required 
          className="w-full bg-transparent border-b border-border py-2 text-ink placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
          placeholder="jane@example.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted">Message</label>
        <textarea 
          id="message" 
          required 
          rows={4}
          className="w-full bg-transparent border-b border-border py-2 text-ink placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="How can we build together?"
        />
      </div>

      <div className="pt-4">
        {/* We use standard HTML button here to prevent Button component href default routing */}
        <button 
          type="submit" 
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-ink text-canvas hover:bg-body hover:shadow-lg hover:-translate-y-0.5"
        >
          {status === "submitting" ? "Sending..." : "Submit Inquiry"}
        </button>
      </div>
    </form>
  );
}
