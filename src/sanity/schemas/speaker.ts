export const speakerSchema = {
  name: 'speaker',
  title: 'Keynote Speaker',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Speaker Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'profileImage',
      title: 'Profile Image (Optional)',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional. If omitted, frontend automatically renders a fallback avatar.',
    },
    {
      name: 'designation',
      title: 'Designation (Optional)',
      type: 'string',
    },
    {
      name: 'organization',
      title: 'Organization (Optional)',
      type: 'string',
    },
    {
      name: 'enable',
      title: 'Enable / Disable Speaker',
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
      subtitle: 'organization',
      media: 'profileImage',
    },
  },
};
