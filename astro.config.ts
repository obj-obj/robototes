import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import htmlMinifier from "astro-html-minifier";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
	site: "https://robototes.netlify.app",
	integrations: [tailwind({}), sitemap(), mdx(), htmlMinifier()],
});
