"use client";

import type { FormEvent } from "react";

// No mail backend yet: submitting opens the visitor's email app with the message prefilled.
export default function ContactForm({ to, buttonClass }: { to: string; buttonClass: string }) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name"));
    const email = String(data.get("email"));
    const message = String(data.get("message"));
    const subject = `Call request from ${name}`;
    const body = `${message}\n\n${name}\n${email}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const field =
    "mt-2 w-full rounded-md border border-hairline bg-ivory px-4 py-3 text-base text-ink outline-none sm:text-sm placeholder:text-stone/60";
  const label = "text-[0.7rem] tracking-[0.2em] text-stone uppercase";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Name</span>
          <input name="name" type="text" required autoComplete="name" placeholder="Your full name" className={field} />
        </label>
        <label className="block">
          <span className={label}>Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
        </label>
      </div>
      <label className="block">
        <span className={label}>Message</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="A line about your business"
          className={`${field} resize-none`}
        />
      </label>
      <button type="submit" className={`w-full cursor-pointer text-center ${buttonClass}`}>
        Request a call
      </button>
    </form>
  );
}
