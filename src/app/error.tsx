'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error for debugging
    console.error('Application Error caught by boundary:', error);

    // Auto-recover from stale chunks/assets after redeployment
    if (
      error.message?.includes('Loading chunk') ||
      error.message?.includes('Failed to fetch') ||
      error.message?.includes('ChunkLoadError')
    ) {
      const hasReloaded = sessionStorage.getItem('p_h_chunk_reload');
      if (!hasReloaded) {
        sessionStorage.setItem('p_h_chunk_reload', '1');
        window.location.reload();
      }
    }
  }, [error]);

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-6 py-24 text-center bg-[#F8F6EF] text-[#292C25]">
      <div className="h-16 w-16 mb-8 rounded-full bg-[#53664B]/10 flex items-center justify-center text-[#53664B]">
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 text-[#53664B]"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 21s-7.5-4.6-10-9.3C.3 8.2 2.3 4 6.3 4c2.2 0 3.7 1.3 4.6 2.6.3.4.9.4 1.2 0C13 5.3 14.5 4 16.7 4c4 0 6 4.2 4.3 7.7C19.5 16.4 12 21 12 21z" />
        </svg>
      </div>

      <p className="text-xs uppercase tracking-[0.35em] text-[#53664B] font-semibold mb-3">
        Pause &amp; Hold
      </p>

      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#292C25] tracking-tight max-w-xl">
        Every moment has <br />
        <em className="text-[#53664B] not-italic font-normal">its quiet pause.</em>
      </h1>

      <p className="mt-6 text-sm sm:text-base text-[#575A51] max-w-md font-light leading-relaxed">
        Something unexpected happened while loading this page. Let’s bring you back gently.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => {
            sessionStorage.removeItem('p_h_chunk_reload');
            reset();
          }}
          className="inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 text-xs sm:text-sm px-7 py-3.5 tracking-widest uppercase bg-[#53664B] text-[#F8F6EF] hover:bg-[#3F4F39] active:scale-[0.99] shadow-sm hover:shadow-md cursor-pointer"
        >
          Try Again
        </button>

        <Link
          href="/"
          className="inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 text-xs sm:text-sm px-7 py-3.5 tracking-widest uppercase border border-[#292C25]/20 text-[#292C25] hover:bg-[#EEEDE5] active:scale-[0.99]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
