'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';
import { split } from './MotionText';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  italic: string;
  intro: string;
  image?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  italic,
  intro,
  image,
}) => {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !heroRef.current) return;

    const { gsap } = getGSAP();
    const ctx = gsap.context(() => {
      // 1. Text reveals
      gsap.from('.page-hero-title .word', {
        yPercent: 110,
        duration: 1.3,
        ease: 'expo.out',
        stagger: 0.06,
        delay: 0.1,
      });

      gsap.from('.page-hero-fade', {
        opacity: 0,
        y: 24,
        duration: 1,
        stagger: 0.12,
        delay: 0.45,
        ease: 'power3.out',
      });

      // 2. Parallax background
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="page-hero relative overflow-hidden bg-[#292C25] -mt-20 sm:-mt-24 px-6 pb-20 pt-40 text-[#F8F6EF] md:px-12 md:pb-28 md:pt-52"
      aria-label={title}
    >
      {/* Background Image with Parallax */}
      {image && (
        <div
          ref={bgRef}
          className="absolute inset-0 h-[120%] -top-[10%] w-full z-0 will-change-transform"
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-25 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#292C25]/60 via-transparent to-[#292C25]/90" />
          <div className="film-grain-layer" aria-hidden="true" />
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="page-hero-fade text-[11px] sm:text-xs uppercase tracking-[0.4em] text-[#819568] font-semibold">
          {eyebrow}
        </p>

        <h1 className="page-hero-title mt-6 font-display text-5xl sm:text-7xl md:text-[7.5rem] lg:text-[8.5rem] font-light leading-[0.94] tracking-tight text-[#F8F6EF]">
          {split(title)}
          <br />
          <em className="text-shimmer not-italic font-normal">
            {split(italic)}
          </em>
        </h1>

        <p className="page-hero-fade mt-8 sm:mt-10 max-w-xl text-base sm:text-lg leading-relaxed text-[#EEEDE5]/80 font-light">
          {intro}
        </p>
      </div>
    </section>
  );
};
