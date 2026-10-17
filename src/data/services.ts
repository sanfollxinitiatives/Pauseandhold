import { ServiceItem, ProcessStep } from '@/types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'wedding-photography',
    title: 'Wedding Photography',
    shortDescription:
      'Artful, candid documentary storytelling that captures the honest poetry, quiet tears, and spontaneous joy of your day.',
    fullDescription:
      'We believe the most memorable photographs are not staged postures, but the uninhibited laughter with your closest friends, the quiet exchange between partners right after the ceremony, and the subtle gestures you were too overwhelmed to notice. Our photography blends photojournalistic observation with editorial sophistication.',
    image: '/images/bride.jpg',
    imageAlt: 'Bride and groom walking together in natural golden sunlight',
    highlights: [
      'Full-day or tailored multi-day documentary coverage',
      'High-resolution, color-graded fine art gallery',
      'Unobtrusive, documentary observation with gentle guidance when needed',
      'Private online gallery with print-ready downloads & cloud backup',
    ],
    deliverables: [
      'Comprehensive high-resolution digital collection',
      'Artistic color curation and archival editing',
      'Online client portal for family sharing & ordering',
      'Optional handcrafted heirloom fine-art album',
    ],
  },
  {
    id: 'wedding-films',
    title: 'Wedding Films',
    shortDescription:
      'Cinematic motion portraits woven with genuine soundscapes, spoken vows, and timeless musical composition.',
    fullDescription:
      'A great wedding film is not a generic music video; it is a living time capsule. We record ambient sounds, emotional whispers, heartfelt speeches, and tender embraces. Using cinematic color grading and intentional pacing, we create an heirloom film that feels as vivid fifty years from now as it does today.',
    image: '/images/dance.jpg',
    imageAlt: 'Atmospheric evening wedding celebration with warm cinematic ambient lighting',
    highlights: [
      'Multi-angle cinematic 4K video recording with natural sound design',
      'Professional audio recording for vows, letters, and speeches',
      'Artistic teaser reel optimized for sharing with loved ones',
      'Feature-length documentary edit preserving the full ceremony and toasts',
    ],
    deliverables: [
      'Cinematic highlight film (4–7 minutes)',
      'Full ceremony and speeches documentary cut',
      'Licensed atmospheric soundtrack and bespoke sound mixing',
      'Delivered in ultra-high-definition digital format',
    ],
  },
  {
    id: 'pre-wedding-shoots',
    title: 'Pre-Wedding & Engagement',
    shortDescription:
      'Unrushed, intimate sessions in meaningful landscapes before the wedding day unfolds.',
    fullDescription:
      'Step away from wedding planning checklists and take an unhurried afternoon just for the two of you. Whether along windswept ocean cliffs, quiet country lanes, or meaningful city corners, pre-wedding sessions give you space to be yourselves and feel completely comfortable in front of our lenses.',
    image: '/images/hero.jpg',
    imageAlt: 'Couple strolling along a picturesque coastal landscape at dusk',
    highlights: [
      '2–3 hour relaxed sunset or sunrise session',
      'Location styling and wardrobe guidance tailored to your personality',
      'Ideal opportunity to build rapport and effortless ease with your photographers',
      'Candid, editorial portrait collection delivered before the wedding',
    ],
    deliverables: [
      'Curated collection of high-resolution retouched images',
      'Web-optimized files perfect for invitations & wedding websites',
      'Private online gallery with permanent download access',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Initial Connection',
    description:
      'Share your wedding date, vision, and questions through our enquiry form. We will check availability and schedule a relaxed introductory call to see if our philosophies align.',
  },
  {
    step: '02',
    title: 'Planning & Guidance',
    description:
      'From timeline recommendations and lighting considerations to family portrait checklists, we help you shape an unhurried schedule so you can truly be present on your day.',
  },
  {
    step: '03',
    title: 'The Wedding Day',
    description:
      'We blend naturally into your celebration. We step forward with gentle direction when required for portraits, but spend the majority of the day quietly documenting genuine, unscripted moments.',
  },
  {
    step: '04',
    title: 'Curation & Heirloom Delivery',
    description:
      'Every photograph and film is meticulously color-graded with our signature warm, timeless aesthetic. You receive a private digital gallery and optional heirloom print album.',
  },
];
