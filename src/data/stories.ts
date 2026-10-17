import { WeddingStory } from '@/types';

export const SAMPLE_STORIES: WeddingStory[] = [
  {
    slug: 'golden-hour-at-the-olive-grove',
    title: 'Golden Hour at the Olive Grove',
    subtitle: 'An intimate celebration framed by rustic stone and twilight warmth',
    couple: 'Elena & Lucas (Demo Portfolio Entry)',
    date: 'Autumn 2025',
    location: 'Rolling Hills Estate',
    venue: 'Stone Barn & Olive Terraces',
    description:
      'A quiet autumn afternoon where vows were spoken beneath ancient olive branches. From the soft morning preparation to barefoot dancing under suspended festoon bulbs, every frame honors the natural rhythm of the day without interruption.',
    summary:
      'A heartfelt celebration captured in warm amber tones, focusing on unscripted tears, quiet glances, and cinematic twilight stillness.',
    coverImage: '/images/hero.jpg',
    coverAlt:
      'Bride and groom embracing in a sunlit olive grove with golden hour illumination',
    category: 'wedding',
    featured: true,
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
        alt: 'Couple sharing a gentle moment in soft afternoon light',
        caption: 'Quiet reflections before the ceremony',
        aspect: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
        alt: 'Close-up of hands intertwined showing wedding rings and delicate lace',
        caption: 'The unspoken intimacy of touch',
        aspect: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80',
        alt: 'Bridal bouquet and veil illuminated by window light',
        caption: 'Natural textures and heirloom details',
        aspect: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80',
        alt: 'Evening dinner table illuminated by flickering candles and string lights',
        caption: 'Dinner under the stars with closest family',
        aspect: 'landscape',
      },
    ],
  },
  {
    slug: 'whispers-by-the-coast',
    title: 'Whispers by the Coast',
    subtitle: 'Moody sea breezes, cliffside vows, and timeless black & white candids',
    couple: 'Maya & Julian (Demo Portfolio Entry)',
    date: 'Summer 2025',
    location: 'Coastal Cliffs',
    venue: 'Seaside Sanctuary',
    description:
      'Set against dramatic cliffside scenery and ocean swells, this editorial story captures the quiet power of two people promising their lives to one another. Minimalist styling paired with raw, emotional documentary imagery.',
    summary:
      'A cinematic coastal session blending sweeping landscapes with deeply personal, candid portraiture.',
    coverImage: '/images/bride.jpg',
    coverAlt:
      'Candid bride in morning light before the ceremony',
    category: 'pre-wedding',
    featured: true,
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=80',
        alt: 'Couple silhouetted against the open horizon by the sea',
        caption: 'Vast landscapes, intimate connection',
        aspect: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80',
        alt: 'Editorial bridal portrait with windblown veil',
        caption: 'Unposed elegance caught in motion',
        aspect: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
        alt: 'Black and white candid smile during ceremony exchange',
        caption: 'Genuine, unfiltered emotion',
        aspect: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80',
        alt: 'Couple walking barefoot along the edge of the water',
        caption: 'Endless horizon, peaceful beginnings',
        aspect: 'landscape',
      },
    ],
  },
  {
    slug: 'serenade-in-the-old-courtyard',
    title: 'Serenade in the Old Courtyard',
    subtitle: 'Heritage stone architecture, cascading florals, and heartfelt poetry',
    couple: 'Clara & Ethan (Demo Portfolio Entry)',
    date: 'Spring 2025',
    location: 'Historical Villa',
    venue: 'Archway Gardens & Glasshouse',
    description:
      'Surrounded by climbing jasmine and weathered limestone arches, Clara and Ethan held an intimate gathering with thirty close guests. Every photograph reflects the unhurried warmth of genuine connection and family traditions.',
    summary:
      'A romantic villa wedding characterized by timeless editorial framing, poetic lighting, and tender family embraces.',
    coverImage: '/images/aisle.jpg',
    coverAlt:
      'Forest ceremony aisle and wedding moments',
    category: 'wedding',
    featured: true,
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80',
        alt: 'Courtyard banquet table with linen drapery and soft candlelight',
        caption: 'Artful table styling inspired by organic simplicity',
        aspect: 'landscape',
      },
      {
        url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80',
        alt: 'Bride adjusting veil in soft window reflection',
        caption: 'Quiet anticipation in the dressing suite',
        aspect: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80',
        alt: 'Couple laughing together while walking through the garden pathway',
        caption: 'Spontaneous laughter between frames',
        aspect: 'portrait',
      },
      {
        url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1600&q=80',
        alt: 'Mountain ridge view during bridal portraits at dusk',
        caption: 'Breathtaking serenity at dusk',
        aspect: 'landscape',
      },
    ],
  },
];

export function getStoryBySlug(slug: string): WeddingStory | undefined {
  return SAMPLE_STORIES.find((story) => story.slug === slug);
}

export function getAllStorySlugs(): string[] {
  return SAMPLE_STORIES.map((story) => story.slug);
}
