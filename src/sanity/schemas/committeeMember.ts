export const COMMITTEE_ROLES = [
  { title: 'Chief Patron', value: 'Chief Patron' },
  { title: 'Patron', value: 'Patron' },
  { title: 'General Chair', value: 'General Chair' },
  { title: 'Conference Chair', value: 'Conference Chair' },
  { title: 'Organizing Chair', value: 'Organizing Chair' },
  { title: 'Technical Committee', value: 'Technical Committee' },
  { title: 'Advisory Committee', value: 'Advisory Committee' },
  { title: 'Other', value: 'Other' },
];

export const committeeMemberSchema = {
  name: 'committeeMember',
  title: 'Committee Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role / Category',
      type: 'string',
      options: {
        list: COMMITTEE_ROLES,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'customRole',
      title: 'Custom Role Title',
      type: 'string',
      description: 'Used only when Role / Category is set to "Other"',
      hidden: ({ document }: any) => document?.role !== 'Other',
      validation: (Rule: any) =>
        Rule.custom((value: any, context: any) => {
          if (context.document?.role === 'Other' && !value) {
            return 'Custom role title is required when Role is "Other"';
          }
          return true;
        }),
    },
    {
      name: 'organization',
      title: 'Organization',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'enable',
      title: 'Enable / Disable Member',
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
      role: 'role',
      customRole: 'customRole',
      subtitle: 'organization',
    },
    prepare(selection: any) {
      const { title, role, customRole, subtitle } = selection;
      const displayRole = role === 'Other' ? customRole : role;
      return {
        title: title,
        subtitle: `${displayRole || ''} - ${subtitle || ''}`,
      };
    },
  },
};
