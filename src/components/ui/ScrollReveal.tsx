'use client';

import React, { useRef, useEffect } from 'react';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-in';
  duration?: number;
  delay?: number;
  stagger?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  duration = 0.9,
  delay = 0,
  stagger = 0.15,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !containerRef.current) return;

    const { gsap } = getGSAP();
    const container = containerRef.current;

    const ctx = gsap.context(() => {
      const items =
        container.children.length > 1
          ? Array.from(container.children)
          : [container];

      let fromVars: gsap.TweenVars = { opacity: 0 };

      switch (animation) {
        case 'fade-up':
          fromVars = { opacity: 0, y: 35 };
          break;
        case 'scale-up':
          fromVars = { opacity: 0, scale: 0.94 };
          break;
        case 'slide-in':
          fromVars = { opacity: 0, x: -30 };
          break;
        case 'fade-in':
        default:
          fromVars = { opacity: 0 };
          break;
      }

      gsap.fromTo(items, fromVars, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });
    }, container);

    return () => ctx.revert();
  }, [animation, duration, delay, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
