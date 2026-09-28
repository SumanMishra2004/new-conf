import { client } from '@/sanity/lib/client';

export interface HomePageData {
  // Hero
  enableHero?: boolean;
  heroBadgeText?: string;
  heroTitleLine1?: string;
  heroTitleLine2?: string;
  heroTitleLine3?: string;
  heroAcronym?: string;
  heroDescription?: string;
  heroEventDate?: string;
  heroEventMode?: string;
  heroPrimaryButtonText?: string;
  heroPrimaryButtonLink?: string;
  heroSecondaryButtonText?: string;
  heroSecondaryButtonLink?: string;
  heroSubjectAreas?: string[];
  // Announcement
  enableAnnouncement?: boolean;
  announcementText?: string;
  enableAbout?: boolean;
  aboutDescription?: any;
  enableTracks?: boolean;
  tracksSectionTitle?: string;
  tracksSectionSubtitle?: string;
  tracksImage?: { asset?: any; alt?: string; hotspot?: any; crop?: any };
  tracks?: Array<{ _key?: string; title: string; subthemes?: string[] }>;
  enableImportantDates?: boolean;
  importantDates?: Array<{ _key?: string; title: string; subtitle: string; date: string }>;
  enableRegistration?: boolean;
  googleFormUrl?: string;
  enableVenue?: boolean;
  venueName?: string;
  venueAddress?: string;
  googleMapsIframe?: string;
}

export interface SpeakerData {
  _id: string;
  name: string;
  profileImage?: any;
  designation?: string;
  organization?: string;
  enable?: boolean;
  displayOrder?: number;
}

export interface CommitteeMemberData {
  _id: string;
  name: string;
  role: string;
  customRole?: string;
  organization: string;
  enable?: boolean;
  displayOrder?: number;
}

export interface RegistrationCategoryData {
  _id: string;
  name: string;
  fee: string;
  enable?: boolean;
  displayOrder?: number;
}

export interface SponsorData {
  _id: string;
  name: string;
  logo: any;
  category: string;
  enable?: boolean;
  displayOrder?: number;
}

export interface FaqData {
  _id: string;
  question: string;
  answer: string;
  enable?: boolean;
  displayOrder?: number;
}

export interface ContactInfoData {
  emails?: string[];
  phoneNumbers?: string[];
}

export interface GalleryAlbumData {
  _id: string;
  albumName: string;
  description?: string;
  enable?: boolean;
  displayOrder?: number;
  images?: Array<{
    _key?: string;
    image: any;
    altText: string;
    caption?: string;
    enable?: boolean;
    displayOrder?: number;
  }>;
}

export interface SiteSettingsData {
  enableGalleryPage?: boolean;
  showGalleryInNavbar?: boolean;
  showGalleryInFooter?: boolean;
  enablePublicationsPage?: boolean;
  showPublicationsInNavbar?: boolean;
  showPublicationsInFooter?: boolean;
}

export async function getHomePageData(): Promise<HomePageData | null> {
  try {
    const data = await client.fetch(`*[_type == "homePage"][0]`);
    return data || null;
  } catch (error) {
    console.warn('Sanity query error (homePage):', error);
    return null;
  }
}

export async function getSpeakers(): Promise<SpeakerData[]> {
  try {
    const data = await client.fetch(
      `*[_type == "speaker" && enable == true] | order(displayOrder asc, _createdAt asc)`
    );
    return data || [];
  } catch (error) {
    console.warn('Sanity query error (speakers):', error);
    return [];
  }
}

export async function getCommitteeMembers(): Promise<CommitteeMemberData[]> {
  try {
    const data = await client.fetch(
      `*[_type == "committeeMember" && enable == true] | order(displayOrder asc, _createdAt asc)`
    );
    return data || [];
  } catch (error) {
    console.warn('Sanity query error (committeeMembers):', error);
    return [];
  }
}

export async function getRegistrationCategories(): Promise<RegistrationCategoryData[]> {
  try {
    const data = await client.fetch(
      `*[_type == "registrationCategory" && enable == true] | order(displayOrder asc, _createdAt asc)`
    );
    return data || [];
  } catch (error) {
    console.warn('Sanity query error (registrationCategories):', error);
    return [];
  }
}

export async function getSponsors(): Promise<SponsorData[]> {
  try {
    const data = await client.fetch(
      `*[_type == "sponsor" && enable == true] | order(displayOrder asc, _createdAt asc)`
    );
    return data || [];
  } catch (error) {
    console.warn('Sanity query error (sponsors):', error);
    return [];
  }
}

export async function getFaqs(): Promise<FaqData[]> {
  try {
    const data = await client.fetch(
      `*[_type == "faq" && enable == true] | order(displayOrder asc, _createdAt asc)`
    );
    return data || [];
  } catch (error) {
    console.warn('Sanity query error (faqs):', error);
    return [];
  }
}

export async function getContactInfo(): Promise<ContactInfoData | null> {
  try {
    const data = await client.fetch(`*[_type == "contactInformation"][0]`);
    return data || null;
  } catch (error) {
    console.warn('Sanity query error (contactInformation):', error);
    return null;
  }
}

export async function getGalleryAlbums(): Promise<GalleryAlbumData[]> {
  try {
    const data = await client.fetch(
      `*[_type == "galleryAlbum" && enable == true] | order(displayOrder asc, _createdAt asc)`
    );
    return data || [];
  } catch (error) {
    console.warn('Sanity query error (galleryAlbums):', error);
    return [];
  }
}

export async function getSiteSettings(): Promise<SiteSettingsData | null> {
  try {
    const data = await client.fetch(`*[_type == "siteSettings"][0]`);
    return data || null;
  } catch (error) {
    console.warn('Sanity query error (siteSettings):', error);
    return null;
  }
}
