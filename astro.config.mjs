import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

// Change with your website url

// export const SITE_URL =
//   process.env.NODE_MODE === "development"
//     ? "http://localhost:3000"
//     : "https://chiuzon.github.io/prometheus-research-inc.github.io";
// console.log(process.env);

// https://astro.build/config
export default /** @type {import('astro').AstroUserConfig} */ defineConfig({
  integrations: [svelte({})],
  buildOptions: {
    site: process.env.PUBLIC_SITE_URL,
    base: "prometheus-research-inc.github.io",
  },
});
