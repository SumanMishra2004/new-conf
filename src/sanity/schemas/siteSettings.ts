export const siteSettingsSchema = {
  name: 'siteSettings',
  title: 'Site Navigation & Page Visibility',
  type: 'document',
  fields: [
    {
      name: 'enableGalleryPage',
      title: 'Enable Gallery Page',
      type: 'boolean',
      initialValue: true,
      description: 'Master toggle to enable/disable the /gallery page route',
    },
    {
      name: 'showGalleryInNavbar',
      title: 'Show Gallery in Navbar',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'showGalleryInFooter',
      title: 'Show Gallery in Footer',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'enablePublicationsPage',
      title: 'Enable Publications Page',
      type: 'boolean',
      initialValue: true,
      description: 'Master toggle to enable/disable the /publications page route',
    },
    {
      name: 'showPublicationsInNavbar',
      title: 'Show Publications in Navbar',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'showPublicationsInFooter',
      title: 'Show Publications in Footer',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    prepare() {
      return { title: 'Navigation & Page Visibility Settings' };
    },
  },
};
