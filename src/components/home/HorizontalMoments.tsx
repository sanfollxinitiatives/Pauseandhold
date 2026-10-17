'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';

const MOMENTS = [
  {
    image: '/images/aisle.jpg',
    title: 'The first look',
    desc: 'Forest ceremony, Ooty',
  },
  {
    image: '/images/bride.jpg',
    title: 'Happy tears',
    desc: 'Morning light, Kochi',
  },
  {
    image: '/images/hands.jpg',
    title: 'A promise',
    desc: 'Garden vows, Goa',
  },
  {
    image: '/images/hero.jpg',
    title: 'Golden hour',
    desc: 'Hills of Munnar',
  },
];

export const HorizontalMoments: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !containerRef.current || !trackRef.current) return;
    if (window.innerWidth < 768) return; // Keep vertical on small screens for better accessibility

    const { gsap, ScrollTrigger } = getGSAP();
    const track = trackRef.current;
    const container = containerRef.current;

    const ctx = gsap.context(() => {
      // Horizontal pin & scrub
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => '+=' + track.scrollWidth,
          invalidateOnRefresh: true,
        },
      });

      // Dynamic velocity skew
      const skew = gsap.quickTo('.h-track figure', 'skewX', {
        duration: 0.5,
        ease: 'power3',
      });

      ScrollTrigger.create({
        onUpdate: (self) => {
          skew(gsap.utils.clamp(-7, 7, self.getVelocity() / -260));
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-wrap overflow-hidden bg-[#292C25] text-[#F8F6EF]"
      aria-label="Moments We Held"
    >
      <div
        ref={trackRef}
        className="h-track flex flex-col md:flex-row md:h-screen w-full md:w-max md:items-center gap-10 md:gap-14 px-6 py-20 md:py-0 md:px-14"
      >
        {/* Intro Card */}
        <div className="w-full md:w-[35vw] shrink-0 mb-8 md:mb-0">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.4em] text-[#819568] font-semibold">
            Chapters
          </p>
          <h2 className="mt-4 sm:mt-6 font-display text-5xl sm:text-6xl md:text-8xl font-light leading-none text-[#F8F6EF]">
            Moments <br />
            <em className="text-[#819568] not-italic font-normal">we held</em>
          </h2>
        </div>

        {/* Photography Moments Cards */}
        {MOMENTS.map((m, i) => (
          <figure
            key={m.title}
            className={`group w-full md:w-[28vw] shrink-0 will-change-transform ${
              i % 2 === 1 ? 'md:mt-32' : 'md:-mt-24'
            }`}
          >
            <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-[#EEEDE5]/20 shadow-xl relative">
              <Image
                src={m.image}
                alt={m.title}
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292C25]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <figcaption className="mt-4 flex items-baseline justify-between px-1">
              <span className="font-display text-2xl sm:text-3xl italic font-light text-[#F8F6EF]">
                {m.title}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#EEEDE5]/65">
                {m.desc}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
