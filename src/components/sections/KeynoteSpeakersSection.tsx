import React from 'react';
import Image from 'next/image';
import { Users, User, Building2 } from 'lucide-react';
import { SpeakerData } from '@/lib/sanity/queries';
import { getOptimizedImageUrl } from '@/lib/media/optimizer';

interface KeynoteSpeakersSectionProps {
  speakers?: SpeakerData[];
}

export default function KeynoteSpeakersSection({ speakers }: KeynoteSpeakersSectionProps) {
  if (!speakers || speakers.length === 0) {
    return null;
  }

  return (
    <section id="speakers" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5 text-blue-500" />
            <span>Honored Guests</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Keynote Speakers
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg">
            World-renowned leaders sharing visions and insights in computer science and technology.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => {
            const imageUrl = speaker.profileImage
              ? getOptimizedImageUrl(speaker.profileImage, 400, 85)
              : null;

            return (
              <div
                key={speaker._id}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 flex flex-col items-center text-center p-8"
              >
                {/* Image or Fallback */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-slate-100 group-hover:border-blue-200 transition-colors shadow-md bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center shrink-0">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={speaker.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex flex-col items-center justify-center p-4">
                      <User className="w-10 h-10 text-blue-500 mb-1" />
                      <span className="text-xs font-bold text-blue-700 uppercase tracking-wider line-clamp-1">
                        {speaker.name}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {speaker.name}
                </h3>
                {speaker.designation && (
                  <p className="text-sm font-semibold text-blue-600 mt-1">{speaker.designation}</p>
                )}
                {speaker.organization && (
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-500">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{speaker.organization}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
