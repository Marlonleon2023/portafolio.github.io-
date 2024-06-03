import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import netlify from "@astrojs/netlify";


export default defineConfig({
  output: "server",
  adapter: netlify()
});