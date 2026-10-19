'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';
import { split } from '@/components/ui/MotionText';

const MOSAIC_IMAGES = [
  '/images/bride.jpg',
  '/images/aisle.jpg',
  '/images/hands.jpg',
  '/images/dance.jpg',
  '/images/hero.jpg',
  '/images/bride.jpg',
  '/images/dance.jpg',
  '/images/aisle.jpg',
];

export const MosaicGallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const { gsap } = getGSAP();
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.from('.mosaic-heading .word', {
        yPercent: 110,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.mosaic-heading',
          start: 'top 85%',
        },
      });

      // Scatter-in mosaic images
      gsap.from('.mosaic-item', {
        scale: 0.75,
        opacity: 0,
        rotate: () => gsap.utils.random(-6, 6),
        stagger: 0.08,
        duration: 1.1,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: '.mosaic-grid',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-7xl px-6 pb-28 sm:pb-36 md:px-12"
      aria-label="Instagram Mosaic Gallery"
    >
      <div className="mb-10 sm:mb-14 flex items-end justify-between">
        <h2 className="mosaic-heading font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#292C25] tracking-tight">
          {split('@pauseandhold')}
        </h2>
        <Link
          href="/gallery/"
          className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-[#53664B] hover:text-[#3F4F39] transition-colors"
        >
          Portfolio →
        </Link>
      </div>

      <div className="mosaic-grid grid grid-cols-2 gap-4 md:grid-cols-4">
        {MOSAIC_IMAGES.map((src, i) => (
          <div
            key={i}
            className={`mosaic-item overflow-hidden rounded-2xl bg-[#EEEDE5] shadow-sm relative will-change-transform ${
              i % 3 === 0 ? 'row-span-2 aspect-[3/5]' : 'aspect-square'
            }`}
          >
            <Image
              src={src}
              alt="Pause & Hold wedding photograph fragment"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-108"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
