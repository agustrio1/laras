import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: "",
  plugins: [react()],
  build: {
    lib: {
      entry: ["src/index.ts", "index.html"],
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