import React from 'react';
import Link from 'next/link';
import { GraduationCap, Mail, Phone } from 'lucide-react';
import { SiteSettingsData, ContactInfoData } from '@/lib/sanity/queries';

interface FooterProps {
  settings?: SiteSettingsData | null;
  contactInfo?: ContactInfoData | null;
}

export default function Footer({ settings, contactInfo }: FooterProps) {
  const showGallery = settings?.showGalleryInFooter ?? true;
  const showPublications = settings?.showPublicationsInFooter ?? true;

  const emails = contactInfo?.emails?.length ? contactInfo.emails : ['contact@conference2026.org'];
  const phones = contactInfo?.phoneNumbers?.length ? contactInfo.phoneNumbers : ['+1 (555) 019-2834'];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">ICST 2026</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              International Conference on Sustainable Technologies &amp; AI Innovations. Bringing
              researchers and innovators together globally.
            </p>
            {/* Social Placeholder */}
            <div className="flex gap-2 mt-2">
              <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white cursor-pointer transition-colors text-xs font-bold">X</span>
              <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white cursor-pointer transition-colors text-xs font-bold">in</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-white tracking-widest uppercase mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#about" className="hover:text-white hover:translate-x-0.5 inline-block transition-all duration-150">
                  About Conference
                </Link>
              </li>
              <li>
                <Link href="/#tracks" className="hover:text-white hover:translate-x-0.5 inline-block transition-all duration-150">
                  Call for Papers &amp; Tracks
                </Link>
              </li>
              <li>
                <Link href="/#important-dates" className="hover:text-white hover:translate-x-0.5 inline-block transition-all duration-150">
                  Important Dates
                </Link>
              </li>
              <li>
                <Link href="/#speakers" className="hover:text-white hover:translate-x-0.5 inline-block transition-all duration-150">
                  Keynote Speakers
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="text-xs font-semibold text-white tracking-widest uppercase mb-5">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#committee" className="hover:text-white hover:translate-x-0.5 inline-block transition-all duration-150">
                  Committee
                </Link>
              </li>
              <li>
                <Link href="/#registration" className="hover:text-white hover:translate-x-0.5 inline-block transition-all duration-150">
                  Registration &amp; Fees
                </Link>
              </li>
              {showGallery && (
                <li>
                  <Link href="/gallery" className="hover:text-white hover:translate-x-0.5 inline-block transition-all duration-150">
                    Gallery
                  </Link>
                </li>
              )}
              {showPublications && (
                <li>
                  <Link href="/publications" className="hover:text-white hover:translate-x-0.5 inline-block transition-all duration-150">
                    Publications
                  </Link>
                </li>
              )}
              <li>
                <Link href="/#faq" className="hover:text-white hover:translate-x-0.5 inline-block transition-all duration-150">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-xs font-semibold text-white tracking-widest uppercase mb-5">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex flex-col gap-1">
                  {emails.map((e, idx) => (
                    <a key={idx} href={`mailto:${e}`} className="hover:text-white transition-colors">
                      {e}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex flex-col gap-1">
                  {phones.map((p, idx) => (
                    <a key={idx} href={`tel:${p}`} className="hover:text-white transition-colors">
                      {p}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} International Conference on Sustainable Technologies. All rights reserved.</p>
          <p>Built with Next.js &amp; Sanity CMS</p>
        </div>
      </div>
    </footer>
  );
}
