'use client';

import React from 'react';
import { Heart } from '@/components/ui/MotionText';

const WORDS = ['laughter', 'tears', 'vows', 'first dance', 'forever', 'home'];

export const MarqueeRibbon: React.FC = () => {
  return (
    <div
      className="overflow-hidden border-y border-[#E4E2D8] bg-[#F8F6EF] py-5 sm:py-7 select-none"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee gap-8 sm:gap-14 font-display text-3xl sm:text-5xl md:text-6xl italic text-[#575A51]/60">
        {Array.from({ length: 4 }).flatMap((_, k) =>
          WORDS.map((word) => (
            <span key={`${k}-${word}`} className="flex items-center gap-8 sm:gap-14">
              <span>{word}</span>
              <Heart className="h-5 w-5 sm:h-7 sm:w-7 text-[#53664B]" />
            </span>
          ))
        )}
      </div>
    </div>
  );
};
