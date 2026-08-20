export const registrationCategorySchema = {
  name: 'registrationCategory',
  title: 'Registration Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      description: 'e.g. Student, Faculty, Research Scholar, Industry, International Delegate',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'fee',
      title: 'Registration Fee',
      type: 'string',
      description: 'e.g. $150 / ₹3,000',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'enable',
      title: 'Enable / Disable Category',
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
      subtitle: 'fee',
    },
  },
};
