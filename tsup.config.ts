import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "tokens/index": "src/styles/tokens/index.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ["react", "react-dom"],
  outDir: "dist",
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});

