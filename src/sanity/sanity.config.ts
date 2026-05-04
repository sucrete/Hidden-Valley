import { schemaTypes } from '@/sanity/schemaTypes';
import { defineConfig, isDev } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { presentationTool } from 'sanity/presentation';
import { media } from 'sanity-plugin-media';

import { deskStructure } from './deskStructure';

import { resolve } from './presentation/resolve';

import './custom.css';

export default defineConfig({
  name: 'default',
  title: 'Hidden Valley Golf Course',
  basePath: '/studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: isDev
    ? [
        structureTool({
          title: 'Content',
          structure: deskStructure,
        }),
        presentationTool({
          title: 'Visual Editor',
          resolve,
          previewUrl: {
            origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000',
            previewMode: {
              enable: '/api/draft-mode/enable',
            },
          },
        }),
        visionTool(),
      ]
    : [
        structureTool({
          title: 'Content',
          structure: deskStructure,
        }),
        presentationTool({
          title: 'Visual Editor',
          resolve,
          previewUrl: {
            origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000',
            previewMode: {
              enable: '/api/draft-mode/enable',
            },
          },
        }),
      ],

  releases: {
    enabled: false,
  },
  tasks: {
    enabled: false,
  },
  scheduledPublishing: {
    enabled: false,
  },
  document: {
    comments: {
      enabled: false,
    },
  },
  schema: {
    types: schemaTypes,
  },
});
