'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  showSubtitle = false,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href="/"
      aria-label="Pause & Hold — Return to homepage"
      className={`inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#53664B] rounded-lg ${className}`}
    >
      {!imageError ? (
        <div className="relative h-9 sm:h-11 w-32 sm:w-44 flex items-center">
          <Image
            src="/images/logo.webp"
            alt="Pause & Hold"
            width={180}
            height={50}
            priority
            onError={() => setImageError(true)}
            className={`w-auto h-full max-h-9 sm:max-h-11 object-contain ${
              variant === 'light' ? 'brightness-0 invert' : ''
            }`}
          />
        </div>
      ) : (
        /* Typographic fallback if logo asset is unavailable */
        <div className="flex flex-col">
          <span
            className={`text-lg sm:text-xl font-light tracking-[0.2em] uppercase ${
              variant === 'light' ? 'text-[#F8F6EF]' : 'text-[#292C25]'
            }`}
          >
            Pause <span className="font-normal text-[#53664B]">&</span> Hold
          </span>
          {showSubtitle && (
            <span
              className={`text-[9px] tracking-[0.3em] uppercase ${
                variant === 'light' ? 'text-[#EEEDE5]/70' : 'text-[#575A51]'
              }`}
            >
              Wedding Stories & Films
            </span>
          )}
        </div>
      )}
    </Link>
  );
};
