// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: "static",
 
  site: 'https://moisessegura.github.io',
  base: '/BA-portfolio/',
  trailingSlash: 'always',
    build: {
    format: 'directory',
  },

  
  vite: {
    plugins: [tailwindcss()]
  }
});