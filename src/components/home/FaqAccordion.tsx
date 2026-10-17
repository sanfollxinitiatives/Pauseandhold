'use client';

import React, { useState, useEffect, useRef } from 'react';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';
import { split } from '@/components/ui/MotionText';

const FAQS = [
  [
    'How far ahead should we book?',
    'Most couples book 9–14 months ahead. For peak season (Nov–Feb), earlier is kinder.',
  ],
  [
    'Do you travel?',
    'Always. We photograph across India and abroad — travel is included for South India.',
  ],
  [
    'How many photos will we get?',
    'Usually 600–900 finished images for a full day, all carefully edited by hand.',
  ],
  [
    'Can we combine photo and film?',
    'Yes — our Forever collection pairs both teams so the day is told in full.',
  ],
];

export const FaqAccordion: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const { gsap } = getGSAP();
    const ctx = gsap.context(() => {
      gsap.from('.faq-heading .word', {
        yPercent: 110,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.faq-heading',
          start: 'top 85%',
        },
      });

      gsap.from('.faq-item', {
        y: 35,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.faq-container',
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-4xl px-6 pb-28 sm:pb-36 md:pb-48"
      aria-label="Frequently Asked Questions"
    >
      <h2 className="faq-heading text-center font-display text-5xl sm:text-6xl md:text-7xl font-light text-[#292C25] tracking-tight">
        {split('Gentle questions')}
      </h2>

      <div className="faq-container mt-12 sm:mt-16 divide-y divide-[#E4E2D8] border-y border-[#E4E2D8]">
        {FAQS.map(([q, a], i) => {
          const isOpen = activeFaq === i;
          return (
            <div key={q} className="faq-item">
              <button
                type="button"
                onClick={() => setActiveFaq(isOpen ? null : i)}
                className="flex w-full items-center justify-between py-6 sm:py-7 text-left font-display text-xl sm:text-2xl font-light text-[#292C25] hover:text-[#53664B] transition-colors focus:outline-none"
                aria-expanded={isOpen}
              >
                <span>{q}</span>
                <span
                  className={`text-2xl text-[#53664B] transition-transform duration-500 font-normal ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-500 ease-out ${
                  isOpen
                    ? 'grid-rows-[1fr] pb-6 sm:pb-7 opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm sm:text-base text-[#575A51] font-light leading-relaxed pr-8">
                    {a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
