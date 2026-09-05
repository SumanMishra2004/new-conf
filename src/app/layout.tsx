import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// ─── Core conference constants ────────────────────────────────────────────────
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cbtscon.in";
const CONF_NAME =
  "International Conference on Chemical, Biological & Technological Sciences for Sustainability";
const CONF_SHORT = "CBTS 2026";
const CONF_DATES = "December 12–13, 2026";
const CONF_LOCATION = "Hybrid — On-Site & Virtual";
const DEFAULT_TITLE = `${CONF_SHORT} — ${CONF_NAME}`;
const DEFAULT_DESCRIPTION =
  "CBTS 2026 is a global hybrid conference bringing together researchers, scientists, academicians, and industry leaders to explore sustainable solutions across chemical, biological, and technological sciences. Join us on October 15–17, 2026.";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

// ─── Viewport / theme ─────────────────────────────────────────────────────────
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#147d72" },
    { media: "(prefers-color-scheme: dark)", color: "#0f5e56" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

// ─── Root metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // ── Title template ──────────────────────────────────────────────────────────
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${CONF_SHORT}`,
  },

  // ── Basic ────────────────────────────────────────────────────────────────────
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "CBTS 2026",
    "chemical sciences conference",
    "biological sciences conference",
    "technological sciences conference",
    "sustainability conference 2026",
    "hybrid international conference",
    "call for papers 2026",
    "research conference",
    "academic conference",
    "Scopus indexed conference",
  ],
  authors: [{ name: CONF_SHORT, url: SITE_URL }],
  creator: CONF_SHORT,
  publisher: CONF_SHORT,

  // ── Canonical & alternates ───────────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
  },

  // ── Open Graph ───────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: CONF_SHORT,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${CONF_SHORT} — ${CONF_DATES} — ${CONF_LOCATION}`,
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X ──────────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
    // site: "@cbts2026",      // uncomment when you have a Twitter handle
    // creator: "@cbts2026",
  },

  // ── Icons (App Router convention) ────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  // ── Web app manifest ─────────────────────────────────────────────────────────
  manifest: "/site.webmanifest",

  // ── Robots ───────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Miscellaneous ────────────────────────────────────────────────────────────
  category: "conference",
  classification: "Academic Conference",
};

// ─── JSON-LD structured data ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: CONF_NAME,
  alternateName: CONF_SHORT,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  startDate: "2026-10-15",
  endDate: "2026-10-17",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
  location: [
    {
      "@type": "VirtualLocation",
      url: SITE_URL,
    },
  ],
  organizer: {
    "@type": "Organization",
    name: CONF_SHORT,
    url: SITE_URL,
  },
  image: OG_IMAGE,
  inLanguage: "en",
  isAccessibleForFree: false,
};

// ─── Layout ───────────────────────────────────────────────────────────────────
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD structured data for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
