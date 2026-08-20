'use client';

import React, { useEffect, useState } from 'react';
import { MapPin, Navigation2 } from 'lucide-react';
import DOMPurify from 'dompurify';

interface VenueSectionProps {
  enabled?: boolean;
  name?: string;
  address?: string;
  iframeHtml?: string;
}

export default function VenueSection({ enabled, name, address, iframeHtml }: VenueSectionProps) {
  const [sanitizedIframe, setSanitizedIframe] = useState<string | null>(null);

  useEffect(() => {
    if (iframeHtml) {
      const clean = DOMPurify.sanitize(iframeHtml, {
        ADD_TAGS: ['iframe'],
        ADD_ATTR: ['src', 'width', 'height', 'style', 'allowfullscreen', 'loading', 'referrerpolicy'],
      });
      setSanitizedIframe(clean);
    }
  }, [iframeHtml]);

  if (!enabled || (!name && !address && !iframeHtml)) {
    return null;
  }

  return (
    <section id="venue" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Venue Details */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              <span>Location</span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Conference Venue
            </h2>
            {name && (
              <h3 className="text-2xl font-bold text-blue-700">{name}</h3>
            )}
            {address && (
              <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <p className="text-slate-600 text-base leading-relaxed whitespace-pre-line">
                  {address}
                </p>
              </div>
            )}

            {/* Get Directions Button */}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(address || name || '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm shadow-blue-200 transition-all duration-200 active:scale-95"
            >
              <Navigation2 className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          {/* Google Maps Iframe */}
          <div className="lg:w-1/2 w-full h-[420px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-lg relative">
            {sanitizedIframe ? (
              <div
                className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-0"
                dangerouslySetInnerHTML={{ __html: sanitizedIframe }}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-slate-200 flex items-center justify-center mb-3">
                  <Navigation2 className="w-8 h-8 text-slate-400" />
                </div>
                <span className="text-sm font-medium">Map location loading...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
