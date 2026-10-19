'use client';

import React, { useState, useEffect, useRef } from 'react';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix = '',
  className = 'font-display text-4xl sm:text-5xl font-light text-[#53664B] tabular-nums',
}) => {
  const [val, setVal] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || typeof window === 'undefined') {
      const timer = setTimeout(() => {
        setVal(target);
      }, 0);
      return () => clearTimeout(timer);
    }

    try {
      const { gsap } = getGSAP();
      const counter = { val: 0 };

      const tween = gsap.to(counter, {
        val: target,
        duration: 2.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
        },
        onUpdate: () => {
          setVal(Math.round(counter.val));
        },
      });

      return () => {
        try {
          tween.kill();
        } catch {
          // ignore cleanup errors
        }
      };
    } catch {
      const timer = setTimeout(() => {
        setVal(target);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [target]);

  return (
    <div ref={containerRef} className={className}>
      {val}
      {suffix}
    </div>
  );
};
