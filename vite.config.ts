import { defineConfig } from "vite";

export default defineConfig({
  root: "",
  build: {
    lib: {
      entry: ["src/index.ts"],
      name: "Laras",
      fileName: (format) => `laras.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
});