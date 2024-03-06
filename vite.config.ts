import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import pkg from "./package.json";

export default defineConfig({
  plugins: [vanillaExtractPlugin()],
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: Object.keys(pkg.dependencies),
    },
  },
});
