import React from 'react';
import { PortableText } from '@portabletext/react';
import { Info, Eye, Target, CheckCircle2, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  enabled?: boolean;
  description?: any;
  vision?: string;
  missionPoints?: string[];
  closingStatement?: string;
}

const DEFAULT_VISION =
  'To create an inclusive international forum where scientific knowledge, technological innovation, and interdisciplinary collaboration contribute toward practical and sustainable solutions for the challenges of tomorrow.';

const DEFAULT_MISSION: string[] = [
  'Promote interdisciplinary research and knowledge exchange.',
  'Connect academic research with industrial and technological applications.',
  'Encourage innovative approaches to sustainability and responsible development.',
  'Provide researchers and students with a platform to showcase their work.',
  'Foster national and international collaborations among researchers, institutions, and industry.',
  'Inspire emerging researchers to develop solutions with meaningful societal and environmental impact.',
];

const DEFAULT_CLOSING =
  'CBTS 2026 welcomes ideas, discoveries, and innovations that can transform scientific understanding into sustainable solutions and contribute to a more resilient and technologically advanced future.';

const DEFAULT_DESCRIPTION = [
  {
    _type: 'block',
    children: [
      {
        _type: 'span',
        text: 'The International Conference on Chemical, Biological & Technological Sciences for Sustainability (CBTS 2026) is a multidisciplinary platform that brings together researchers, academicians, scientists, industry professionals, innovators, and students to explore emerging advances at the intersection of chemical, biological, and technological sciences.',
      },
    ],
  },
  {
    _type: 'block',
    children: [
      {
        _type: 'span',
        text: 'CBTS 2026 is centered on the theme of science, innovation, and technology for a sustainable future. The conference provides an opportunity to present cutting-edge research, exchange knowledge, discuss emerging challenges, and develop meaningful collaborations across disciplines.',
      },
    ],
  },
  {
    _type: 'block',
    children: [
      {
        _type: 'span',
        text: 'The conference will feature research presentations, keynote sessions, technical discussions, and collaborative interactions covering contemporary developments in chemical sciences, biological sciences, biotechnology, environmental sciences, computational technologies, artificial intelligence, advanced materials, and related interdisciplinary areas.',
      },
    ],
  },
];

export default function AboutSection({
  enabled,
  description,
  vision,
  missionPoints,
  closingStatement,
}: AboutSectionProps) {
  if (!enabled) return null;

  const desc = description && description.length > 0 ? description : DEFAULT_DESCRIPTION;
  const visionText = vision || DEFAULT_VISION;
  const missionList = missionPoints && missionPoints.length > 0 ? missionPoints : DEFAULT_MISSION;
  const closing = closingStatement || DEFAULT_CLOSING;

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section badge + heading ── */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Info className="w-3.5 h-3.5 text-blue-500" aria-hidden="true" />
            <span>About The Conference</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            CBTS 2026
          </h2>
          <div className="mt-3 flex justify-center gap-1.5">
            <span className="h-1 w-10 rounded-full bg-blue-600" />
            <span className="h-1 w-4 rounded-full bg-indigo-400" />
            <span className="h-1 w-2 rounded-full bg-slate-300" />
          </div>
        </div>

        {/* ── Intro paragraphs (Portable Text) ── */}
        <div className="max-w-4xl mx-auto mb-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-headings:text-slate-900 prose-a:text-blue-600 prose-strong:text-slate-800">
            <PortableText value={desc} />
          </div>
        </div>

        {/* ── Vision & Mission cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

          {/* Vision card */}
          <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-7 sm:p-8 text-white shadow-lg overflow-hidden">
            {/* decorative circle */}
            <span
              className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/10 pointer-events-none"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/10 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm">
                  <Eye className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">Our Vision</h3>
              </div>
              <p className="text-blue-100 leading-relaxed text-base">
                {visionText}
              </p>
            </div>
          </div>

          {/* Mission card */}
          <div className="relative bg-gradient-to-br from-teal-600 to-emerald-700 rounded-2xl p-7 sm:p-8 text-white shadow-lg overflow-hidden">
            <span
              className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/10 pointer-events-none"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/10 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm">
                  <Target className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">Our Mission</h3>
              </div>
              <ul className="space-y-2.5">
                {missionList.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-teal-50 text-sm leading-relaxed">
                    <CheckCircle2 className="shrink-0 w-4 h-4 mt-0.5 text-emerald-300" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Closing statement ── */}
        <div className="max-w-4xl mx-auto flex items-start gap-4 bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-7">
          <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 mt-0.5">
            <Sparkles className="w-5 h-5 text-amber-600" aria-hidden="true" />
          </div>
          <p className="text-slate-700 text-base leading-relaxed">
            {closing}
          </p>
        </div>

      </div>
    </section>
  );
}
