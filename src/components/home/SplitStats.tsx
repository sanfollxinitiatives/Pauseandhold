'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';
import { split } from '@/components/ui/MotionText';

const STATS = [
  { target: 420, suffix: '+', label: 'Weddings' },
  { target: 12, suffix: '', label: 'Years' },
  { target: 98, suffix: '%', label: 'Happy tears' },
];

export const SplitStats: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !containerRef.current) return;

    const { gsap } = getGSAP();
    const ctx = gsap.context(() => {
      // 1. Tilt scrub
      if (tiltRef.current) {
        gsap.fromTo(
          tiltRef.current,
          { rotate: -3.5, y: 60 },
          {
            rotate: 2.5,
            y: -60,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }

      // 2. Image clip-path reveal
      gsap.fromTo(
        '.img-reveal-box',
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.4,
          ease: 'expo.inOut',
          scrollTrigger: {
            trigger: '.img-reveal-box',
            start: 'top 85%',
          },
        }
      );

      // 3. Word reveal for headline
      gsap.from('.split-heading .word', {
        yPercent: 110,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.split-heading',
          start: 'top 85%',
        },
      });

      // 4. Fade-up text
      gsap.from('.split-fade', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.split-fade',
          start: 'top 88%',
        },
      });

      // 5. Counters
      gsap.utils.toArray<HTMLElement>('.count-num').forEach((el) => {
        const target = Number(el.dataset['to'] || 0);
        const suffix = el.dataset['suffix'] || '';
        const counter = { val: 0 };

        gsap.to(counter, {
          val: target,
          duration: 2.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
          onUpdate: () => {
            el.textContent = Math.round(counter.val) + suffix;
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="mx-auto grid max-w-7xl gap-12 px-6 pb-28 sm:pb-36 md:grid-cols-2 md:gap-20 md:px-12 items-center"
      aria-label="Approach and Statistics"
    >
      {/* Left 3D Tilt Image */}
      <div ref={tiltRef} className="will-change-transform">
        <div className="img-reveal-box aspect-[4/5] overflow-hidden rounded-3xl bg-[#EEEDE5] shadow-xl relative">
          <Image
            src="/images/hands.jpg"
            alt="Intimate hands with wedding rings"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>
      </div>

      {/* Right Narrative & Live Counters */}
      <div className="flex flex-col justify-center">
        <h2 className="split-heading font-display text-5xl sm:text-6xl md:text-7xl font-light leading-none text-[#292C25] tracking-tight">
          {split('Not posed. Felt.')}
        </h2>

        <p className="split-fade mt-6 sm:mt-8 max-w-md text-base sm:text-lg leading-relaxed text-[#575A51] font-light">
          A gentle, documentary approach. We blend into your day like an old friend, so what we capture is honest — the way it really felt.
        </p>

        {/* Counters */}
        <div className="split-fade mt-10 sm:mt-12 grid grid-cols-3 gap-6 border-t border-[#E4E2D8] pt-8">
          {STATS.map(({ target, suffix, label }) => (
            <div key={label}>
              <div
                className="count-num font-display text-4xl sm:text-5xl font-light text-[#53664B] tabular-nums"
                data-to={target}
                data-suffix={suffix}
              >
                0{suffix}
              </div>
              <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#575A51] font-medium">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
