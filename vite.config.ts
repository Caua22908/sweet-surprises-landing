import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/sweet-surprises-landing/",
  tanstackStart: {
    spa: {
      enabled: true,
        prerender: {
          enabled: false,
        },
    },
  },
} as any);