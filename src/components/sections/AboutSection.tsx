import React from 'react';
import { PortableText } from '@portabletext/react';
import { Info } from 'lucide-react';

interface AboutSectionProps {
  enabled?: boolean;
  description?: any;
}

export default function AboutSection({ enabled, description }: AboutSectionProps) {
  if (!enabled || !description) {
    return null;
  }

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Section Heading Area */}
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-5">
              <Info className="w-3.5 h-3.5 text-blue-500" />
              <span>About The Conference</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Pioneering Tomorrow's Innovations
            </h2>
            <p className="mt-4 text-slate-500 text-base leading-relaxed">
              Bringing academic scholars and industry experts together to share original research
              and groundbreaking solutions.
            </p>
            {/* Decorative rule */}
            <div className="mt-6 flex gap-1.5">
              <span className="h-1 w-10 rounded-full bg-blue-600" />
              <span className="h-1 w-4 rounded-full bg-indigo-400" />
              <span className="h-1 w-2 rounded-full bg-slate-300" />
            </div>
          </div>

          {/* CMS Description Content Area */}
          <div className="lg:w-2/3 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-headings:text-slate-900 prose-a:text-blue-600 prose-strong:text-slate-800">
              <PortableText value={description} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
