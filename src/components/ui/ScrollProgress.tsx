'use client';

import React, { useEffect, useRef } from 'react';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';

export const ScrollProgress: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !barRef.current || typeof window === 'undefined') return;

    try {
      const { gsap, ScrollTrigger } = getGSAP();
      const bar = barRef.current;

      const st = ScrollTrigger.create({
        start: 'top top',
        end: 'max',
        onUpdate: (self) => {
          try {
            gsap.set(bar, { scaleX: self.progress });
          } catch {
            // ignore
          }
        },
      });

      return () => {
        try {
          st.kill();
        } catch {
          // ignore
        }
      };
    } catch (err) {
      console.warn('ScrollProgress skipped:', err);
    }
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-[2.5px] pointer-events-none"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="w-full h-full bg-gradient-to-r from-[#53664B] via-[#819568] to-[#3F4F39] origin-left will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
};
