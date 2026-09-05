'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { SiteSettingsData } from '@/lib/sanity/queries';
import Image from 'next/image';

interface NavbarProps {
  settings?: SiteSettingsData | null;
}

export default function Navbar({ settings }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const showGallery = settings?.showGalleryInNavbar ?? true;
  const showPublications = settings?.showPublicationsInNavbar ?? true;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Tracks', href: '/#tracks' },
    { name: 'Dates', href: '/#important-dates' },
    { name: 'Speakers', href: '/#speakers' },
    { name: 'Committee', href: '/#committee' },
    { name: 'Registration', href: '/#registration' },
    ...(showGallery ? [{ name: 'Gallery', href: '/gallery' }] : []),
    ...(showPublications
      ? [{ name: 'Publications', href: '/publications' }]
      : []),
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="Home"
          >
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white transition-transform duration-200 hover:scale-105">
              <Image
                src="/icon.jpeg"
                width={300}
                height={300}
                alt="Logo"
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-150 hover:bg-slate-100 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}

            {/* Register Button */}
            <Link
              href="/#registration"
              className="ml-3 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-200 transition-all duration-150 hover:bg-blue-700 hover:shadow-md active:scale-95"
            >
              Register Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white px-4 pb-4 pt-3 shadow-lg lg:hidden"
        >
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/#registration"
              onClick={() => setIsOpen(false)}
              className="mt-3 block w-full rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              Register Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}