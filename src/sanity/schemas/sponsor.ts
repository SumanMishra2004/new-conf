export const SPONSOR_CATEGORIES = [
  { title: 'Platinum', value: 'Platinum' },
  { title: 'Gold', value: 'Gold' },
  { title: 'Silver', value: 'Silver' },
  { title: 'Partner', value: 'Partner' },
  { title: 'Media Partner', value: 'Media Partner' },
  { title: 'Other', value: 'Other' },
];

export const sponsorSchema = {
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Sponsor Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Sponsor Logo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Sponsor Category',
      type: 'string',
      options: {
        list: SPONSOR_CATEGORIES,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'enable',
      title: 'Enable / Disable Sponsor',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'logo',
    },
  },
};
