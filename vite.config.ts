import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/sweet-surprises-landing/",
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "static",
    prerender: {
      routes: ["/sweet-surprises-landing/", "/"],
      crawlLinks: true,
      failOnError: false,
    },
  },
} as any);