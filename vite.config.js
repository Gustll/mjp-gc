import { defineConfig } from "vite";

export default defineConfig({
  root: "./src", // Point Vite to the 'src' directory
  build: {
    outDir: "../dist", // Build output goes to 'dist' directory
    emptyOutDir: true,
  },
});
