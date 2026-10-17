'use client';

import React from 'react';

export const Heart: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M12 21s-7.5-4.6-10-9.3C.3 8.2 2.3 4 6.3 4c2.2 0 3.7 1.3 4.6 2.6.3.4.9.4 1.2 0C13 5.3 14.5 4 16.7 4c4 0 6 4.2 4.3 7.7C19.5 16.4 12 21 12 21z" />
  </svg>
);

export const split = (text: string) =>
  text.split(' ').map((w, i) => (
    <span
      key={i}
      className="inline-block overflow-hidden pb-[0.12em] align-bottom"
    >
      <span className="word inline-block will-change-transform">{w}&nbsp;</span>
    </span>
  ));
