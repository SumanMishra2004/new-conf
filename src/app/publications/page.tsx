import { getSiteSettings } from '@/lib/sanity/queries';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BookOpen, FileText, Info } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function PublicationsPage() {
  const siteSettings = await getSiteSettings();

  const isPublicationsEnabled = siteSettings?.enablePublicationsPage ?? true;

  if (!isPublicationsEnabled) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <Navbar settings={siteSettings} />

      <main className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5 text-blue-500" />
              <span>Research Papers</span>
            </div>
            <h1
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Conference Publications
            </h1>
            <p className="mt-4 text-slate-500 text-base sm:text-lg">
              Repository for conference proceedings, published research papers, and technical reports.
            </p>
          </div>

          {/* Coming Soon Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mx-auto mb-6">
              <FileText className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Publications Portal Coming Soon</h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed mb-8">
              All accepted and presented research papers from ICST 2026 will be archived and published
              here following completion of peer review and proceedings indexing.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600">
              <Info className="w-4 h-4 text-blue-500" />
              <span>Publications route &amp; page architecture ready for future PDF asset management.</span>
            </div>
          </div>
        </div>
      </main>

      <Footer settings={siteSettings} />
    </div>
  );
}
