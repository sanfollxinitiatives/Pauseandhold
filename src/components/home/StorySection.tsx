'use client';

import React, { useEffect, useRef } from 'react';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';
import { Heart } from '@/components/ui/MotionText';

const STORY_TEXT =
  "We don't stage your day. We wait, quietly, for the trembling hands, the stolen glances, the laugh that breaks into tears — and we hold it, so you can return to it forever.";

export const StorySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const { gsap } = getGSAP();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.story-word',
        { opacity: 0.14 },
        {
          opacity: 1,
          stagger: 0.08,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 50%',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="story relative mx-auto max-w-6xl px-6 py-24 sm:py-36 md:py-48"
      aria-label="Our Philosophy"
    >
      <Heart className="absolute right-6 sm:right-12 top-16 sm:top-24 h-12 w-12 sm:h-16 sm:w-16 animate-floaty text-[#53664B]/25 pointer-events-none" />
      <p className="mb-8 sm:mb-12 text-[11px] sm:text-xs uppercase tracking-[0.4em] text-[#53664B] font-semibold">
        Our way of seeing
      </p>
      <p className="font-display text-3xl sm:text-5xl md:text-6xl font-light leading-[1.18] sm:leading-tight text-[#292C25]">
        {STORY_TEXT.split(' ').map((word, i) => (
          <span key={i} className="story-word inline-block mr-[0.25em] will-change-transform">
            {word}
          </span>
        ))}
      </p>
    </section>
  );
};
