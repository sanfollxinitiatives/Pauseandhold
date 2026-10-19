'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';
import { split } from '@/components/ui/MotionText';

const SERVICES = [
  {
    num: '01',
    title: 'Wedding Day',
    desc: 'Full-day documentary coverage, from getting ready to the last dance.',
    image: '/images/bride.jpg',
  },
  {
    num: '02',
    title: 'Pre-Wedding',
    desc: 'A slow, unhurried session somewhere that feels like you two.',
    image: '/images/hero.jpg',
  },
  {
    num: '03',
    title: 'Wedding Films',
    desc: 'Cinematic films with real sound — vows, laughter, speeches.',
    image: '/images/dance.jpg',
  },
];

export const ServicesShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const { gsap } = getGSAP();
    const ctx = gsap.context(() => {
      // 1. Heading reveal
      gsap.from('.svc-heading .word', {
        yPercent: 110,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.svc-heading',
          start: 'top 85%',
        },
      });

      // 2. Cards entrance
      gsap.from('.svc-card', {
        y: 80,
        opacity: 0,
        stagger: 0.14,
        duration: 1.1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="svc mx-auto max-w-7xl px-6 pb-28 sm:pb-36 md:px-12"
      aria-label="Services Showcase"
    >
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="svc-heading font-display text-5xl sm:text-6xl md:text-7xl font-light leading-none text-[#292C25] tracking-tight">
          {split('What we')}{' '}
          <em className="text-[#53664B] not-italic font-normal">
            {split('offer')}
          </em>
        </h2>
        <Link
          href="/services/"
          className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-[#53664B] hover:text-[#3F4F39] underline underline-offset-8 transition-colors"
        >
          All services →
        </Link>
      </div>

      <div className="mt-12 sm:mt-16 grid gap-6 md:grid-cols-3">
        {SERVICES.map((s) => (
          <Link
            key={s.num}
            href="/services/"
            className="svc-card group relative block aspect-[3/4] overflow-hidden rounded-3xl bg-[#292C25] text-[#F8F6EF] shadow-lg focus:outline-none"
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-1000 ease-out group-hover:scale-110 group-hover:opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#292C25]/90 via-[#292C25]/30 to-transparent" />
            <div className="relative flex h-full flex-col justify-between p-8">
              <span className="text-sm font-semibold tracking-widest text-[#819568]">
                {s.num}
              </span>
              <div>
                <h3 className="font-display text-3xl sm:text-4xl font-light text-[#F8F6EF]">
                  {s.title}
                </h3>
                <p className="mt-3 max-h-0 overflow-hidden text-xs sm:text-sm text-[#EEEDE5]/85 leading-relaxed opacity-0 transition-all duration-700 ease-out group-hover:max-h-28 group-hover:opacity-100">
                  {s.desc}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
