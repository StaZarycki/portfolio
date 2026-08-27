// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { passthroughImageService } from "astro/config";

import mdx from "@astrojs/mdx";

// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://stazarycki.com",
  base: "/",
  trailingSlash: "always",
  output: "static",

  build: {
    inlineStylesheets: "always",
  },

  image: {
    service: passthroughImageService(),
    domains: ["i.pravatar.cc"],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx()],
  // adapter: cloudflare(),
});
