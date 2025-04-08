import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sentryVitePlugin({
      org: "jsm-slj",
      project: "javascript-react",
    }),
  ],
  build: {
    minify: false,
    sourcemap: true,
  },
  base: '/IShow-Hub/', // ✅ use relative path
});
