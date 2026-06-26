import { defineConfig } from "vitest/config";

export default defineConfig({
  cacheDir: "/var/tmp/.vite",
  test: {
    globals: true,
  },
});
