'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

export function getGSAP() {
  if (typeof window !== 'undefined' && !registered) {
    try {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    } catch (e) {
      console.warn('GSAP ScrollTrigger registration warning:', e);
    }
  }
  return { gsap, ScrollTrigger };
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
  } catch {
    return false;
  }
}
