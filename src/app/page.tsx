import { HeartbeatPreloader } from '@/components/ui/HeartbeatPreloader';
import { ShowcaseHero } from '@/components/home/ShowcaseHero';
import { MarqueeRibbon } from '@/components/home/MarqueeRibbon';
import { StorySection } from '@/components/home/StorySection';
import { SplitStats } from '@/components/home/SplitStats';
import { ServicesShowcase } from '@/components/home/ServicesShowcase';
import { HorizontalMoments } from '@/components/home/HorizontalMoments';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { DanceMaskSection } from '@/components/home/DanceMaskSection';
import { TestimonialShowcase } from '@/components/home/TestimonialShowcase';
import { MosaicGallery } from '@/components/home/MosaicGallery';
import { FaqAccordion } from '@/components/home/FaqAccordion';

export default function HomePage() {
  return (
    <>
      {/* 1. Heartbeat 4-Panel Preloader */}
      <HeartbeatPreloader />

      {/* 2. Full-Screen Cinematic Showcase Hero with Word Reveal & Parallax */}
      <ShowcaseHero />

      {/* 3. Infinite Keyword Marquee with Pulsing Hearts */}
      <MarqueeRibbon />

      {/* 4. Brand Philosophy with Scroll-Driven Word Illumination */}
      <StorySection />

      {/* 5. 3D Tilt Image Mask Reveal & Animated Counter Statistics */}
      <SplitStats />

      {/* 6. Services 3-Card Grid with Hover Expand Interaction */}
      <ServicesShowcase />

      {/* 7. Pinned Horizontal Moments Track with Skew Velocity */}
      <HorizontalMoments />

      {/* 8. Process Journey with Animated Vertical Line Fill */}
      <ProcessTimeline />

      {/* 9. Pinned First Dance Expanding Mask Reveal */}
      <DanceMaskSection />

      {/* 10. Emotional Testimonial with Animated Heart */}
      <TestimonialShowcase />

      {/* 11. Dynamic Mosaic Gallery with Scatter-In Animation */}
      <MosaicGallery />

      {/* 12. Gentle Questions Interactive FAQ Accordion */}
      <FaqAccordion />
    </>
  );
}
