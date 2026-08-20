import React from 'react';
import { Calendar, Clock, FileEdit, CalendarCheck } from 'lucide-react';

interface ImportantDatesSectionProps {
  enabled?: boolean;
  importantDates?: Array<{
    _key?: string;
    title: string;
    subtitle: string;
    date: string;
  }>;
}

// Different icon and color per date card
const DATE_STYLES = [
  { icon: FileEdit, bg: 'bg-blue-50', border: 'border-blue-200', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', dateBg: 'bg-blue-600', dateText: 'text-white' },
  { icon: CalendarCheck, bg: 'bg-indigo-50', border: 'border-indigo-200', iconBg: 'bg-indigo-100', iconColor: 'text-indigo-600', dateBg: 'bg-indigo-600', dateText: 'text-white' },
  { icon: Clock, bg: 'bg-violet-50', border: 'border-violet-200', iconBg: 'bg-violet-100', iconColor: 'text-violet-600', dateBg: 'bg-violet-600', dateText: 'text-white' },
  { icon: Calendar, bg: 'bg-sky-50', border: 'border-sky-200', iconBg: 'bg-sky-100', iconColor: 'text-sky-600', dateBg: 'bg-sky-600', dateText: 'text-white' },
];

export default function ImportantDatesSection({ enabled, importantDates }: ImportantDatesSectionProps) {
  if (!enabled || !importantDates || importantDates.length === 0) {
    return null;
  }

  return (
    <section id="important-dates" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5 text-blue-500" />
            <span>Timeline</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Important Dates
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg">
            Mark your calendar for key submission deadlines and conference schedule dates.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {importantDates.map((item, index) => {
            const style = DATE_STYLES[index % DATE_STYLES.length];
            const IconComponent = style.icon;

            return (
              <div
                key={item._key || index}
                className={`relative bg-white border ${style.border} rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl ${style.iconBg} flex items-center justify-center ${style.iconColor} mb-5`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs font-medium text-slate-500 mb-4 leading-relaxed">{item.subtitle}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs uppercase font-semibold text-slate-400 tracking-wide">Deadline</span>
                  <span className={`text-xs font-bold ${style.dateBg} ${style.dateText} px-3 py-1.5 rounded-lg shadow-sm`}>
                    {item.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
