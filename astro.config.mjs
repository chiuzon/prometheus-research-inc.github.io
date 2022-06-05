import { defineConfig, AstroUserConfig } from "astro/config";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte({})],
  buildOptions: {
    site: "https://chiuzon.github.io/",
    base: "prometheus-research-inc.github.io",
  },
});
