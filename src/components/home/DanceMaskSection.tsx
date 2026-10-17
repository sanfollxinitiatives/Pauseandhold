'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';
import { split } from '@/components/ui/MotionText';

export const DanceMaskSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !containerRef.current) return;

    const { gsap } = getGSAP();
    const ctx = gsap.context(() => {
      // 1. Expanding clipPath on scroll
      gsap.fromTo(
        '.dance-img-box',
        { clipPath: 'inset(18% 22% 18% 22% round 300px)' },
        {
          clipPath: 'inset(0% 0% 0% 0% round 0px)',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=100%',
            pin: true,
            scrub: true,
          },
        }
      );

      // 2. Center word entrance while pinned
      gsap.from('.dance-text .word', {
        yPercent: 110,
        stagger: 0.05,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=60%',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="dance relative h-screen overflow-hidden bg-[#292C25] text-[#F8F6EF]"
      aria-label="First Dance"
    >
      {/* Background Expanding Masked Image */}
      <div
        ref={imageRef}
        className="dance-img-box absolute inset-0 h-full w-full will-change-transform"
      >
        <Image
          src="/images/dance.jpg"
          alt="Couple's first dance by warm candlelight"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle dark tint */}
        <div className="absolute inset-0 bg-[#292C25]/45" />
      </div>

      {/* Floating Center Headline */}
      <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-[#F8F6EF] z-10 pointer-events-none">
        <h2 className="dance-text font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight">
          {split('And for one song,')}
          <br />
          <em className="text-[#819568] not-italic font-normal">
            {split('the world disappeared.')}
          </em>
        </h2>
      </div>
    </section>
  );
};
