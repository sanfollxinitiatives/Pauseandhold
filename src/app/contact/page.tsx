'use client';

import React, { useState } from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { Heart } from '@/components/ui/MotionText';

const CONTACT_INFO = [
  ['Email', 'hello@pauseandhold.com'],
  ['Phone', '+91 98000 00000'],
  ['Studio', '14 Lighthouse Road, Fort Kochi'],
  ['Hours', 'Mon – Sat · 10am – 7pm'],
];

const FIELD_STYLE =
  'w-full border-b border-[#E4E2D8] bg-transparent py-4 text-base sm:text-lg font-light outline-none transition-colors placeholder:text-[#575A51]/50 text-[#292C25] focus:border-[#53664B]';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="Contact"
        title="Tell us"
        italic="your story."
        intro="Share a few details and we'll reply within two days — usually with a lot of excitement."
        image="/images/hero.jpg"
      />

      {/* 2. Contact Details & Form */}
      <section className="mx-auto grid max-w-7xl gap-16 sm:gap-20 px-6 py-20 sm:py-28 md:grid-cols-[1fr_1.5fr] md:px-12 items-start">
        {/* Left Column: Direct Studio Details */}
        <div className="space-y-10 sm:space-y-12">
          {CONTACT_INFO.map(([label, value]) => (
            <div key={label} className="fade-up">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#53664B] font-semibold">
                {label}
              </p>
              <p className="mt-2 font-display text-xl sm:text-2xl font-light text-[#292C25]">
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Interactive Underline Form / Success State */}
        <div>
          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-3xl bg-[#292C25] p-12 sm:p-16 text-center text-[#F8F6EF] animate-in fade-in zoom-in-95 duration-700 shadow-2xl">
              <Heart className="h-12 w-12 animate-heartbeat text-[#819568]" />
              <h2 className="mt-6 font-display text-4xl sm:text-5xl font-light text-[#F8F6EF]">
                Thank you.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#EEEDE5]/80 font-light leading-relaxed max-w-sm">
                We&apos;ve received your story and will write back to you within 48 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 text-xs uppercase tracking-[0.2em] font-medium text-[#819568] hover:text-[#EEEDE5] transition-colors"
              >
                ← Send another note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2" aria-label="Contact enquiry form">
              <div>
                <input
                  required
                  type="text"
                  placeholder="Your names"
                  aria-label="Your names"
                  className={FIELD_STYLE}
                />
              </div>

              <div>
                <input
                  required
                  type="email"
                  placeholder="Email"
                  aria-label="Your email address"
                  className={FIELD_STYLE}
                />
              </div>

              <div>
                <input
                  type="date"
                  className={FIELD_STYLE}
                  aria-label="Wedding Date"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Venue / city"
                  aria-label="Venue or city"
                  className={FIELD_STYLE}
                />
              </div>

              <div className="sm:col-span-2">
                <select
                  defaultValue=""
                  className={`${FIELD_STYLE} cursor-pointer`}
                  aria-label="Service required"
                >
                  <option value="" disabled>
                    What are you dreaming of?
                  </option>
                  <option value="photo">Wedding photography</option>
                  <option value="pre-wedding">Pre-wedding session</option>
                  <option value="photo-film">Photo + film collection</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <textarea
                  rows={4}
                  placeholder="Tell us about you two…"
                  aria-label="Tell us about you two"
                  className={`${FIELD_STYLE} resize-none`}
                />
              </div>

              <div className="sm:col-span-2 pt-4">
                <button
                  type="submit"
                  className="magnetic inline-flex items-center gap-3 rounded-full bg-[#53664B] px-10 py-4 sm:py-5 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#F8F6EF] shadow-xl hover:bg-[#3F4F39] hover:scale-105 transition-all duration-300 focus:outline-none"
                >
                  <span>Send with love</span>
                  <Heart className="h-4 w-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
