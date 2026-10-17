export interface StoryGalleryImage {
  url: string;
  alt: string;
  caption?: string;
  aspect?: 'portrait' | 'landscape' | 'square';
}

export interface WeddingStory {
  slug: string;
  title: string;
  subtitle: string;
  couple: string;
  date: string;
  location: string;
  venue?: string;
  description: string;
  summary: string;
  coverImage: string;
  coverAlt: string;
  gallery: StoryGalleryImage[];
  category: 'wedding' | 'pre-wedding' | 'intimate';
  featured: boolean;
  testimonial?: {
    quote: string;
    author: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  deliverables: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ceremony' | 'portraits' | 'moments' | 'details';
  image: string;
  alt: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'tall';
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
