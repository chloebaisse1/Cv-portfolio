import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static", // Ajouté pour un export statique
  integrations: [tailwind()],
});
