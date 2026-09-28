import {
  getHomePageData,
  getSpeakers,
  getCommitteeMembers,
  getRegistrationCategories,
  getSponsors,
  getFaqs,
  getContactInfo,
  getSiteSettings,
} from '@/lib/sanity/queries';
import Navbar from '@/components/layout/Navbar';

// Revalidate this page at most every 60 seconds (ISR).
// Sanity publishes → next visitor within 60 s sees the change,
// no redeploy required.  The /api/revalidate webhook makes it instant.
export const revalidate = 60;
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AnnouncementSection from '@/components/sections/AnnouncementSection';
import AboutSection from '@/components/sections/AboutSection';
import TracksSection from '@/components/sections/TracksSection';
import ImportantDatesSection from '@/components/sections/ImportantDatesSection';
import KeynoteSpeakersSection from '@/components/sections/KeynoteSpeakersSection';
import CommitteeSection from '@/components/sections/CommitteeSection';
import RegistrationSection from '@/components/sections/RegistrationSection';
import VenueSection from '@/components/sections/VenueSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';

export default async function Home() {
  const [
    homeData,
    speakers,
    committeeMembers,
    categories,
    sponsors,
    faqs,
    contactInfo,
    siteSettings,
  ] = await Promise.all([
    getHomePageData(),
    getSpeakers(),
    getCommitteeMembers(),
    getRegistrationCategories(),
    getSponsors(),
    getFaqs(),
    getContactInfo(),
    getSiteSettings(),
  ]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {/* Top Header Navbar */}
      <Navbar settings={siteSettings} />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          badgeText={homeData?.heroBadgeText}
          titleLine1={homeData?.heroTitleLine1}
          titleLine2={homeData?.heroTitleLine2}
          titleLine3={homeData?.heroTitleLine3}
          acronym={homeData?.heroAcronym}
          description={homeData?.heroDescription}
          eventDate={homeData?.heroEventDate}
          eventMode={homeData?.heroEventMode}
          primaryButtonText={homeData?.heroPrimaryButtonText}
          primaryButtonLink={homeData?.heroPrimaryButtonLink}
          secondaryButtonText={homeData?.heroSecondaryButtonText}
          secondaryButtonLink={homeData?.heroSecondaryButtonLink}
          subjectAreas={homeData?.heroSubjectAreas}
        />

        {/* Announcement Section */}
        <AnnouncementSection
          enabled={homeData?.enableAnnouncement ?? true}
          text={
            homeData?.announcementText ||
            'Paper submission deadline extended to 30 September 2026. Register early for author discounts!'
          }
        />

        {/* About Section */}
        <AboutSection
          enabled={homeData?.enableAbout ?? true}
          description={homeData?.aboutDescription}
          vision={homeData?.aboutVision}
          missionPoints={homeData?.aboutMissionPoints}
          closingStatement={homeData?.aboutClosingStatement}
        />

        {/* Tracks Section */}
        <TracksSection
          enabled={homeData?.enableTracks ?? true}
          sectionTitle={homeData?.tracksSectionTitle}
          sectionSubtitle={homeData?.tracksSectionSubtitle}
          tracksImage={homeData?.tracksImage}
          tracks={homeData?.tracks}
        />

        {/* Important Dates Section */}
        <ImportantDatesSection
          enabled={homeData?.enableImportantDates ?? true}
          importantDates={
            homeData?.importantDates || [
              {
                title: 'Paper Submission',
                subtitle: 'Full paper submission deadline',
                date: '30 September 2026',
              },
              {
                title: 'Acceptance Notification',
                subtitle: 'Review result notification to authors',
                date: '15 October 2026',
              },
              {
                title: 'Camera Ready Paper',
                subtitle: 'Final paper upload & registration',
                date: '30 October 2026',
              },
              {
                title: 'Conference Event',
                subtitle: 'Official conference dates',
                date: '15-17 November 2026',
              },
            ]
          }
        />

        {/* Keynote Speakers Section */}
        <KeynoteSpeakersSection
          speakers={
            speakers.length > 0
              ? speakers
              : [
                  {
                    _id: 'demo-1',
                    name: 'Dr. Elena Rostova',
                    designation: 'Professor of AI Architecture',
                    organization: 'Stanford Tech Institute',
                  },
                  {
                    _id: 'demo-2',
                    name: 'Prof. Marcus Vance',
                    designation: 'Director of Quantum Research',
                    organization: 'MIT Innovation Lab',
                  },
                  {
                    _id: 'demo-3',
                    name: 'Sarah Jenkins',
                    designation: 'Head of Sustainable Systems',
                    organization: 'Global Energy Tech',
                  },
                ]
          }
        />

        {/* Committee Section */}
        <CommitteeSection
          committeeMembers={
            committeeMembers.length > 0
              ? committeeMembers
              : [
                  {
                    _id: 'c-1',
                    name: 'Prof. Arthur Pendelton',
                    role: 'Chief Patron',
                    organization: 'Vice Chancellor, University Tech',
                  },
                  {
                    _id: 'c-2',
                    name: 'Dr. Maria Santos',
                    role: 'General Chair',
                    organization: 'Department of Computer Science',
                  },
                  {
                    _id: 'c-3',
                    name: 'Dr. Rajiv Kumar',
                    role: 'Conference Chair',
                    organization: 'IEEE Senior Member',
                  },
                ]
          }
        />

        {/* Registration Section */}
        <RegistrationSection
          enabled={homeData?.enableRegistration ?? true}
          googleFormUrl={homeData?.googleFormUrl || 'https://forms.google.com'}
          categories={
            categories.length > 0
              ? categories
              : [
                  { _id: 'cat-1', name: 'Student / Scholar', fee: '$150 / ₹3,000' },
                  { _id: 'cat-2', name: 'Faculty / Academician', fee: '$250 / ₹5,000' },
                  { _id: 'cat-3', name: 'Industry Delegate', fee: '$350 / ₹7,500' },
                  { _id: 'cat-4', name: 'International Participant', fee: '$400' },
                ]
          }
        />

        {/* Venue Section */}
        <VenueSection
          enabled={homeData?.enableVenue ?? true}
          name={homeData?.venueName || 'Grand International Convention Center'}
          address={
            homeData?.venueAddress ||
            '100 Tech Boulevard, Innovation District, Silicon Valley, CA 94025'
          }
          iframeHtml={
            homeData?.googleMapsIframe ||
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.647313880496!2d-122.08385108469248!3d37.421999979825215!2m3!1f0!0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614123456789!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
          }
        />

        {/* Sponsors Section */}
        <SponsorsSection
          sponsors={
            sponsors.length > 0
              ? sponsors
              : [
                  { _id: 's-1', name: 'TechGlobal', logo: null, category: 'Platinum' },
                  { _id: 's-2', name: 'AI Research Lab', logo: null, category: 'Gold' },
                  { _id: 's-3', name: 'CloudScale', logo: null, category: 'Silver' },
                ]
          }
        />

        {/* FAQ Section */}
        <FaqSection
          faqs={
            faqs.length > 0
              ? faqs
              : [
                  {
                    _id: 'f-1',
                    question: 'How do I submit my full paper?',
                    answer:
                      'Papers can be submitted through our Microsoft CMT portal before the 30th September 2026 deadline.',
                  },
                  {
                    _id: 'f-2',
                    question: 'Will accepted papers be published in indexed journals?',
                    answer:
                      'Yes, selected high-quality accepted papers will be published in Scopus/WoS indexed conference proceedings.',
                  },
                  {
                    _id: 'f-3',
                    question: 'Can I participate virtually?',
                    answer:
                      'Yes, ICST 2026 is a hybrid conference supporting both physical on-site and remote online presentations.',
                  },
                ]
          }
        />

        {/* Contact Section */}
        <ContactSection
          contactInfo={
            contactInfo || {
              emails: ['secretariat@icst2026.org', 'queries@icst2026.org'],
              phoneNumbers: ['+1 (555) 019-2834', '+1 (555) 019-5678'],
            }
          }
        />
      </main>

      {/* Footer */}
      <Footer settings={siteSettings} contactInfo={contactInfo} />
    </div>
  );
}
