'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';
import { PageHero } from '@/components/ui/PageHero';
import { Heart, split } from '@/components/ui/MotionText';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const VALUES = [
  ['Presence', 'We arrive early, stay late, and never rush a feeling.'],
  ['Honesty', 'No forced poses. Only what truly happened, beautifully.'],
  ['Craft', 'Every frame is hand-edited with film-like warmth.'],
  ['Kindness', 'We treat your family like ours. Grandmothers love us.'],
];

const TEAM = [
  { name: 'Arjun Menon', role: 'Lead photographer', image: '/images/aisle.jpg' },
  { name: 'Meera Nair', role: 'Filmmaker', image: '/images/bride.jpg' },
  { name: 'Kabir Das', role: 'Second shooter & editor', image: '/images/hands.jpg' },
];

const STATS = [
  { target: 420, suffix: '+', label: 'Weddings' },
  { target: 18, suffix: '', label: 'Countries' },
  { target: 9, suffix: '', label: 'Awards' },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !containerRef.current) return;

    const { gsap } = getGSAP();
    const ctx = gsap.context(() => {
      // 1. Origin image mask
      gsap.fromTo(
        '.about-img-mask',
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.4,
          ease: 'expo.inOut',
          scrollTrigger: {
            trigger: '.about-img-mask',
            start: 'top 85%',
          },
        }
      );

      // 2. Headings reveal
      gsap.utils.toArray<HTMLElement>('.about-heading').forEach((el) => {
        gsap.from(el.querySelectorAll('.word'), {
          yPercent: 110,
          duration: 1.2,
          ease: 'expo.out',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        });
      });

      // 3. Team card reveals
      gsap.from('.team-card', {
        y: 60,
        opacity: 0,
        stagger: 0.16,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.team-grid',
          start: 'top 80%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="About us"
        title="Quiet hearts,"
        italic="steady hands."
        intro="We're a small team of photographers and filmmakers from Kerala who believe the best wedding photos are the ones you feel before you see."
        image="/images/bride.jpg"
      />

      {/* 2. Origin Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 sm:gap-16 px-6 py-24 sm:py-36 md:grid-cols-2 md:px-12">
        <div className="about-img-mask aspect-[4/5] overflow-hidden rounded-3xl bg-[#EEEDE5] shadow-xl relative will-change-transform">
          <Image
            src="/images/hands.jpg"
            alt="Wedding rings close up"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.4em] text-[#53664B] font-semibold">
            Since 2014
          </p>
          <h2 className="about-heading mt-4 sm:mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-light leading-tight text-[#292C25] tracking-tight">
            {split('It began with one borrowed camera.')}
          </h2>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-[#575A51] font-light">
            Our founder photographed his sister&apos;s wedding on a borrowed film camera. When she cried at the prints years later, we understood what we were really making — not pictures, but a way home.
          </p>

          <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-6 border-t border-[#E4E2D8] pt-8">
            {STATS.map(({ target, suffix, label }) => (
              <div key={label}>
                <AnimatedCounter target={target} suffix={suffix} />
                <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#575A51] font-medium">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="bg-[#292C25] py-28 sm:py-36 text-[#F8F6EF]">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <p className="text-center text-[11px] sm:text-xs uppercase tracking-[0.4em] text-[#819568] font-semibold mb-3">
            Philosophy
          </p>
          <h2 className="about-heading text-center font-display text-4xl sm:text-6xl md:text-7xl font-light text-[#F8F6EF] tracking-tight">
            {split('What we')}{' '}
            <em className="text-[#819568] not-italic font-normal">
              {split('believe')}
            </em>
          </h2>

          <div className="mt-14 sm:mt-20 grid gap-px overflow-hidden rounded-3xl bg-[#F8F6EF]/10 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(([title, desc], i) => (
              <div
                key={title}
                className="group bg-[#292C25] p-8 sm:p-10 transition-colors duration-500 hover:bg-[#53664B] hover:text-[#F8F6EF]"
              >
                <span className="text-xs uppercase tracking-widest text-[#819568] font-semibold group-hover:text-[#EEEDE5]">
                  0{i + 1}
                </span>
                <h3 className="mt-10 font-display text-2xl sm:text-3xl font-light">
                  {title}
                </h3>
                <p className="mt-4 text-xs sm:text-sm text-[#EEEDE5]/75 group-hover:text-[#F8F6EF] font-light leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Creative Team */}
      <section className="mx-auto max-w-7xl px-6 py-28 sm:py-36 md:px-12">
        <h2 className="about-heading font-display text-4xl sm:text-6xl md:text-7xl font-light text-[#292C25] tracking-tight">
          {split('The people')}
        </h2>

        <div className="team-grid mt-14 sm:mt-20 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {TEAM.map((m, i) => (
            <div
              key={m.name}
              className={`team-card ${i === 1 ? 'md:mt-20' : ''}`}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-[#EEEDE5] shadow-lg relative">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
              <h3 className="mt-6 font-display text-2xl sm:text-3xl font-light text-[#292C25]">
                {m.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#575A51] font-medium">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Closing Promise */}
      <section className="mx-auto max-w-4xl px-6 pb-28 sm:pb-36 text-center">
        <Heart className="mx-auto h-8 w-8 animate-heartbeat text-[#53664B]" />
        <p className="about-heading mt-8 font-display text-2xl sm:text-4xl md:text-5xl font-light italic leading-snug text-[#292C25]">
          {split('“We don’t take photos. We keep promises.”')}
        </p>
      </section>
    </div>
  );
}
