import React from 'react';
import { Users2, Building2 } from 'lucide-react';
import { CommitteeMemberData } from '@/lib/sanity/queries';

interface CommitteeSectionProps {
  committeeMembers?: CommitteeMemberData[];
}

const ROLE_ORDER = [
  'Chief Patron',
  'Patron',
  'General Chair',
  'Conference Chair',
  'Organizing Chair',
  'Technical Committee',
  'Advisory Committee',
  'Other',
];

// Color accent for each role group header
const ROLE_COLORS: Record<string, { badge: string; dot: string }> = {
  'Chief Patron':        { badge: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500' },
  'Patron':              { badge: 'bg-orange-50 text-orange-700 border-orange-200', dot: 'bg-orange-500' },
  'General Chair':       { badge: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-500' },
  'Conference Chair':    { badge: 'bg-indigo-50 text-indigo-700 border-indigo-200', dot: 'bg-indigo-500' },
  'Organizing Chair':    { badge: 'bg-violet-50 text-violet-700 border-violet-200', dot: 'bg-violet-500' },
  'Technical Committee': { badge: 'bg-sky-50 text-sky-700 border-sky-200', dot: 'bg-sky-500' },
  'Advisory Committee':  { badge: 'bg-teal-50 text-teal-700 border-teal-200', dot: 'bg-teal-500' },
  'Other':               { badge: 'bg-slate-50 text-slate-700 border-slate-200', dot: 'bg-slate-400' },
};

export default function CommitteeSection({ committeeMembers }: CommitteeSectionProps) {
  if (!committeeMembers || committeeMembers.length === 0) {
    return null;
  }

  const grouped = ROLE_ORDER.reduce((acc, roleKey) => {
    acc[roleKey] = committeeMembers.filter((m) => {
      if (roleKey === 'Other') return m.role === 'Other';
      return m.role === roleKey;
    });
    return acc;
  }, {} as Record<string, CommitteeMemberData[]>);

  return (
    <section id="committee" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Users2 className="w-3.5 h-3.5 text-indigo-500" />
            <span>Leadership</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Committee Members
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg">
            Meet the distinguished organizers, patrons, and advisory panel steering the conference.
          </p>
        </div>

        {/* Grouped Roles Display */}
        <div className="space-y-10">
          {ROLE_ORDER.map((roleGroup) => {
            const members = grouped[roleGroup];
            if (!members || members.length === 0) return null;
            const colors = ROLE_COLORS[roleGroup] || ROLE_COLORS['Other'];

            return (
              <div key={roleGroup} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
                {/* Role group header */}
                <div className="flex items-center gap-3 pb-5 mb-6 border-b border-slate-200">
                  <span className={`w-2.5 h-2.5 rounded-full ${colors.dot} shrink-0`} />
                  <h3 className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-lg border ${colors.badge}`}>
                    {roleGroup}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {members.map((member) => {
                    const displayRoleTitle =
                      member.role === 'Other' ? member.customRole || 'Committee Member' : member.role;

                    return (
                      <div
                        key={member._id}
                        className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-blue-300 hover:shadow-md hover:shadow-blue-50 transition-all duration-200"
                      >
                        <div>
                          <h4 className="text-base font-bold text-slate-900">{member.name}</h4>
                          <p className="text-xs font-semibold text-blue-600 mt-1">{displayRoleTitle}</p>
                        </div>
                        <div className="flex items-center gap-1.5 mt-3">
                          <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <p className="text-xs text-slate-500 font-normal">{member.organization}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
