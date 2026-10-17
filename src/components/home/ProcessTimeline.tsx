'use client';

import React, { useEffect, useRef } from 'react';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';
import { split } from '@/components/ui/MotionText';

const STEPS = [
  ['Hello', 'We meet over coffee or a call and listen to your story.'],
  ['Plan', 'Timelines, locations and light — gently planned together.'],
  ['Hold', "On the day, we disappear and catch what's real."],
  ['Relive', 'Your gallery and heirloom album arrive within 6 weeks.'],
];

export const ProcessTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const { gsap } = getGSAP();
    const ctx = gsap.context(() => {
      // 1. Line fill on scroll
      gsap.fromTo(
        '.process-fill',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      );

      // 2. Heading reveal
      gsap.from('.process-heading .word', {
        yPercent: 110,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.process-heading',
          start: 'top 85%',
        },
      });

      // 3. Step fade up
      gsap.from('.step-fade', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.16,
        scrollTrigger: {
          trigger: '.step-container',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="process mx-auto grid max-w-7xl gap-12 sm:gap-16 px-6 py-28 sm:py-36 md:grid-cols-[1fr_1.4fr] md:px-12 md:py-48"
      aria-label="How It Unfolds"
    >
      {/* Left Sticky Heading */}
      <div className="md:sticky md:top-36 md:self-start">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.4em] text-[#53664B] font-semibold">
          The journey
        </p>
        <h2 className="process-heading mt-4 sm:mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-light leading-none text-[#292C25] tracking-tight">
          {split('How it')} <br />
          <em className="text-[#53664B] not-italic font-normal">
            {split('unfolds')}
          </em>
        </h2>
      </div>

      {/* Right Timeline Steps */}
      <div className="step-container relative pl-10 sm:pl-12">
        {/* Background track line */}
        <div className="absolute left-3.5 top-0 h-full w-px bg-[#E4E2D8]" />
        {/* Animated fill line */}
        <div className="process-fill absolute left-3.5 top-0 h-full w-px origin-top bg-[#53664B] will-change-transform" />

        <div className="space-y-16 sm:space-y-20">
          {STEPS.map(([title, desc], i) => (
            <div key={title} className="step-fade relative">
              {/* Number Badge */}
              <span className="absolute -left-10 sm:-left-12 top-1 grid h-7 w-7 place-items-center rounded-full bg-[#53664B] text-xs font-semibold text-[#F8F6EF] shadow-md">
                {i + 1}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-light text-[#292C25]">
                {title}
              </h3>
              <p className="mt-3 max-w-md text-sm sm:text-base text-[#575A51] font-light leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
