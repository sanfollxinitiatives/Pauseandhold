'use client';

import React, { useState, useEffect, useRef } from 'react';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';
import { Heart } from './MotionText';

interface HeartbeatPreloaderProps {
  onComplete?: () => void;
}

const PRELOAD_WORDS = ['pause…', 'and', 'hold', 'this', 'moment'];

export const HeartbeatPreloader: React.FC<HeartbeatPreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If reduced motion, skip preloader immediately
    if (prefersReducedMotion()) {
      if (containerRef.current) {
        containerRef.current.style.display = 'none';
      }
      onComplete?.();
      return;
    }

    let tl: gsap.core.Timeline | null = null;
    let safetyTimeout: NodeJS.Timeout | null = null;

    try {
      const { gsap } = getGSAP();
      const counterObj = { v: 0 };

      // Initial state setup for blur-to-visible reveal
      gsap.set('.pre-word', { filter: 'blur(18px)', opacity: 0, y: 14, scale: 0.94 });
      gsap.set('.pre-eyebrow', { filter: 'blur(12px)', opacity: 0, y: -6 });
      gsap.set('.pre-heart-wrap', { filter: 'blur(14px)', opacity: 0, scale: 0.75 });
      gsap.set('.pre-counter', { filter: 'blur(10px)', opacity: 0, y: 12 });
      gsap.set('.pre-line-wrap', { opacity: 0, scaleX: 0.8 });

      tl = gsap.timeline({
        onComplete: () => {
          if (containerRef.current) {
            containerRef.current.style.display = 'none';
          }
          onComplete?.();
        },
      });

    // 1. Optical Blur-to-Visible Reveal Entrance
    tl.to(
      '.pre-heart-wrap',
      {
        filter: 'blur(0px)',
        opacity: 1,
        scale: 1,
        duration: 1.0,
        ease: 'power3.out',
      },
      0.05
    )
      .to(
        '.pre-eyebrow',
        {
          filter: 'blur(0px)',
          opacity: 0.75,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
        },
        0.15
      )
      // Words blur in sequentially like an optical camera focus pull
      .to(
        '.pre-word',
        {
          filter: 'blur(0px)',
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          stagger: 0.1,
          ease: 'power3.out',
        },
        0.2
      )
      .to(
        ['.pre-line-wrap', '.pre-counter'],
        {
          filter: 'blur(0px)',
          opacity: 1,
          y: 0,
          scaleX: 1,
          duration: 0.8,
          ease: 'power2.out',
        },
        0.35
      );

    // 2. Numeric Counter & Hairline Progress Fill
    tl.to(
      counterObj,
      {
        v: 100,
        duration: 2.2,
        ease: 'power2.inOut',
        onUpdate: () => {
          setCount(Math.round(counterObj.v));
        },
      },
      0
    ).to(
      '.pre-line',
      {
        scaleX: 1,
        duration: 2.2,
        ease: 'power2.inOut',
      },
      0
    );

    // 3. Cinematic Blur Out / Defocus Exit
    tl.to(
      '.pre-inner',
      {
        filter: 'blur(16px)',
        y: -32,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.in',
      },
      '+=0.1'
    )
      // Stagger 4 vertical panels upward
      .to(
        '.pre-panel',
        {
          yPercent: -100,
          duration: 0.9,
          ease: 'expo.inOut',
          stagger: 0.07,
        },
        '-=0.2'
      );

      // Fallback safety timeout so it never blocks the page
      safetyTimeout = setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.display = 'none';
        }
        onComplete?.();
      }, 4200);
    } catch (err) {
      console.warn('Preloader animation error, falling back:', err);
      if (containerRef.current) {
        containerRef.current.style.display = 'none';
      }
      onComplete?.();
    }

    return () => {
      if (safetyTimeout) clearTimeout(safetyTimeout);
      if (tl) tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="preloader fixed inset-0 z-50 flex pointer-events-auto select-none"
      aria-label="Loading Pause & Hold showcase"
    >
      {/* 4 Staggered Vertical Panels */}
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="pre-panel h-full flex-1 bg-[#292C25] will-change-transform" />
      ))}

      {/* Atmospheric Radial Bokeh Glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="h-64 w-64 rounded-full bg-[#819568]/15 blur-3xl" />
      </div>

      {/* Centered Preload Content */}
      <div className="pre-inner absolute inset-0 flex flex-col items-center justify-center text-[#F8F6EF] px-4 pointer-events-none will-change-[filter,transform,opacity]">
        {/* Pulsing Heart Emblem */}
        <div className="pre-heart-wrap will-change-[filter,transform,opacity]">
          <Heart className="h-10 w-10 animate-heartbeat text-[#819568]" />
        </div>

        {/* Subtle Eyebrow */}
        <span className="pre-eyebrow mt-5 text-[10px] sm:text-[11px] uppercase tracking-[0.45em] text-[#EEEDE5]/70 font-medium will-change-[filter,transform,opacity]">
          Pause & Hold · Est. 2014
        </span>

        {/* Tagline with Dreamy Optical Blur-to-Visible Word Reveal */}
        <p className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl italic tracking-tight font-light text-[#F8F6EF] text-center flex flex-wrap justify-center items-center">
          {PRELOAD_WORDS.map((word, idx) => (
            <span
              key={idx}
              className="pre-word inline-block mx-1.5 will-change-[filter,transform,opacity]"
            >
              {word}
            </span>
          ))}
        </p>

        {/* Expanding Hairline Progress */}
        <div className="pre-line-wrap mt-8 h-px w-56 sm:w-64 bg-[#F8F6EF]/20 overflow-hidden will-change-[transform,opacity]">
          <div className="pre-line h-full w-full origin-left scale-x-0 bg-[#819568]" />
        </div>

        {/* Numeric Percentage Counter */}
        <span className="pre-counter mt-4 font-display text-4xl sm:text-5xl tabular-nums font-light text-[#EEEDE5] will-change-[filter,transform,opacity]">
          {count}%
        </span>
      </div>
    </div>
  );
};
