'use client';

import React, { useEffect, useRef } from 'react';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';
import { Heart, split } from '@/components/ui/MotionText';

export const TestimonialShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const { gsap } = getGSAP();
    const ctx = gsap.context(() => {
      gsap.from('.test-quote .word', {
        yPercent: 110,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.04,
        scrollTrigger: {
          trigger: '.test-quote',
          start: 'top 85%',
        },
      });

      gsap.from('.test-author', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.test-author',
          start: 'top 90%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-4xl px-6 py-28 sm:py-36 md:py-48 text-center"
      aria-label="Client Testimonial"
    >
      <Heart className="mx-auto h-8 w-8 sm:h-10 sm:w-10 animate-heartbeat text-[#53664B]" />

      <blockquote className="test-quote mt-8 sm:mt-12 font-display text-2xl sm:text-4xl md:text-5xl font-light italic leading-snug sm:leading-snug text-[#292C25]">
        {split(
          "“We opened the album and cried all over again. It's not photos — it's the whole day, breathing.”"
        )}
      </blockquote>

      <p className="test-author mt-8 sm:mt-10 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#575A51] font-medium">
        Ananya &amp; Rahul · 2025
      </p>
    </section>
  );
};
