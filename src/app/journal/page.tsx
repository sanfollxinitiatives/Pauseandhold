'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getGSAP, prefersReducedMotion } from '@/lib/gsap';
import { PageHero } from '@/components/ui/PageHero';

const POSTS = [
  {
    img: '/images/aisle.jpg',
    title: 'A misty forest wedding in Ooty',
    cat: 'Real wedding',
    date: 'Sep 2026',
    slug: 'golden-hour-at-the-olive-grove',
    desc: 'Fog rolled in just before the vows. Nobody minded — it made everything softer and more cinematic.',
  },
  {
    img: '/images/hands.jpg',
    title: 'Why we love unplugged ceremonies',
    cat: 'Planning',
    date: 'Aug 2026',
    slug: 'whispers-by-the-coast',
    desc: 'When phones go away, faces light up. Presence is the greatest gift you give yourselves.',
  },
  {
    img: '/images/bride.jpg',
    title: 'Getting ready: light, space and calm',
    cat: 'Tips',
    date: 'Jul 2026',
    slug: 'serenade-in-the-old-courtyard',
    desc: 'A quiet room and natural morning window light make for the most tender, unhurried portraits.',
  },
  {
    img: '/images/dance.jpg',
    title: 'The first dance nobody rehearsed',
    cat: 'Real wedding',
    date: 'Jun 2026',
    slug: 'golden-hour-at-the-olive-grove',
    desc: 'Unscripted footwork, laughter, and a room full of people cheering with tears in their eyes.',
  },
  {
    img: '/images/hero.jpg',
    title: 'Choosing the perfect golden hour',
    cat: 'Tips',
    date: 'May 2026',
    slug: 'whispers-by-the-coast',
    desc: 'The thirty minutes before sunset when the sun rests on the horizon are pure photographic gold.',
  },
];

export default function JournalPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !containerRef.current) return;

    const { gsap } = getGSAP();
    const ctx = gsap.context(() => {
      // 1. Featured image reveal
      gsap.fromTo(
        '.journal-feat-mask',
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.4,
          ease: 'expo.inOut',
          scrollTrigger: {
            trigger: '.journal-feat-mask',
            start: 'top 85%',
          },
        }
      );

      // 2. Stagger article grid
      gsap.from('.journal-card', {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.journal-grid',
          start: 'top 80%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const [featured, ...rest] = POSTS;

  return (
    <div ref={containerRef}>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="Journal"
        title="Notes from"
        italic="the in-between."
        intro="Stories from real weddings, gentle planning advice and the little things we've learned along the way."
        image="/images/hands.jpg"
      />

      {/* 2. Journal Content */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28 md:px-12">
        {/* Featured Article */}
        <article className="group grid items-center gap-10 md:grid-cols-[1.3fr_1fr] pb-16 sm:pb-24 border-b border-[#E4E2D8]">
          <Link
            href={`/stories/${featured.slug}`}
            className="journal-feat-mask aspect-[16/10] overflow-hidden rounded-3xl bg-[#EEEDE5] shadow-xl relative block will-change-transform"
          >
            <Image
              src={featured.img}
              alt={featured.title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-105"
            />
          </Link>

          <div>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#53664B] font-semibold">
              Featured · {featured.cat}
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-[#292C25] group-hover:text-[#53664B] transition-colors">
              <Link href={`/stories/${featured.slug}`}>{featured.title}</Link>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#575A51] font-light leading-relaxed">
              {featured.desc}
            </p>
            <Link
              href={`/stories/${featured.slug}`}
              className="mt-6 sm:mt-8 inline-block text-xs uppercase tracking-[0.2em] font-semibold text-[#53664B] transition group-hover:translate-x-2"
            >
              Read story →
            </Link>
          </div>
        </article>

        {/* 4-Card Article Grid */}
        <div className="journal-grid mt-16 sm:mt-24 grid gap-10 sm:gap-12 sm:grid-cols-2">
          {rest.map((p) => (
            <article key={p.title} className="journal-card group cursor-pointer">
              <Link href={`/stories/${p.slug}`} className="block">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-[#EEEDE5] shadow-md relative">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="h-full w-full object-cover transition duration-[1.2s] group-hover:scale-108"
                  />
                </div>
                <div className="mt-5 flex justify-between text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#575A51] font-light">
                  <span className="font-semibold text-[#53664B]">{p.cat}</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-light text-[#292C25] transition-colors group-hover:text-[#53664B] leading-snug">
                  {p.title}
                </h3>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
