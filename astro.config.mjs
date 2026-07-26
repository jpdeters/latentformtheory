// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.latentformtheory.com',
  integrations: [sitemap({
    filter: (page) => !['/theory-old', '/theory-old/', '/theorybackup', '/theorybackup/'].includes(page)
  })]
});