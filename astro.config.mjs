import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://Marlonleon2023.github.io',
  base: '/portafolio.github.io-',
  output: "server",
  adapter: vercel()
});