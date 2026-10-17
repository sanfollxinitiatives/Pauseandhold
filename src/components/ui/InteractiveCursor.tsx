'use client';

import React, { useEffect, useRef } from 'react';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';

export const InteractiveCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || typeof window === 'undefined') return;
    if (window.innerWidth < 1024) return; // Desktop only

    const { gsap } = getGSAP();
    const cursor = cursorRef.current;
    if (!cursor) return;

    const cx = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3' });
    const cy = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3' });

    const handleMouseMove = (e: MouseEvent) => {
      cx(e.clientX);
      cy(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Expand cursor over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, img, input, textarea');
    const handleMouseEnter = () => gsap.to(cursor, { scale: 3.2, duration: 0.35, ease: 'power2.out' });
    const handleMouseLeave = () => gsap.to(cursor, { scale: 1, duration: 0.35, ease: 'power2.out' });

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Magnetic buttons
    const magneticElements = document.querySelectorAll<HTMLElement>('.magnetic');
    const cleanupMagnetic: Array<() => void> = [];

    magneticElements.forEach((el) => {
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        gsap.to(el, {
          x: (e.clientX - r.left - r.width / 2) * 0.35,
          y: (e.clientY - r.top - r.height / 2) * 0.35,
          duration: 0.4,
          ease: 'power2.out',
        });
      };

      const onLeave = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'elastic.out(1, 0.4)',
        });
      };

      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);

      cleanupMagnetic.push(() => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      });
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      cleanupMagnetic.forEach((fn) => fn());
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor pointer-events-none fixed left-0 top-0 z-[55] -ml-2 -mt-2 hidden h-4 w-4 rounded-full bg-[#53664B] mix-blend-difference lg:block will-change-transform"
      aria-hidden="true"
    />
  );
};
