import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemas';
import { projectId, dataset } from './src/sanity/env';

export default defineConfig({
  name: 'default',
  title: 'Conference Admin Studio',

  projectId: projectId || 'demo-project-id',
  dataset: dataset || 'production',

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Conference Content')
          .items([
            S.listItem()
              .title('CONFERENCE')
              .child(
                S.list()
                  .title('Conference Options')
                  .items([
                    S.listItem()
                      .title('Home Page')
                      .child(S.document().schemaType('homePage').documentId('homePage')),
                    S.documentTypeListItem('speaker').title('Keynote Speakers'),
                    S.documentTypeListItem('committeeMember').title('Committee Members'),
                    S.documentTypeListItem('registrationCategory').title('Registration Categories'),
                    S.documentTypeListItem('sponsor').title('Sponsors'),
                    S.documentTypeListItem('faq').title('FAQs'),
                  ])
              ),

            S.divider(),

            S.listItem()
              .title('MEDIA')
              .child(
                S.list()
                  .title('Media Assets')
                  .items([
                    S.documentTypeListItem('galleryAlbum').title('Gallery Albums'),
                  ])
              ),

            S.divider(),

            S.listItem()
              .title('CONTACT')
              .child(
                S.document()
                  .schemaType('contactInformation')
                  .documentId('contactInformation')
                  .title('Contact Information')
              ),

            S.divider(),

            S.listItem()
              .title('SITE')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Navigation / Page Visibility')
              ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
