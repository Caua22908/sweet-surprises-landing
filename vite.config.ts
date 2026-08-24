import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "./",
  tanstackStart: {
    spa: {
      enabled: false,
    },
  },
} as any);