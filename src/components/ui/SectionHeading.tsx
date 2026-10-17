import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  as = 'h2',
  className = '',
}) => {
  const HeadingTag = as;
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {eyebrow && (
        <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#53664B] uppercase mb-3 sm:mb-4">
          {eyebrow}
        </span>
      )}
      <HeadingTag
        className={`text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#292C25] leading-[1.2] ${
          eyebrow ? '' : 'mt-2'
        }`}
      >
        {title}
      </HeadingTag>
      {description && (
        <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#575A51] font-normal leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};
