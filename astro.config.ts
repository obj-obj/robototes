import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import htmlMinifier from "astro-html-minifier";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
	site: "https://robototes.pages.dev",
	integrations: [tailwind({}), sitemap(), mdx(), htmlMinifier(), image()],
});
