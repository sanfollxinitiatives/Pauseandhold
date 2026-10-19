import React from 'react';
import { Button } from '@/components/ui/Button';

interface ContactCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  title = "Let's make something unforgettable.",
  description = 'Our dates for the upcoming wedding season are intentionally limited to give each couple our undivided attention and artistry. Tell us about your vision.',
  buttonText = "Plan Your Wedding",
}) => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto" aria-label="Enquiry Invitation">
      <div className="relative rounded-3xl sm:rounded-[3rem] bg-[#53664B] text-[#F8F6EF] p-8 sm:p-14 lg:p-20 text-center overflow-hidden shadow-2xl">
        {/* Subtle radial glow */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-[#819568]/30 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#EEEDE5]/80">
            CONNECT WITH US
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#F8F6EF] leading-tight tracking-tight">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-[#EEEDE5]/90 font-light leading-relaxed max-w-xl mx-auto">
            {description}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact/"
              size="lg"
              withArrow
              className="bg-[#F8F6EF] text-[#292C25] hover:bg-[#EEEDE5] shadow-lg"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
