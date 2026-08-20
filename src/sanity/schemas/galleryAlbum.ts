export const galleryAlbumSchema = {
  name: 'galleryAlbum',
  title: 'Gallery Album',
  type: 'document',
  fields: [
    {
      name: 'albumName',
      title: 'Album Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description (Optional)',
      type: 'text',
      rows: 2,
    },
    {
      name: 'enable',
      title: 'Enable / Disable Album',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'galleryImageItem',
          title: 'Gallery Image',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'altText',
              title: 'Alt Text (Accessibility)',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Caption (Optional)',
              type: 'string',
            },
            {
              name: 'enable',
              title: 'Enable / Disable Image',
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
              title: 'altText',
              subtitle: 'caption',
              media: 'image',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'albumName',
      subtitle: 'description',
    },
  },
};
