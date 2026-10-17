import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Building2 } from 'lucide-react';
import { SAMPLE_STORIES, getStoryBySlug } from '@/data/stories';
import { constructMetadata } from '@/lib/seo';
import { getStoryJsonLd, getBreadcrumbJsonLd } from '@/lib/structured-data';
import { ContactCTA } from '@/components/home/ContactCTA';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SAMPLE_STORIES.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    return constructMetadata({
      title: 'Story Not Found',
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${story.title} — Wedding Story Journal`,
    description: story.summary,
    path: `/stories/${story.slug}`,
    image: story.coverImage,
  });
}

export default async function StoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  // Find previous and next stories for navigation
  const currentIndex = SAMPLE_STORIES.findIndex((s) => s.slug === slug);
  const prevStory = currentIndex > 0 ? SAMPLE_STORIES[currentIndex - 1] : null;
  const nextStory =
    currentIndex < SAMPLE_STORIES.length - 1
      ? SAMPLE_STORIES[currentIndex + 1]
      : null;

  const storyJsonLd = getStoryJsonLd({
    title: story.title,
    description: story.summary,
    coverImage: story.coverImage,
    url: `/stories/${story.slug}`,
  });

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Stories', url: '/stories' },
    { name: story.title, url: `/stories/${story.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storyJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="py-8 sm:py-14 space-y-16 sm:space-y-24">
        {/* Navigation Breadcrumb Back Link */}
        <div className="px-4 sm:px-6 max-w-7xl mx-auto">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#53664B] hover:text-[#3F4F39] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Stories</span>
          </Link>
        </div>

        {/* Story Header */}
        <section className="px-4 sm:px-6 max-w-4xl mx-auto text-center space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#575A51] font-light">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#53664B]" />
              {story.location}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#53664B]" />
              {story.date}
            </span>
            {story.venue && (
              <>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-[#53664B]" />
                  {story.venue}
                </span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#292C25] leading-tight">
            {story.title}
          </h1>

          <p className="text-base sm:text-xl text-[#53664B] font-light italic max-w-2xl mx-auto">
            {story.subtitle}
          </p>

          <div className="pt-2 text-xs text-[#575A51] italic tracking-wider">
            Documenting {story.couple}
          </div>
        </section>

        {/* Cover Image Feature */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="relative aspect-[16/10] sm:aspect-[21/10] w-full rounded-3xl overflow-hidden border border-[#E4E2D8] shadow-2xl bg-[#EEEDE5]">
            <Image
              src={story.coverImage}
              alt={story.coverAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* Narrative Description & Editorial Column */}
        <section className="px-4 sm:px-6 max-w-3xl mx-auto">
          <div className="space-y-6 text-base sm:text-lg text-[#575A51] font-light leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-light first-letter:text-[#53664B] first-letter:mr-2 first-letter:float-left">
              {story.description}
            </p>
          </div>
        </section>

        {/* Editorial Story Gallery */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[11px] font-semibold tracking-widest text-[#53664B] uppercase">
              VISUAL CHAPTERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#292C25] mt-1">
              Curated frames from the day
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {story.gallery.map((img, index) => {
              const isLandscape = img.aspect === 'landscape';
              return (
                <div
                  key={index}
                  className={`flex flex-col space-y-3 ${
                    isLandscape && index % 3 === 0 ? 'md:col-span-2' : ''
                  }`}
                >
                  <div
                    className={`relative w-full rounded-3xl overflow-hidden border border-[#E4E2D8] bg-[#EEEDE5] shadow-md ${
                      isLandscape ? 'aspect-[16/10]' : 'aspect-[3/4]'
                    }`}
                  >
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      sizes={
                        isLandscape
                          ? '100vw'
                          : '(max-width: 768px) 100vw, 50vw'
                      }
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  {img.caption && (
                    <p className="text-xs text-[#575A51] italic text-center font-light">
                      {img.caption}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Previous / Next Story Navigation */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto pt-8 border-t border-[#E4E2D8]">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
            {prevStory ? (
              <Link
                href={`/stories/${prevStory.slug}`}
                className="group flex items-center gap-4 text-left p-4 rounded-2xl hover:bg-[#EEEDE5]/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#EEEDE5] flex items-center justify-center text-[#292C25] group-hover:bg-[#53664B] group-hover:text-white transition-colors shrink-0">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-widest text-[#575A51] uppercase block">
                    Previous Story
                  </span>
                  <span className="text-sm font-light text-[#292C25] group-hover:text-[#53664B] transition-colors line-clamp-1">
                    {prevStory.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextStory ? (
              <Link
                href={`/stories/${nextStory.slug}`}
                className="group flex items-center justify-end gap-4 text-right p-4 rounded-2xl hover:bg-[#EEEDE5]/60 transition-colors sm:ml-auto"
              >
                <div>
                  <span className="text-[10px] font-semibold tracking-widest text-[#575A51] uppercase block">
                    Next Story
                  </span>
                  <span className="text-sm font-light text-[#292C25] group-hover:text-[#53664B] transition-colors line-clamp-1">
                    {nextStory.title}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#EEEDE5] flex items-center justify-center text-[#292C25] group-hover:bg-[#53664B] group-hover:text-white transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <ContactCTA
          title="Inspired by this story?"
          description="Let us talk about your dates, ideas, and how we can document your day with the same natural artistry."
        />
      </article>
    </>
  );
}
