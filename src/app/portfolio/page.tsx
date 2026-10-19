'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';

interface PortfolioItem {
  id: string;
  img: string;
  t: string;
  p: string;
  c: 'Wedding' | 'Pre-Wedding' | 'Film';
  slug: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: '1', img: '/images/aisle.jpg', t: 'Diya & Arav', p: 'Ooty', c: 'Wedding', slug: 'golden-hour-at-the-olive-grove' },
  { id: '2', img: '/images/hero.jpg', t: 'Sara & Neel', p: 'Munnar', c: 'Pre-Wedding', slug: 'whispers-by-the-coast' },
  { id: '3', img: '/images/bride.jpg', t: 'Lakshmi & Joel', p: 'Kochi', c: 'Wedding', slug: 'serenade-in-the-old-courtyard' },
  { id: '4', img: '/images/dance.jpg', t: 'Isha & Dev', p: 'Udaipur', c: 'Film', slug: 'golden-hour-at-the-olive-grove' },
  { id: '5', img: '/images/hands.jpg', t: 'Riya & Sam', p: 'Goa', c: 'Wedding', slug: 'whispers-by-the-coast' },
  { id: '6', img: '/images/hero.jpg', t: 'Anu & Kiran', p: 'Coorg', c: 'Pre-Wedding', slug: 'serenade-in-the-old-courtyard' },
  { id: '7', img: '/images/dance.jpg', t: 'Tara & Vikram', p: 'Jaipur', c: 'Film', slug: 'golden-hour-at-the-olive-grove' },
  { id: '8', img: '/images/bride.jpg', t: 'Neha & Aditya', p: 'Alleppey', c: 'Wedding', slug: 'whispers-by-the-coast' },
];

const CATEGORIES = ['All', 'Wedding', 'Pre-Wedding', 'Film'] as const;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredItems = PORTFOLIO_ITEMS.filter(
    (item) => activeCategory === 'All' || item.c === activeCategory
  );

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="Portfolio"
        title="Love stories,"
        italic="kept forever."
        intro="A small selection of the couples who trusted us with their day. Every gallery is a different kind of love."
        image="/images/aisle.jpg"
      />

      {/* 2. Portfolio Gallery */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28 md:px-12">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-6 py-2.5 text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 focus:outline-none ${
                activeCategory === cat
                  ? 'border-[#53664B] bg-[#53664B] text-[#F8F6EF] shadow-md'
                  : 'border-[#E4E2D8] text-[#292C25] hover:border-[#53664B] hover:text-[#53664B] bg-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Multi-Column Masonry */}
        <div className="mt-12 sm:mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filteredItems.map((item, i) => (
            <Link
              key={`${activeCategory}-${item.id}`}
              href={`/stories/${item.slug}/`}
              className="group mb-6 block break-inside-avoid animate-in fade-in slide-in-from-bottom-6 duration-700 focus:outline-none"
              style={{ animationDelay: `${i * 70}ms`, animationFillMode: 'both' }}
            >
              <figure>
                <div
                  className={`relative overflow-hidden rounded-3xl bg-[#EEEDE5] shadow-md ${
                    i % 3 === 1 ? 'aspect-square' : 'aspect-[3/4]'
                  }`}
                >
                  <Image
                    src={item.img}
                    alt={item.t}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#292C25]/85 via-transparent to-transparent p-6 text-[#F8F6EF] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="translate-y-4 text-xs uppercase tracking-[0.2em] font-medium text-[#819568] transition-transform duration-500 group-hover:translate-y-0">
                      View story →
                    </span>
                  </div>
                </div>

                <figcaption className="mt-4 flex items-baseline justify-between px-1">
                  <span className="font-display text-2xl font-light text-[#292C25] group-hover:text-[#53664B] transition-colors">
                    {item.t}
                  </span>
                  <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#575A51] font-light">
                    {item.p} · {item.c}
                  </span>
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
