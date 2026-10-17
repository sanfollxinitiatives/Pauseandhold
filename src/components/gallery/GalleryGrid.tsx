'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '@/types';

interface GalleryGridProps {
  items: GalleryItem[];
}

const CATEGORIES = [
  { id: 'all', label: 'All Photographs' },
  { id: 'ceremony', label: 'Ceremonies' },
  { id: 'portraits', label: 'Portraits' },
  { id: 'moments', label: 'Unscripted Moments' },
  { id: 'details', label: 'Details & Atmosphere' },
];

export const GalleryGrid: React.FC<GalleryGridProps> = ({ items }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Lock body scroll when lightbox is active
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  }, [lightboxIndex, filteredItems.length]);

  // Handle keyboard events in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Category Filter Pills */}
      <div
        role="tablist"
        aria-label="Filter gallery by category"
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#53664B] ${
                isActive
                  ? 'bg-[#53664B] text-[#F8F6EF] shadow-sm'
                  : 'bg-[#EEEDE5]/80 text-[#292C25] hover:bg-[#EEEDE5] hover:text-[#53664B] border border-[#E4E2D8]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item, index) => {
          // Dynamic aspect ratios for organic editorial rhythm
          const aspect =
            item.aspect === 'tall'
              ? 'aspect-[9/16] sm:aspect-[3/4]'
              : item.aspect === 'landscape'
              ? 'aspect-[4/3]'
              : item.aspect === 'square'
              ? 'aspect-square'
              : 'aspect-[4/5]';

          return (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-3xl border border-[#E4E2D8] bg-[#EEEDE5] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${aspect}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#292C25]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-[#F8F6EF]">
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-[#F8F6EF]/20 backdrop-blur-md flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-[#F8F6EF]" />
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#819568] block mb-1">
                    {item.category}
                  </span>
                  <p className="text-sm font-light text-[#EEEDE5] leading-snug">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Accessible Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Viewer"
          className="fixed inset-0 z-50 bg-[#292C25]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close image viewer"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-[#F8F6EF]/10 hover:bg-[#F8F6EF]/25 text-[#F8F6EF] flex items-center justify-center transition-colors z-50 focus-visible:outline-2 focus-visible:outline-[#819568]"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation: Previous */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous photograph"
            className="absolute left-4 sm:left-8 w-11 h-11 rounded-full bg-[#F8F6EF]/10 hover:bg-[#F8F6EF]/25 text-[#F8F6EF] flex items-center justify-center transition-colors z-50 focus-visible:outline-2 focus-visible:outline-[#819568]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation: Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next photograph"
            className="absolute right-4 sm:right-8 w-11 h-11 rounded-full bg-[#F8F6EF]/10 hover:bg-[#F8F6EF]/25 text-[#F8F6EF] flex items-center justify-center transition-colors z-50 focus-visible:outline-2 focus-visible:outline-[#819568]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Container */}
          <div
            className="relative max-w-5xl max-h-[82vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[75vh]">
              <Image
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center text-[#F8F6EF]">
              <p className="text-sm font-light text-[#EEEDE5]">
                {filteredItems[lightboxIndex].title}
              </p>
              <p className="text-[11px] font-mono text-[#819568] tracking-widest uppercase mt-1">
                {lightboxIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
