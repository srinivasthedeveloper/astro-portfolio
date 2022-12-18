import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://srinivasthedeveloper.github.io',
  base: '/astro-portfolio',
  integrations: [react(), tailwind()]
});