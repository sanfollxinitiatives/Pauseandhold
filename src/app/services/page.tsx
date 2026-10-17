'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';
import { PageHero } from '@/components/ui/PageHero';
import { Heart, split } from '@/components/ui/MotionText';

const SERVICES = [
  {
    num: '01',
    title: 'Wedding Day Photography',
    desc: 'Documentary coverage from the quiet morning to the last song. Two photographers, hand-edited gallery, and timeless film-like color grading.',
    image: '/images/bride.jpg',
  },
  {
    num: '02',
    title: 'Pre-Wedding Sessions',
    desc: 'A slow evening together in a place that means something to you both. Perfect for invitations, relaxing before the rush, and creating natural intimacy.',
    image: '/images/hero.jpg',
  },
  {
    num: '03',
    title: 'Cinematic Wedding Films',
    desc: 'Real sound, real vows, and heartfelt speeches. A 6–8 minute highlight film paired with a full-length documentary ceremony and toasts edit.',
    image: '/images/dance.jpg',
  },
];

const COLLECTIONS = [
  {
    name: 'Intimate',
    price: '₹1,20,000',
    features: [
      '6 hours documentary coverage',
      '1 senior lead photographer',
      '400+ hand-edited high-res images',
      'Private online client gallery',
      'Permanent cloud backup & download',
    ],
    hot: false,
  },
  {
    name: 'Classic',
    price: '₹2,40,000',
    features: [
      'Full day unhurried coverage',
      '2 lead photographers',
      '700+ hand-edited high-res images',
      'Complimentary pre-wedding session',
      'Handcrafted fine art heirloom album',
    ],
    hot: true,
  },
  {
    name: 'Forever',
    price: '₹4,50,000',
    features: [
      'Multi-day complete wedding coverage',
      'Full photo + cinematic film team',
      '4K cinematic highlight & feature edit',
      'Master heirloom album + parents’ albums',
      'Drone aerial cinematography included',
    ],
    hot: false,
  },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !containerRef.current) return;

    const { gsap } = getGSAP();
    const ctx = gsap.context(() => {
      // 1. Reveal service images with mask
      gsap.utils.toArray<HTMLElement>('.service-img-mask').forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.4,
            ease: 'expo.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          }
        );
      });

      // 2. Titles reveal
      gsap.utils.toArray<HTMLElement>('.service-text-title').forEach((el) => {
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

      // 3. Collection cards lift
      gsap.from('.plan-card', {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.plans-grid',
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
        eyebrow="Services"
        title="Made for"
        italic="the way you love."
        intro="Simple, honest collections — each one can be shaped around your day, your family and your traditions."
        image="/images/dance.jpg"
      />

      {/* 2. Alternating Service Details */}
      <section className="mx-auto max-w-7xl space-y-24 sm:space-y-36 px-6 py-24 sm:py-36 md:px-12">
        {SERVICES.map((s, i) => (
          <div
            key={s.title}
            className={`grid items-center gap-10 sm:gap-16 md:grid-cols-2 ${
              i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
            }`}
          >
            {/* Image Mask Reveal */}
            <div className="service-img-mask aspect-[4/3] overflow-hidden rounded-3xl bg-[#EEEDE5] shadow-xl relative will-change-transform">
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#53664B] font-semibold">
                {s.num}
              </span>
              <h2 className="service-text-title mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-light leading-none text-[#292C25] tracking-tight">
                {split(s.title)}
              </h2>
              <p className="mt-6 max-w-md text-base sm:text-lg leading-relaxed text-[#575A51] font-light">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Pricing Collections */}
      <section className="bg-[#292C25] py-28 sm:py-36 text-[#F8F6EF]">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <p className="text-center text-[11px] sm:text-xs uppercase tracking-[0.4em] text-[#819568] font-semibold mb-3">
            Investment
          </p>
          <h2 className="text-center font-display text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#F8F6EF]">
            {split('Collections')}
          </h2>

          <div className="plans-grid mt-14 sm:mt-20 grid gap-6 sm:gap-8 md:grid-cols-3">
            {COLLECTIONS.map((p) => (
              <div
                key={p.name}
                className={`plan-card relative rounded-3xl border p-8 sm:p-10 transition-transform duration-500 hover:-translate-y-3 flex flex-col justify-between ${
                  p.hot
                    ? 'border-[#819568] bg-[#53664B] text-[#F8F6EF] shadow-2xl scale-[1.02]'
                    : 'border-[#F8F6EF]/15 bg-[#292C25] text-[#F8F6EF]'
                }`}
              >
                {p.hot && (
                  <span className="absolute right-6 top-6 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#F8F6EF] bg-[#3F4F39] px-3 py-1 rounded-full border border-[#819568]/40">
                    <Heart className="h-3 w-3 animate-heartbeat text-[#819568]" /> Most loved
                  </span>
                )}

                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-light">
                    {p.name}
                  </h3>
                  <p className="mt-4 font-display text-4xl sm:text-5xl font-light tracking-tight">
                    {p.price}
                  </p>
                  <p className="text-xs text-[#EEEDE5]/60 mt-1 uppercase tracking-wider font-light">
                    starting from
                  </p>

                  <ul className="mt-8 space-y-3 text-xs sm:text-sm text-[#EEEDE5]/85 font-light">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span className="text-[#819568]">—</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <Link
                    href="/contact"
                    className={`magnetic inline-flex w-full items-center justify-center rounded-full py-3.5 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold transition-transform hover:scale-[1.03] shadow-lg ${
                      p.hot
                        ? 'bg-[#292C25] text-[#F8F6EF] hover:bg-[#1F211C]'
                        : 'bg-[#53664B] text-[#F8F6EF] hover:bg-[#3F4F39]'
                    }`}
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
