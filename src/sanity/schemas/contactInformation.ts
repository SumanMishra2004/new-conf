export const contactInformationSchema = {
  name: 'contactInformation',
  title: 'Contact Information',
  type: 'document',
  fields: [
    {
      name: 'emails',
      title: 'Email Addresses',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.min(1),
    },
    {
      name: 'phoneNumbers',
      title: 'Phone Numbers',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.min(1),
    },
  ],
  preview: {
    prepare() {
      return { title: 'Contact Information Configuration' };
    },
  },
};
