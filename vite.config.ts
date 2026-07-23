import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { copyFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  // Custom domain (tayyab-attiq.me) serves from the site root, not /my-portfolio/
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // GitHub Pages has no SPA fallback; 404.html is served for unknown routes
    {
      name: "gh-pages-spa-fallback",
      closeBundle() {
        copyFileSync("dist/index.html", "dist/404.html");
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
