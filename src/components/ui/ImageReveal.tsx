'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';

interface ImageRevealProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
  parallax?: boolean;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  fill = false,
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  className = '',
  containerClassName = '',
  aspectRatio = 'aspect-[4/5]',
  parallax = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !containerRef.current) return;

    const { gsap } = getGSAP();
    const container = containerRef.current;
    const imgWrapper = imageRef.current;

    const ctx = gsap.context(() => {
      // Subtle scroll reveal
      gsap.fromTo(
        imgWrapper,
        { scale: 1.06, opacity: 0.85 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Subtle parallax effect on desktop only
      if (parallax && window.innerWidth > 1024) {
        gsap.to(imgWrapper, {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, [parallax]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl border border-[#EEEDE5] bg-[#EEEDE5]/40 shadow-sm ${aspectRatio} ${containerClassName}`}
    >
      <div ref={imageRef} className="relative w-full h-full will-change-transform">
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={`object-cover transition-transform duration-700 ease-out hover:scale-105 ${className}`}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width || 800}
            height={height || 1000}
            priority={priority}
            sizes={sizes}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105 ${className}`}
          />
        )}
      </div>
    </div>
  );
};
