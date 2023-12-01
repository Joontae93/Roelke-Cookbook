import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://kjroelke.github.io',
  base: 'roelke-cookbook',
  integrations: [react()]
});
