export const homePageSchema = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
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
      name: 'tracks',
      title: 'Conference Tracks',
      type: 'array',
      hidden: ({ parent }: any) => !parent?.enableTracks,
      of: [
        {
          type: 'object',
          name: 'trackItem',
          title: 'Track Item',
          fields: [
            {
              name: 'description',
              title: 'Track Description',
              type: 'text',
              rows: 3,
              validation: (Rule: any) => Rule.required(),
            },
          ],
          preview: {
            select: { title: 'description' },
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
