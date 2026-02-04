import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

export default defineConfig({
  site: "https://patukaelmago.github.io",
  base: "/estudioIrigoyen/",
  experimental: { viewTransitions: true },
  integrations: [tailwind(), compress()],
});
