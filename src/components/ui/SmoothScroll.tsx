'use client';

import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (prefersReducedMotion() || typeof window === 'undefined') return;

    try {
      // Initialize Lenis smooth inertial scrolling
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
      });
      lenisRef.current = lenis;

      const { gsap, ScrollTrigger } = getGSAP();

      // Synchronize Lenis scroll events with GSAP ScrollTrigger safely
      const handleScroll = () => {
        try {
          ScrollTrigger?.update?.();
        } catch {
          // Ignore sync errors gracefully
        }
      };
      lenis.on('scroll', handleScroll);

      const updateTicker = (time: number) => {
        try {
          lenis.raf(time * 1000);
        } catch {
          // Ignore animation frame errors
        }
      };

      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);

      return () => {
        try {
          gsap.ticker.remove(updateTicker);
          lenis.destroy();
        } catch {
          // Ignore cleanup errors
        }
      };
    } catch (err) {
      console.warn('SmoothScroll fallback to native scroll:', err);
    }
  }, []);

  return <>{children}</>;
};
