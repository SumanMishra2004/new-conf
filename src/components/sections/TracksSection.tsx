'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Layers, ChevronDown, ChevronUp } from 'lucide-react';
import { urlFor } from '@/sanity/lib/image';

interface TrackItem {
  _key?: string;
  title: string;
  subthemes?: string[];
}

interface TracksSectionProps {
  enabled?: boolean;
  sectionTitle?: string;
  sectionSubtitle?: string;
  tracksImage?: { asset?: any; alt?: string };
  tracks?: TrackItem[];
}

// 16 rotating colour palettes
const PALETTES = [
  { num: 'text-blue-600',   border: 'border-blue-200',   bg: 'bg-blue-50',    dot: 'bg-blue-500',    hover: 'hover:border-blue-400 hover:shadow-blue-100'   },
  { num: 'text-indigo-600', border: 'border-indigo-200', bg: 'bg-indigo-50',  dot: 'bg-indigo-500',  hover: 'hover:border-indigo-400 hover:shadow-indigo-100' },
  { num: 'text-violet-600', border: 'border-violet-200', bg: 'bg-violet-50',  dot: 'bg-violet-500',  hover: 'hover:border-violet-400 hover:shadow-violet-100' },
  { num: 'text-purple-600', border: 'border-purple-200', bg: 'bg-purple-50',  dot: 'bg-purple-500',  hover: 'hover:border-purple-400 hover:shadow-purple-100' },
  { num: 'text-teal-600',   border: 'border-teal-200',   bg: 'bg-teal-50',    dot: 'bg-teal-500',    hover: 'hover:border-teal-400 hover:shadow-teal-100'     },
  { num: 'text-cyan-600',   border: 'border-cyan-200',   bg: 'bg-cyan-50',    dot: 'bg-cyan-500',    hover: 'hover:border-cyan-400 hover:shadow-cyan-100'     },
  { num: 'text-emerald-600',border: 'border-emerald-200',bg: 'bg-emerald-50', dot: 'bg-emerald-500', hover: 'hover:border-emerald-400 hover:shadow-emerald-100'},
  { num: 'text-green-600',  border: 'border-green-200',  bg: 'bg-green-50',   dot: 'bg-green-500',   hover: 'hover:border-green-400 hover:shadow-green-100'   },
  { num: 'text-sky-600',    border: 'border-sky-200',    bg: 'bg-sky-50',     dot: 'bg-sky-500',     hover: 'hover:border-sky-400 hover:shadow-sky-100'       },
  { num: 'text-rose-600',   border: 'border-rose-200',   bg: 'bg-rose-50',    dot: 'bg-rose-500',    hover: 'hover:border-rose-400 hover:shadow-rose-100'     },
  { num: 'text-orange-600', border: 'border-orange-200', bg: 'bg-orange-50',  dot: 'bg-orange-500',  hover: 'hover:border-orange-400 hover:shadow-orange-100' },
  { num: 'text-amber-600',  border: 'border-amber-200',  bg: 'bg-amber-50',   dot: 'bg-amber-500',   hover: 'hover:border-amber-400 hover:shadow-amber-100'   },
  { num: 'text-lime-600',   border: 'border-lime-200',   bg: 'bg-lime-50',    dot: 'bg-lime-500',    hover: 'hover:border-lime-400 hover:shadow-lime-100'     },
  { num: 'text-fuchsia-600',border: 'border-fuchsia-200',bg: 'bg-fuchsia-50', dot: 'bg-fuchsia-500', hover: 'hover:border-fuchsia-400 hover:shadow-fuchsia-100'},
  { num: 'text-pink-600',   border: 'border-pink-200',   bg: 'bg-pink-50',    dot: 'bg-pink-500',    hover: 'hover:border-pink-400 hover:shadow-pink-100'     },
  { num: 'text-slate-600',  border: 'border-slate-200',  bg: 'bg-slate-50',   dot: 'bg-slate-500',   hover: 'hover:border-slate-400 hover:shadow-slate-100'   },
];

// Default fallback tracks matching the 16 CBTS 2026 themes
const DEFAULT_TRACKS: TrackItem[] = [
  {
    title: 'Advanced Chemical Sciences & Sustainable Chemistry',
    subthemes: [
      'Green Chemistry',
      'Organic & Inorganic Chemistry',
      'Analytical Chemistry',
      'Catalysis & Sustainable Processes',
      'Electrochemistry',
      'Chemical Process Optimization',
    ],
  },
  {
    title: 'Advanced Materials & Functional Nanomaterials',
    subthemes: [
      'Nanomaterials & Nanocomposites',
      'Graphene & 2D Materials',
      'Functional Carbon Materials',
      'Smart Materials',
      'Surface Engineering',
      'Hybrid & Bio-inspired Materials',
    ],
  },
  {
    title: 'Environmental Science, Pollution Control & Remediation',
    subthemes: [
      'Air, Water & Soil Pollution',
      'Heavy Metals & Emerging Contaminants',
      'Adsorption & Remediation Technologies',
      'Bioremediation & Phytoremediation',
      'Environmental Monitoring',
      'Sustainable Pollution-Control Technologies',
    ],
  },
  {
    title: 'Water Science, Wastewater Treatment & Water Security',
    subthemes: [
      'Water Quality & Safety',
      'Wastewater Treatment',
      'Membrane Technologies',
      'Desalination & Water Reuse',
      'Groundwater Remediation',
      'Water Security & Sustainability',
    ],
  },
  {
    title: 'Biological Sciences & Biotechnology',
    subthemes: [
      'Molecular Biology & Genetics',
      'Microbiology',
      'Industrial Biotechnology',
      'Agricultural Biotechnology',
      'Synthetic Biology',
      'Bioinformatics',
    ],
  },
  {
    title: 'Biomedical Science, Health & Therapeutic Technologies',
    subthemes: [
      'Drug Discovery & Development',
      'Drug Delivery Systems',
      'Nanomedicine',
      'Biosensors',
      'Biomedical Imaging & Diagnostics',
      'Tissue Engineering',
    ],
  },
  {
    title: 'Renewable Energy & Green Technologies',
    subthemes: [
      'Solar Energy',
      'Hydrogen Energy',
      'Fuel Cells',
      'Bioenergy & Biofuels',
      'Wind Energy',
      'Photocatalytic Energy Conversion',
    ],
  },
  {
    title: 'Energy Storage & Next-Generation Energy Materials',
    subthemes: [
      'Lithium/Sodium-Ion Batteries',
      'Solid-State Batteries',
      'Supercapacitors',
      'Hydrogen Storage',
      'Metal-Air Batteries',
      'Advanced Electrode Materials',
    ],
  },
  {
    title: 'Artificial Intelligence, Machine Learning & Computational Science',
    subthemes: [
      'AI in Scientific Research',
      'Computational Chemistry',
      'Materials Informatics',
      'Data Science & Big Data Analytics',
      'Predictive Modelling',
      'AI for Sustainable Development',
    ],
  },
  {
    title: 'Sensors, Biosensors & Smart Detection Technologies',
    subthemes: [
      'Chemical Sensors',
      'Biosensors',
      'Nanobiosensors',
      'Optical & Electrochemical Sensors',
      'Wearable Sensors',
      'Sensor Integration with IoT & AI',
    ],
  },
  {
    title: 'Biotechnology for Sustainable Development & Circular Bioeconomy',
    subthemes: [
      'Waste-to-Value Biotechnology',
      'Food-Waste Valorization',
      'Biomass Conversion',
      'Bioplastics',
      'Bio-based Chemicals',
      'Sustainable Biomanufacturing',
    ],
  },
  {
    title: 'Sustainable Agriculture, Food Science & Agrotechnology',
    subthemes: [
      'Precision Agriculture',
      'Soil Health & Remediation',
      'Biofertilizers & Biopesticides',
      'Food Chemistry & Food Safety',
      'Food-Waste Management',
      'Smart Farming Technologies',
    ],
  },
  {
    title: 'Green Manufacturing, Industrial Innovation & Industry 4.0',
    subthemes: [
      'Sustainable Manufacturing',
      'Green Production Technologies',
      'Smart Manufacturing',
      'Industrial Automation',
      'Process Intensification',
      'Industry–Academia Collaboration',
    ],
  },
  {
    title: 'Climate Change, Environmental Sustainability & Circular Economy',
    subthemes: [
      'Climate Change Science',
      'Carbon Capture & Utilization',
      'Circular Economy',
      'Waste Minimization',
      'Sustainable Consumption & Production',
      'Life-Cycle Assessment',
    ],
  },
  {
    title: 'Digital & Emerging Technologies',
    subthemes: [
      'IoT',
      'Robotics',
      'Digital Twins',
      'Quantum Technologies',
      'Cloud & Edge Computing',
      'Emerging Interdisciplinary Technologies',
    ],
  },
  {
    title: 'Sustainable Materials & Future Innovations',
    subthemes: [
      'Green Nanotechnology',
      'Bio-Derived Materials',
      'Advanced Composites',
      'Functional Thin Films',
      'Sustainable Construction Materials',
      'Technology Innovations for a Sustainable Future',
    ],
  },
];

function TrackCard({ track, index }: { track: TrackItem; index: number }) {
  const [expanded, setExpanded] = useState(true);
  const palette = PALETTES[index % PALETTES.length];
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      className={`group bg-white border ${palette.border} rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${palette.hover} flex flex-col`}
    >
      {/* Card header */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left flex items-start gap-3 p-5 focus:outline-none"
        aria-expanded={expanded}
      >
        <span
          className={`shrink-0 text-2xl font-black ${palette.num} leading-none mt-0.5 select-none w-8`}
        >
          {num}
        </span>
        <span className="flex-1 text-slate-800 font-semibold text-sm sm:text-base leading-snug group-hover:text-slate-900 transition-colors">
          {track.title}
        </span>
        <span className={`shrink-0 mt-0.5 ${palette.num}`}>
          {expanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </span>
      </button>

      {/* Sub-themes bullet list */}
      {expanded && track.subthemes && track.subthemes.length > 0 && (
        <div className={`px-5 pb-5 ${palette.bg} border-t ${palette.border}`}>
          <ul className="mt-3 space-y-1.5">
            {track.subthemes.map((sub, si) => (
              <li key={si} className="flex items-start gap-2 text-slate-600 text-sm">
                <span
                  className={`shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full ${palette.dot}`}
                  aria-hidden="true"
                />
                {sub}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function TracksSection({
  enabled,
  sectionTitle,
  sectionSubtitle,
  tracksImage,
  tracks,
}: TracksSectionProps) {
  if (!enabled) return null;

  const displayTracks = tracks && tracks.length > 0 ? tracks : DEFAULT_TRACKS;
  const imageUrl =
    tracksImage?.asset
      ? urlFor(tracksImage).width(1600).height(600).fit('crop').auto('format').url()
      : null;
  const imageAlt = tracksImage?.alt || 'Conference tracks banner';

  return (
    <section id="tracks" className="py-0 bg-white border-b border-slate-100">
      {/* ── Full-width banner image ── */}
      {imageUrl && (
        <div className="relative w-full h-56 sm:h-72 md:h-96 overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
          {/* soft gradient overlay so text beneath reads cleanly */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* ── Section heading ── */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-teal-500" aria-hidden="true" />
            <span>Call For Papers</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {sectionTitle || 'Conference Themes & Subthemes'}
          </h2>
          {(sectionSubtitle || !sectionTitle) && (
            <p className="mt-3 text-slate-500 text-base sm:text-lg">
              {sectionSubtitle ||
                'International Conference on Chemical, Biological & Technological Sciences for Sustainability'}
            </p>
          )}
        </div>

        {/* ── Tracks grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {displayTracks.map((track, index) => (
            <TrackCard key={track._key || index} track={track} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
