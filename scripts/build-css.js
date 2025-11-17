import { copyFileSync, mkdirSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ensure dist directory exists
const distDir = new URL("../dist", import.meta.url);
mkdirSync(new URL(distDir), { recursive: true });

// Copy CSS file to dist
copyFileSync(
  new URL("../src/styles/tokens.css", import.meta.url),
  new URL("../dist/styles.css", import.meta.url)
);

console.log("✓ CSS file copied to dist/styles.css");

