'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, GraduationCap } from 'lucide-react';
import { SiteSettingsData } from '@/lib/sanity/queries';

interface NavbarProps {
  settings?: SiteSettingsData | null;
}

export default function Navbar({ settings }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const showGallery = settings?.showGalleryInNavbar ?? true;
  const showPublications = settings?.showPublicationsInNavbar ?? true;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
    ...(showPublications ? [{ name: 'Publications', href: '/publications' }] : []),
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-slate-200/80 border-b border-slate-200'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-200 group-hover:scale-105 transition-transform duration-200">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[17px] tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                ICST 2026
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
                International Conference
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-150"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#registration"
              className="ml-3 px-5 py-2 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-200 transition-all duration-150 active:scale-95"
            >
              Register Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="lg:hidden border-t border-slate-100 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg"
          id="mobile-menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#registration"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-colors"
          >
            Register Now
          </Link>
        </div>
      )}
    </header>
  );
}
