import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import { GALLERY_ITEMS } from '@/data/gallery';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { ContactCTA } from '@/components/home/ContactCTA';

export const metadata: Metadata = constructMetadata({
  title: 'Photography Gallery — Visual Moments & Heirloom Details',
  description:
    'Explore our curated wedding photography gallery featuring candid ceremonies, tender portraits, ambient details, and unrepeatable emotional moments.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <div className="py-8 sm:py-14 space-y-16 sm:space-y-24">
      {/* Gallery Header */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#53664B] uppercase">
            CURATED ARCHIVE
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#292C25] leading-tight">
            Fragments of time, gathered with intention.
          </h1>
          <p className="text-sm sm:text-base text-[#575A51] font-light leading-relaxed">
            Click any photograph to view in full scale. Filter by ceremonies, quiet portraiture, spontaneous celebrations, or organic details.
          </p>
        </div>
      </section>

      {/* Main Interactive Gallery Grid */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto">
        <GalleryGrid items={GALLERY_ITEMS} />
      </section>

      {/* Bottom CTA */}
      <ContactCTA />
    </div>
  );
}
