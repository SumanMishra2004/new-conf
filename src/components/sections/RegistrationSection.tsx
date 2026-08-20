import React from 'react';
import { CreditCard, ExternalLink, Check } from 'lucide-react';
import { RegistrationCategoryData } from '@/lib/sanity/queries';

interface RegistrationSectionProps {
  enabled?: boolean;
  googleFormUrl?: string;
  categories?: RegistrationCategoryData[];
}

// Color variants for registration category cards
const CARD_COLORS = [
  { border: 'border-blue-200', accentBg: 'bg-blue-600', accentText: 'text-blue-600', checkColor: 'text-blue-600', topBg: 'bg-blue-50' },
  { border: 'border-indigo-200', accentBg: 'bg-indigo-600', accentText: 'text-indigo-600', checkColor: 'text-indigo-600', topBg: 'bg-indigo-50' },
  { border: 'border-violet-200', accentBg: 'bg-violet-600', accentText: 'text-violet-600', checkColor: 'text-violet-600', topBg: 'bg-violet-50' },
  { border: 'border-sky-200', accentBg: 'bg-sky-600', accentText: 'text-sky-600', checkColor: 'text-sky-600', topBg: 'bg-sky-50' },
];

export default function RegistrationSection({ enabled, googleFormUrl, categories }: RegistrationSectionProps) {
  if (!enabled) {
    return null;
  }

  return (
    <section id="registration" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <CreditCard className="w-3.5 h-3.5 text-blue-500" />
            <span>Join Us</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Registration &amp; Fees
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg">
            Choose your registration category and complete your online registration form.
          </p>
        </div>

        {/* Pricing Grid */}
        {categories && categories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((cat, index) => {
              const color = CARD_COLORS[index % CARD_COLORS.length];

              return (
                <div
                  key={cat._id}
                  className={`bg-white border ${color.border} rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col`}
                >
                  {/* Top accent stripe */}
                  <div className={`${color.accentBg} h-1.5 w-full`} />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{cat.name}</h3>
                    <div className={`text-3xl font-extrabold ${color.accentText} mb-5`}>
                      {cat.fee}
                    </div>
                    <ul className="space-y-2.5 text-sm text-slate-600 flex-1">
                      <li className="flex items-center gap-2">
                        <Check className={`w-4 h-4 ${color.checkColor} shrink-0`} />
                        <span>Full Access to All Technical Sessions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className={`w-4 h-4 ${color.checkColor} shrink-0`} />
                        <span>Conference Kit &amp; Certificate</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className={`w-4 h-4 ${color.checkColor} shrink-0`} />
                        <span>Publication inclusion (if accepted)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* CTA Redirecting to Google Form */}
        {googleFormUrl && (
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xl shadow-blue-200">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-5 border border-white/30">
              <CreditCard className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to Submit &amp; Register?</h3>
            <p className="text-sm text-blue-100 mb-8 max-w-sm mx-auto">
              Complete the official Google Form registration to secure your seat.
            </p>
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-blue-50 text-blue-700 font-bold shadow-lg transition-all duration-200 active:scale-95"
            >
              <span>Complete Google Form Registration</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
