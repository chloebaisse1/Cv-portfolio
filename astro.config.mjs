import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://chloebaisse1.github.io",
  base: "Cv-portfolio",
  trailingSlash: "always",
  integrations: [tailwind()],
});
