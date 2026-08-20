import React from 'react';
import { Layers, FileText } from 'lucide-react';

interface TracksSectionProps {
  enabled?: boolean;
  tracks?: Array<{ _key?: string; description: string }>;
}

// Icon mapping — rotates per track
const TRACK_ICONS = [Layers, FileText, Layers, FileText, Layers, FileText];
// Color accent variants rotating per track
const TRACK_COLORS = [
  { bg: 'bg-blue-50', border: 'border-blue-200', accent: 'text-blue-600', num: 'text-blue-600', hover: 'hover:border-blue-400 hover:shadow-blue-100' },
  { bg: 'bg-indigo-50', border: 'border-indigo-200', accent: 'text-indigo-600', num: 'text-indigo-600', hover: 'hover:border-indigo-400 hover:shadow-indigo-100' },
  { bg: 'bg-violet-50', border: 'border-violet-200', accent: 'text-violet-600', num: 'text-violet-600', hover: 'hover:border-violet-400 hover:shadow-violet-100' },
  { bg: 'bg-sky-50', border: 'border-sky-200', accent: 'text-sky-600', num: 'text-sky-600', hover: 'hover:border-sky-400 hover:shadow-sky-100' },
  { bg: 'bg-teal-50', border: 'border-teal-200', accent: 'text-teal-600', num: 'text-teal-600', hover: 'hover:border-teal-400 hover:shadow-teal-100' },
  { bg: 'bg-cyan-50', border: 'border-cyan-200', accent: 'text-cyan-600', num: 'text-cyan-600', hover: 'hover:border-cyan-400 hover:shadow-cyan-100' },
];

export default function TracksSection({ enabled, tracks }: TracksSectionProps) {
  if (!enabled || !tracks || tracks.length === 0) {
    return null;
  }

  return (
    <section id="tracks" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-indigo-500" />
            <span>Call For Papers</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Conference Tracks &amp; Topics
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg">
            We invite original high-quality research papers across the following computational and
            technical domains:
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => {
            const trackNumber = String(index + 1).padStart(2, '0');
            const color = TRACK_COLORS[index % TRACK_COLORS.length];

            return (
              <div
                key={track._key || index}
                className={`group relative bg-white border ${color.border} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${color.hover} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-3xl font-black ${color.num} tracking-wider select-none`}>
                      {trackNumber}
                    </span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${color.bg} ${color.accent} border ${color.border}`}>
                      Track
                    </span>
                  </div>
                  <p className="text-slate-700 text-base font-medium leading-relaxed group-hover:text-slate-900 transition-colors">
                    {track.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
