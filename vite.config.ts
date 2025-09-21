import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "laras.ts",
      name: "Laras",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => {
        switch (format) {
          case "es":
            return "laras.esm.js";
          case "cjs":
            return "laras.cjs.js";
          case "umd":
            return "laras.umd.js";
          default:
            return "laras.js";
        }
      },
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
  server: {
    open: true,
  },
});