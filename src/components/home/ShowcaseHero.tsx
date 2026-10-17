'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';
import { Heart, split } from '@/components/ui/MotionText';

export const ShowcaseHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !heroRef.current) return;

    const { gsap } = getGSAP();
    const ctx = gsap.context(() => {
      // 1. Entrance timeline
      const tl = gsap.timeline({ delay: 0.2 });

      if (heroImgRef.current) {
        tl.fromTo(
          heroImgRef.current,
          { scale: 1.25 },
          { scale: 1, duration: 2.2, ease: 'expo.out' },
          0
        );
      }

      tl.fromTo(
        '.hero-title .word',
        { yPercent: 110 },
        { yPercent: 0, duration: 1.3, ease: 'expo.out', stagger: 0.06 },
        0.2
      );

      tl.fromTo(
        '.hero-fade',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' },
        0.6
      );

      // 2. Scroll-driven parallax scrub
      if (heroImgRef.current) {
        gsap.to(heroImgRef.current, {
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
      className="hero relative min-h-screen -mt-20 sm:-mt-24 pt-28 sm:pt-36 overflow-hidden bg-[#292C25] text-[#F8F6EF] flex flex-col justify-end"
      aria-label="Hero Showcase"
    >
      {/* Background Image Container with Parallax */}
      <div
        ref={heroImgRef}
        className="absolute inset-0 z-0 h-[118%] -top-[9%] will-change-transform"
      >
        <Image
          src="/images/hero.jpg"
          alt="Couple embracing in a misty meadow at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#292C25]/45 via-transparent to-[#292C25]/85" />
        <div className="film-grain-layer" aria-hidden="true" />
      </div>

      {/* Hero Bottom Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 sm:pb-20 md:px-12 flex flex-col justify-end">
        <p className="hero-fade mb-4 sm:mb-6 text-[11px] sm:text-xs uppercase tracking-[0.4em] text-[#EEEDE5]/80 font-medium">
          Wedding Photography · Est. 2014
        </p>

        <h1 className="hero-title font-display text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-light leading-[0.92] tracking-tight text-[#F8F6EF]">
          {split('Some moments')}
          <br />
          <em className="text-shimmer not-italic font-normal">
            {split('deserve forever.')}
          </em>
        </h1>

        {/* Circular Spinning Badge */}
        <div className="hero-fade absolute bottom-16 right-6 hidden h-32 w-32 md:h-36 md:w-36 md:right-12 md:block">
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full animate-spin-slow fill-current text-[#EEEDE5]/90"
          >
            <defs>
              <path
                id="circlePath"
                d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
              />
            </defs>
            <text className="text-[9.5px] uppercase tracking-[0.32em] font-medium">
              <textPath href="#circlePath">pause · and · hold · forever · </textPath>
            </text>
          </svg>
          <Heart className="absolute inset-0 m-auto h-8 w-8 animate-heartbeat text-[#819568]" />
        </div>

        {/* Bottom Left Scroll Indicator */}
        <div className="hero-fade mt-10 sm:mt-12 flex items-center gap-4 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#EEEDE5]/70">
          <span className="h-10 w-px animate-pulse bg-[#F8F6EF]/60" />
          <span>Scroll slowly</span>
        </div>
      </div>
    </section>
  );
};
