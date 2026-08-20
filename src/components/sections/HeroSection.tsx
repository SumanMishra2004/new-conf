import React from 'react';
import { Calendar, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/60 to-indigo-50 text-slate-900 pt-20 pb-28 lg:pt-32 lg:pb-40 border-b border-slate-200">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft color blobs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-indigo-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl" />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-blue-500" />
          <span>Annual Flagship Conference 2026</span>
        </div>

        {/* Hero Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight max-w-5xl mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          International Conference on{' '}
          <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Sustainable Computing &amp; AI
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
          Connecting researchers, industry leaders, and academic innovators worldwide to present
          cutting-edge breakthroughs in artificial intelligence, sustainable technology, and
          computational sciences.
        </p>

        {/* Quick Meta Info Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-700">
          <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="font-medium">October 15–17, 2026</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm">
            <MapPin className="w-4 h-4 text-indigo-600" />
            <span className="font-medium">Hybrid (On-Site &amp; Virtual)</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Link
            href="#registration"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-200 transition-all duration-200 active:scale-95"
          >
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="#tracks"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold shadow-sm transition-all duration-200"
          >
            View Call for Papers
          </Link>
        </div>
      </div>
    </section>
  );
}
