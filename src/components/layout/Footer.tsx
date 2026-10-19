'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart } from '@/components/ui/MotionText';
import { split } from '@/components/ui/MotionText';

export const Footer: React.FC = () => {
  const [newsletterSent, setNewsletterSent] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#292C25] text-[#F8F6EF]">
      <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 md:px-12">
        {/* Top Callout & Magnetic Circular CTA */}
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.4em] text-[#819568] font-semibold">
              Now booking 2027
            </p>
            <h2 className="mt-6 font-display text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[7.5rem] font-light leading-none text-[#F8F6EF] tracking-tight">
              {split("Let's hold")}
              <br />
              <em className="text-[#819568] not-italic font-normal">
                {split('your story.')}
              </em>
            </h2>
          </div>

          <Link
            href="/contact/"
            className="magnetic grid h-36 w-36 sm:h-44 sm:w-44 shrink-0 place-items-center rounded-full bg-[#53664B] text-center text-xs sm:text-sm uppercase tracking-[0.2em] text-[#F8F6EF] font-medium transition-transform hover:scale-105 shadow-2xl focus:outline-none"
          >
            <span>
              Check
              <br />
              availability
            </span>
          </Link>
        </div>

        {/* Hairline Divider */}
        <div className="mt-20 sm:mt-24 h-px w-full bg-[#F8F6EF]/15" />

        {/* 4 Columns Information */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Studio */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-[#819568] font-semibold">
              Studio
            </h3>
            <p className="mt-5 leading-relaxed text-sm sm:text-base text-[#EEEDE5]/75 font-light">
              14 Lighthouse Road,
              <br />
              Fort Kochi, Kerala 682001
              <br />
              India
            </p>
            <p className="mt-4 text-xs text-[#EEEDE5]/55 font-light">
              Mon – Sat · 10am – 7pm IST
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-[#819568] font-semibold">
              Explore
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-[#EEEDE5]/80 font-light">
              <li>
                <Link href="/" className="transition hover:text-[#819568] hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about/" className="transition hover:text-[#819568] hover:translate-x-1 inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/stories/" className="transition hover:text-[#819568] hover:translate-x-1 inline-block">
                  Portfolio Stories
                </Link>
              </li>
              <li>
                <Link href="/services/" className="transition hover:text-[#819568] hover:translate-x-1 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery/" className="transition hover:text-[#819568] hover:translate-x-1 inline-block">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="transition hover:text-[#819568] hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Say hello */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-[#819568] font-semibold">
              Say hello
            </h3>
            <ul className="mt-5 space-y-2 text-sm text-[#EEEDE5]/80 font-light">
              <li>
                <a
                  href="mailto:hello@pauseandhold.com"
                  className="hover:text-[#819568] transition-colors"
                >
                  hello@pauseandhold.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919800000000"
                  className="hover:text-[#819568] transition-colors"
                >
                  +91 98000 00000
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-2.5">
              {[
                { label: 'In', title: 'Instagram' },
                { label: 'Pi', title: 'Pinterest' },
                { label: 'Yo', title: 'YouTube' },
                { label: 'Vi', title: 'Vimeo' },
              ].map(({ label, title }) => (
                <a
                  key={title}
                  href="#"
                  aria-label={title}
                  className="grid h-9 w-9 place-items-center rounded-full border border-[#F8F6EF]/20 text-xs text-[#EEEDE5] transition hover:-translate-y-1 hover:bg-[#53664B] hover:border-[#53664B]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Love letters */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-[#819568] font-semibold">
              Love letters
            </h3>
            <p className="mt-5 text-xs sm:text-sm text-[#EEEDE5]/75 font-light leading-relaxed">
              Stories, real weddings and planning notes — once a month.
            </p>
            {newsletterSent ? (
              <p className="mt-5 flex items-center gap-2 text-sm text-[#819568] font-medium">
                <Heart className="h-4 w-4 animate-heartbeat" />
                Thank you, you&apos;re in.
              </p>
            ) : (
              <form
                className="mt-5 flex border-b border-[#F8F6EF]/30"
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterSent(true);
                }}
              >
                <input
                  required
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-transparent py-2.5 text-xs sm:text-sm outline-none placeholder:text-[#EEEDE5]/40 text-[#F8F6EF]"
                />
                <button
                  type="submit"
                  className="text-xs uppercase tracking-[0.2em] font-semibold text-[#819568] hover:text-[#E2E8DC] transition-colors px-2"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Giant Background Marquee */}
      <div className="select-none overflow-hidden whitespace-nowrap border-t border-[#F8F6EF]/10 py-4 sm:py-6 pointer-events-none">
        <div className="flex w-max animate-marquee gap-10 font-display text-[16vw] md:text-[12vw] font-light leading-none text-[#F8F6EF]/[0.04]">
          <span>Pause &amp; Hold ·</span>
          <span>Pause &amp; Hold ·</span>
          <span>Pause &amp; Hold ·</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 pb-8 text-xs text-[#EEEDE5]/60 md:flex-row md:px-12 border-t border-[#F8F6EF]/10 pt-6">
        <p>© 2026 Pause &amp; Hold Photography. Developed by Sanfollx Initiatives.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy-policy/" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <button
            type="button"
            onClick={scrollToTop}
            className="uppercase tracking-[0.2em] text-[#819568] hover:text-[#F8F6EF] transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
