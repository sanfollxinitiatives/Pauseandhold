import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';
import { SAMPLE_STORIES } from '@/data/stories';
import { ContactCTA } from '@/components/home/ContactCTA';

export const metadata: Metadata = constructMetadata({
  title: 'Wedding Stories Portfolio — Editorial Visual Journals',
  description:
    'Browse our curated wedding and pre-wedding stories. Discover how Pause & Hold documents authentic love stories with artistic nuance and emotional honesty.',
  path: '/stories',
});

export default function StoriesPage() {
  return (
    <div className="py-8 sm:py-14 space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#53664B] uppercase">
            SELECTED STORIES
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#292C25] leading-tight">
            Journals of genuine devotion and shared laughter.
          </h1>
          <p className="text-sm sm:text-base text-[#575A51] font-light leading-relaxed">
            Each celebration is an unrepeatable narrative. Below is a curated selection of demo portfolio stories demonstrating our documentary pacing, natural color palette, and intimacy.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SAMPLE_STORIES.map((story) => (
            <article
              key={story.slug}
              className="group flex flex-col bg-[#F8F6EF] rounded-3xl overflow-hidden border border-[#E4E2D8] hover:border-[#53664B]/40 hover:shadow-xl transition-all duration-500"
            >
              {/* Cover Image */}
              <Link
                href={`/stories/${story.slug}/`}
                className="relative aspect-[4/5] w-full overflow-hidden bg-[#EEEDE5] block"
                aria-label={`View full story: ${story.title}`}
              >
                <Image
                  src={story.coverImage}
                  alt={story.coverAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-[#F8F6EF]/90 backdrop-blur-md text-[#53664B] border border-[#E4E2D8]">
                    Demo Portfolio
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-medium tracking-widest uppercase bg-[#292C25]/70 backdrop-blur-md text-[#F8F6EF]">
                    {story.category}
                  </span>
                </div>
              </Link>

              {/* Story Details */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#575A51] mb-2 font-light">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#53664B]" />
                      {story.location}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#53664B]" />
                      {story.date}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-light text-[#292C25] group-hover:text-[#53664B] transition-colors">
                    <Link href={`/stories/${story.slug}/`}>{story.title}</Link>
                  </h2>

                  <p className="mt-3 text-xs sm:text-sm text-[#575A51] font-light leading-relaxed">
                    {story.summary}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#E4E2D8] flex items-center justify-between">
                  <span className="text-xs text-[#575A51] italic font-light">
                    {story.couple}
                  </span>
                  <Link
                    href={`/stories/${story.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#53664B] uppercase group-hover:text-[#3F4F39]"
                  >
                    <span>Read Journal</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Note about real portfolios */}
      <section className="px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="rounded-2xl bg-[#EEEDE5]/50 border border-[#E4E2D8] p-6 text-center text-xs text-[#575A51] font-light">
          Notice: Portfolio stories featured here are curated demo entries illustrating our aesthetic and storytelling layout. Real couple names and locations will be updated as commissioned celebrations are added.
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </div>
  );
}
