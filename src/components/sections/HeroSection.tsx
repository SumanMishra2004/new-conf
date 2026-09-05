import React from 'react';
import { Calendar, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export interface HeroSectionProps {
  badgeText?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
  acronym?: string;
  description?: string;
  eventDate?: string;
  eventMode?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  subjectAreas?: string[];
}

const DEFAULTS: Required<HeroSectionProps> = {
  badgeText: 'International Conference · 2026',
  titleLine1: 'International Conference on',
  titleLine2: 'Chemical, Biological & Technological Sciences',
  titleLine3: 'for Sustainability',
  acronym: 'CBTS 2026',
  description:
    'A global platform bringing together researchers, scientists, academicians, innovators, and industry leaders to explore sustainable solutions across chemical, biological, and technological sciences.',
  eventDate: 'October 15–17, 2026',
  eventMode: 'Hybrid · On-Site & Virtual',
  primaryButtonText: 'Register Now',
  primaryButtonLink: '#registration',
  secondaryButtonText: 'View Call for Papers',
  secondaryButtonLink: '#tracks',
  subjectAreas: ['Chemical Sciences', 'Biological Sciences', 'Technological Sciences'],
};

export default function HeroSection(props: HeroSectionProps) {
  const d = DEFAULTS;

  const badgeText = props.badgeText || d.badgeText;
  const titleLine1 = props.titleLine1 || d.titleLine1;
  const titleLine2 = props.titleLine2 || d.titleLine2;
  const titleLine3 = props.titleLine3 || d.titleLine3;
  const acronym = props.acronym || d.acronym;
  const description = props.description || d.description;
  const eventDate = props.eventDate || d.eventDate;
  const eventMode = props.eventMode || d.eventMode;
  const primaryButtonText = props.primaryButtonText || d.primaryButtonText;
  const primaryButtonLink = props.primaryButtonLink || d.primaryButtonLink;
  const secondaryButtonText = props.secondaryButtonText || d.secondaryButtonText;
  const secondaryButtonLink = props.secondaryButtonLink || d.secondaryButtonLink;
  const subjectAreas =
    props.subjectAreas && props.subjectAreas.length > 0 ? props.subjectAreas : d.subjectAreas;

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#fafcfb] text-slate-950">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft ambient shapes */}
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-teal-50/80" />
        <div className="absolute -right-40 top-10 h-[460px] w-[460px] rounded-full bg-emerald-50/70" />
        <div className="absolute bottom-[-180px] left-[35%] h-[420px] w-[420px] rounded-full bg-slate-100/80" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(#94a3b8 0.8px, transparent 0.8px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Decorative rings */}
        <div className="absolute left-[5%] top-[25%] hidden h-28 w-28 rounded-full border border-teal-100 lg:block" />
        <div className="absolute left-[7%] top-[28%] hidden h-16 w-16 rounded-full border border-teal-200 lg:block" />
        <div className="absolute bottom-[18%] right-[6%] hidden h-36 w-36 rounded-full border border-emerald-100 lg:block" />
        <div className="absolute bottom-[22%] right-[9%] hidden h-20 w-20 rounded-full border border-emerald-200 lg:block" />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8 lg:pb-32 lg:pt-18">
        <div className="mx-auto max-w-6xl text-center">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-teal-700 shadow-sm sm:text-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{badgeText}</span>
          </div>

          {/* Main Heading */}
          <h1
            className="mx-auto text-[2.25rem] font-bold leading-[1.12] tracking-[-0.025em] text-[#17252a] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            <span className="block">{titleLine1}</span>
            <span className="mt-1 block text-[#147d72]">{titleLine2}</span>
            <span className="mt-1 block text-[#17252a]">{titleLine3}</span>
          </h1>

          {/* Conference Acronym */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-slate-300 sm:w-14" />
            <span
              className="text-base font-bold tracking-[0.2em] text-slate-600 sm:text-lg"
              style={{ fontFamily: "'Manrope', 'Inter', sans-serif" }}
            >
              {acronym}
            </span>
            <span className="h-px w-8 bg-slate-300 sm:w-14" />
          </div>

          {/* Description */}
          <p
            className="mx-auto mt-7 max-w-3xl text-base font-normal leading-7 text-slate-600 sm:text-lg sm:leading-8"
            style={{ fontFamily: "'Manrope', 'Inter', sans-serif" }}
          >
            {description}
          </p>

          {/* Event Information */}
          <div
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
            style={{ fontFamily: "'Manrope', 'Inter', sans-serif" }}
          >
            <div className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm shadow-sm sm:w-auto">
              <Calendar className="h-4 w-4 shrink-0 text-[#147d72]" />
              <span className="font-semibold text-slate-700">{eventDate}</span>
            </div>
            <div className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm shadow-sm sm:w-auto">
              <MapPin className="h-4 w-4 shrink-0 text-[#147d72]" />
              <span className="font-semibold text-slate-700">{eventMode}</span>
            </div>
          </div>

          {/* CTA */}
          <div
            className="mx-auto mt-9 flex w-full max-w-lg flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
            style={{ fontFamily: "'Manrope', 'Inter', sans-serif" }}
          >
            <Link
              href={primaryButtonLink}
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#147d72] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition-all duration-200 hover:bg-[#106b61] hover:shadow-xl hover:shadow-teal-900/15 active:scale-[0.98] sm:w-auto sm:min-w-[165px]"
            >
              <span>{primaryButtonText}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href={secondaryButtonLink}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 hover:border-teal-300 hover:bg-teal-50 hover:text-[#147d72] active:scale-[0.98] sm:w-auto"
            >
              {secondaryButtonText}
            </Link>
          </div>

          {/* Subject Areas */}
          <div
            className="mt-10 flex flex-col items-center justify-center gap-2 text-xs text-slate-500 sm:flex-row sm:gap-3"
            style={{ fontFamily: "'Manrope', 'Inter', sans-serif" }}
          >
            {subjectAreas.map((area, index) => (
              <React.Fragment key={area}>
                {index > 0 && (
                  <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
                )}
                <span>{area}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
