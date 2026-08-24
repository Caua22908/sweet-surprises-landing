import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/sweet-surprises-landing/",
  tanstackStart: {
    prerender: {
      enabled: false,
    },
    spa: {
      enabled: true,
    },
  },
} as any);