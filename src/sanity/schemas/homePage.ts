export const homePageSchema = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // Section 1: Hero
    {
      name: 'enableHero',
      title: 'Enable Hero Section',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'heroBadgeText',
      title: 'Badge Text',
      type: 'string',
      description: 'Short label shown in the pill badge, e.g. "International Conference · 2026"',
      hidden: ({ parent }: any) => !parent?.enableHero,
    },
    {
      name: 'heroTitleLine1',
      title: 'Title – Line 1',
      type: 'string',
      description: 'e.g. "International Conference on"',
      hidden: ({ parent }: any) => !parent?.enableHero,
    },
    {
      name: 'heroTitleLine2',
      title: 'Title – Line 2 (highlighted)',
      type: 'string',
      description: 'Displayed in teal colour, e.g. "Chemical, Biological & Technological Sciences"',
      hidden: ({ parent }: any) => !parent?.enableHero,
    },
    {
      name: 'heroTitleLine3',
      title: 'Title – Line 3',
      type: 'string',
      description: 'e.g. "for Sustainability"',
      hidden: ({ parent }: any) => !parent?.enableHero,
    },
    {
      name: 'heroAcronym',
      title: 'Conference Acronym',
      type: 'string',
      description: 'e.g. "CBTS 2026"',
      hidden: ({ parent }: any) => !parent?.enableHero,
    },
    {
      name: 'heroDescription',
      title: 'Description',
      type: 'text',
      rows: 3,
      hidden: ({ parent }: any) => !parent?.enableHero,
    },
    {
      name: 'heroEventDate',
      title: 'Event Date',
      type: 'string',
      description: 'e.g. "October 15–17, 2026"',
      hidden: ({ parent }: any) => !parent?.enableHero,
    },
    {
      name: 'heroEventMode',
      title: 'Event Mode',
      type: 'string',
      description: 'e.g. "Hybrid · On-Site & Virtual"',
      hidden: ({ parent }: any) => !parent?.enableHero,
    },
    {
      name: 'heroPrimaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
      description: 'e.g. "Register Now"',
      hidden: ({ parent }: any) => !parent?.enableHero,
    },
    {
      name: 'heroPrimaryButtonLink',
      title: 'Primary Button Link',
      type: 'string',
      description: 'e.g. "#registration"',
      hidden: ({ parent }: any) => !parent?.enableHero,
    },
    {
      name: 'heroSecondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
      description: 'e.g. "View Call for Papers"',
      hidden: ({ parent }: any) => !parent?.enableHero,
    },
    {
      name: 'heroSecondaryButtonLink',
      title: 'Secondary Button Link',
      type: 'string',
      description: 'e.g. "#tracks"',
      hidden: ({ parent }: any) => !parent?.enableHero,
    },
    {
      name: 'heroSubjectAreas',
      title: 'Subject Areas',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of subject areas shown at the bottom, e.g. "Chemical Sciences"',
      hidden: ({ parent }: any) => !parent?.enableHero,
    },

    // Section 8: Announcement
    {
      name: 'enableAnnouncement',
      title: 'Enable Announcement',
      type: 'boolean',
      initialValue: true,
      description: 'Show horizontal ticker/marquee announcement bar',
    },
    {
      name: 'announcementText',
      title: 'Announcement Text',
      type: 'text',
      rows: 2,
      hidden: ({ parent }: any) => !parent?.enableAnnouncement,
      validation: (Rule: any) =>
        Rule.custom((value: any, context: any) => {
          if (context.parent?.enableAnnouncement && !value) {
            return 'Announcement text is required when Announcement is enabled';
          }
          return true;
        }),
    },

    // Section 9: About
    {
      name: 'enableAbout',
      title: 'Enable About Section',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'aboutDescription',
      title: 'About Description',
      type: 'array',
      of: [{ type: 'block' }],
      hidden: ({ parent }: any) => !parent?.enableAbout,
    },

    // Section 11: Tracks
    {
      name: 'enableTracks',
      title: 'Enable Tracks Section',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'tracksSectionTitle',
      title: 'Tracks Section Title',
      type: 'string',
      description: 'Heading for the tracks section, e.g. "Conference Themes & Subthemes"',
      hidden: ({ parent }: any) => !parent?.enableTracks,
    },
    {
      name: 'tracksSectionSubtitle',
      title: 'Tracks Section Subtitle',
      type: 'text',
      rows: 2,
      description: 'Short description shown below the section heading',
      hidden: ({ parent }: any) => !parent?.enableTracks,
    },
    {
      name: 'tracksImage',
      title: 'Tracks Banner Image',
      type: 'image',
      description: 'Full-width banner image displayed above the tracks grid',
      options: { hotspot: true },
      hidden: ({ parent }: any) => !parent?.enableTracks,
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Short description of the image for accessibility',
        },
      ],
    },
    {
      name: 'tracks',
      title: 'Conference Tracks',
      type: 'array',
      hidden: ({ parent }: any) => !parent?.enableTracks,
      of: [
        {
          type: 'object',
          name: 'trackItem',
          title: 'Track',
          fields: [
            {
              name: 'title',
              title: 'Track Title',
              type: 'string',
              description: 'e.g. "Advanced Chemical Sciences & Sustainable Chemistry"',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'subthemes',
              title: 'Sub-themes',
              type: 'array',
              description: 'Bullet-point sub-topics for this track',
              of: [{ type: 'string' }],
              validation: (Rule: any) => Rule.required().min(1),
            },
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
    },

    // Section 12: Important Dates
    {
      name: 'enableImportantDates',
      title: 'Enable Important Dates Section',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'importantDates',
      title: 'Important Dates',
      type: 'array',
      hidden: ({ parent }: any) => !parent?.enableImportantDates,
      of: [
        {
          type: 'object',
          name: 'importantDateItem',
          title: 'Important Date',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'date',
              title: 'Date',
              type: 'string',
              description: 'e.g. 30 September 2026',
              validation: (Rule: any) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'date',
            },
          },
        },
      ],
    },

    // Section 16: Registration
    {
      name: 'enableRegistration',
      title: 'Enable Registration Section',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'googleFormUrl',
      title: 'Google Form URL',
      type: 'url',
      hidden: ({ parent }: any) => !parent?.enableRegistration,
      validation: (Rule: any) =>
        Rule.custom((value: any, context: any) => {
          if (context.parent?.enableRegistration && !value) {
            return 'Google Form URL is required when Registration is enabled';
          }
          return true;
        }),
    },

    // Section 18: Venue
    {
      name: 'enableVenue',
      title: 'Enable Venue Section',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'venueName',
      title: 'Venue Name',
      type: 'string',
      hidden: ({ parent }: any) => !parent?.enableVenue,
      validation: (Rule: any) =>
        Rule.custom((value: any, context: any) => {
          if (context.parent?.enableVenue && !value) {
            return 'Venue name is required when Venue is enabled';
          }
          return true;
        }),
    },
    {
      name: 'venueAddress',
      title: 'Address',
      type: 'text',
      rows: 2,
      hidden: ({ parent }: any) => !parent?.enableVenue,
      validation: (Rule: any) =>
        Rule.custom((value: any, context: any) => {
          if (context.parent?.enableVenue && !value) {
            return 'Venue address is required when Venue is enabled';
          }
          return true;
        }),
    },
    {
      name: 'googleMapsIframe',
      title: 'Google Maps Iframe HTML',
      type: 'text',
      rows: 4,
      description: 'Paste the <iframe> code from Google Maps share export',
      hidden: ({ parent }: any) => !parent?.enableVenue,
      validation: (Rule: any) =>
        Rule.custom((value: any, context: any) => {
          if (context.parent?.enableVenue && !value) {
            return 'Google Maps Iframe is required when Venue is enabled';
          }
          return true;
        }),
    },
  ],
  preview: {
    prepare() {
      return { title: 'Home Page Configuration' };
    },
  },
};
