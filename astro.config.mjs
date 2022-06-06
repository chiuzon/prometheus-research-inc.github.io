import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default /** @type {import('astro').AstroUserConfig} */ defineConfig({
  integrations: [svelte({})],
  buildOptions: {
    site: "",
    base: "prometheus-research-inc.github.io",
  },
});
