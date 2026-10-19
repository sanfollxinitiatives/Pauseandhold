'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about/' },
  { name: 'Portfolio', href: '/portfolio/' },
  { name: 'Services', href: '/services/' },
  { name: 'Journal', href: '/journal/' },
  { name: 'Contact', href: '/contact/' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll detection for subtle shadow elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-3 sm:top-5 z-40 px-3 sm:px-6 w-full max-w-7xl mx-auto transition-all duration-300">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-7 py-3 transition-all duration-300 border ${
            scrolled
              ? 'bg-[#F8F6EF]/95 backdrop-blur-md border-[#E4E2D8] shadow-[0_8px_30px_rgb(41,44,37,0.08)]'
              : 'bg-[#F8F6EF]/85 backdrop-blur-sm border-[#E4E2D8]/80 shadow-[0_4px_20px_rgb(41,44,37,0.04)]'
          }`}
        >
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#53664B] ${
                    isActive
                      ? 'text-[#53664B] bg-[#EEEDE5]'
                      : 'text-[#292C25] hover:text-[#53664B] hover:bg-[#EEEDE5]/60'
                  }`}
                >
                  <span className="relative block overflow-hidden">
                    <span className="block transition-transform duration-500 ease-out group-hover:-translate-y-full">
                      {link.name}
                    </span>
                    <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 text-[#53664B]">
                      {link.name}
                    </span>
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action: CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button href="/contact/" size="sm" withArrow variant="primary" className="magnetic">
                Book Your Date
              </Button>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden p-2 rounded-full text-[#292C25] hover:bg-[#EEEDE5] transition-colors focus-visible:outline-2 focus-visible:outline-[#53664B]"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        aria-label="Mobile menu"
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-[#292C25]/40 backdrop-blur-xs transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Content Sheet */}
        <div
          className={`absolute top-4 inset-x-4 max-w-lg mx-auto bg-[#F8F6EF] border border-[#E4E2D8] rounded-3xl p-6 shadow-2xl transition-all duration-300 transform ${
            mobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-6 scale-95'
          }`}
        >
          <div className="flex items-center justify-between pb-5 border-b border-[#E4E2D8]">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-full hover:bg-[#EEEDE5] text-[#292C25]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col py-6 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-base font-normal tracking-wide transition-colors ${
                    isActive
                      ? 'bg-[#EEEDE5] text-[#53664B] font-medium'
                      : 'text-[#292C25] hover:bg-[#EEEDE5]/60 hover:text-[#53664B]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#E4E2D8]">
            <Button
              href="/contact/"
              size="md"
              withArrow
              className="w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Plan Your Wedding
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
