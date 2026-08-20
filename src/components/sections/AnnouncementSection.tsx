'use client';

import React, { useState } from 'react';
import { Bell, Pause, Play } from 'lucide-react';

interface AnnouncementSectionProps {
  enabled?: boolean;
  text?: string;
}

export default function AnnouncementSection({ enabled, text }: AnnouncementSectionProps) {
  const [isPaused, setIsPaused] = useState(false);

  if (!enabled || !text) {
    return null;
  }

  return (
    <div
      className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white border-b border-blue-800/30 overflow-hidden shadow-sm py-2.5"
      role="region"
      aria-label="Conference Announcement"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
        {/* Static Badge Label */}
        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg shrink-0 uppercase tracking-wider shadow-sm border border-white/20">
          <Bell className="w-3.5 h-3.5 animate-pulse" />
          <span>Announcement</span>
        </div>

        {/* Ticker / Marquee Container */}
        <div
          className="relative flex-1 overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() => setIsPaused(!isPaused)}
        >
          <div
            className={`whitespace-nowrap flex gap-12 font-medium text-sm sm:text-base tracking-wide text-white/90 ${
              isPaused ? 'animate-none' : 'animate-marquee'
            }`}
          >
            <span>{text}</span>
            <span className="text-blue-200">•</span>
            <span>{text}</span>
            <span className="text-blue-200">•</span>
            <span>{text}</span>
          </div>
        </div>

        {/* Pause/Play Toggle */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="p-1.5 rounded-md text-white/70 hover:text-white hover:bg-white/15 transition-colors shrink-0"
          title={isPaused ? 'Resume announcement animation' : 'Pause announcement animation'}
          aria-label={isPaused ? 'Resume announcement animation' : 'Pause announcement animation'}
        >
          {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
        </button>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 25s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
