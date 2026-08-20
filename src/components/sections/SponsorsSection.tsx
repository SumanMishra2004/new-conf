import React from 'react';
import Image from 'next/image';
import { HandshakeIcon, Star } from 'lucide-react';
import { SponsorData } from '@/lib/sanity/queries';
import { getOptimizedImageUrl } from '@/lib/media/optimizer';

interface SponsorsSectionProps {
  sponsors?: SponsorData[];
}

const CATEGORY_ORDER = ['Platinum', 'Gold', 'Silver', 'Partner', 'Media Partner', 'Other'];

// Category-specific styling
const CATEGORY_STYLES: Record<string, { badge: string; ring: string }> = {
  Platinum: { badge: 'bg-slate-100 text-slate-700 border-slate-300', ring: 'ring-slate-300' },
  Gold:     { badge: 'bg-amber-50 text-amber-700 border-amber-300', ring: 'ring-amber-300' },
  Silver:   { badge: 'bg-blue-50 text-blue-600 border-blue-200', ring: 'ring-blue-200' },
  Partner:  { badge: 'bg-indigo-50 text-indigo-700 border-indigo-200', ring: 'ring-indigo-200' },
  'Media Partner': { badge: 'bg-violet-50 text-violet-700 border-violet-200', ring: 'ring-violet-200' },
  Other:    { badge: 'bg-slate-50 text-slate-600 border-slate-200', ring: 'ring-slate-200' },
};

export default function SponsorsSection({ sponsors }: SponsorsSectionProps) {
  if (!sponsors || sponsors.length === 0) {
    return null;
  }

  const grouped = CATEGORY_ORDER.reduce((acc, catKey) => {
    acc[catKey] = sponsors.filter((s) => s.category === catKey);
    return acc;
  }, {} as Record<string, SponsorData[]>);

  return (
    <section id="sponsors" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 text-amber-500" />
            <span>Partnership</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Our Sponsors
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg">
            Supported by leading organizations driving research and technical advancements.
          </p>
        </div>

        {/* Sponsor Categories Grid */}
        <div className="space-y-12">
          {CATEGORY_ORDER.map((catGroup) => {
            const list = grouped[catGroup];
            if (!list || list.length === 0) return null;

            const style = CATEGORY_STYLES[catGroup] || CATEGORY_STYLES['Other'];

            return (
              <div key={catGroup} className="text-center">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <span className="h-px flex-1 max-w-24 bg-slate-200" />
                  <span className={`text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border ${style.badge}`}>
                    {catGroup} Sponsors
                  </span>
                  <span className="h-px flex-1 max-w-24 bg-slate-200" />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6">
                  {list.map((sponsor) => {
                    const logoUrl = getOptimizedImageUrl(sponsor.logo, 300, 85);
                    return (
                      <div
                        key={sponsor._id}
                        className={`bg-white border border-slate-200 rounded-xl p-4 w-44 h-24 flex items-center justify-center hover:shadow-md hover:ring-2 ${style.ring} transition-all duration-200 relative`}
                      >
                        {logoUrl ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={logoUrl}
                              alt={sponsor.name}
                              fill
                              className="object-contain p-2 hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                        ) : (
                          <span className="text-sm font-bold text-slate-700">{sponsor.name}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
