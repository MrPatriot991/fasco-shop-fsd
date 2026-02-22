import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (
            id.includes("/node_modules/react-dom/") ||
            id.includes("/node_modules/react/") ||
            id.includes("/node_modules/scheduler/")
          ) {
            return "react-vendor";
          }
          if (id.includes("react-router")) return "router-vendor";
          if (id.includes("@reduxjs/toolkit") || id.includes("react-redux")) return "redux-vendor";
          if (id.includes("zod")) return "validation-vendor";
          if (id.includes("react-hook-form") || id.includes("@hookform/resolvers")) {
            return "forms-vendor";
          }
          if (id.includes("axios")) return "http-vendor";
          if (id.includes("lucide-react") || id.includes("embla-carousel")) return "ui-vendor";
        },
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    mode === "analyze" &&
      visualizer({
        filename: "dist/stats.html",
        open: true,
        gzipSize: true,
        brotliSize: true,
        template: "treemap",
        sourcemap: false,
      }),
  ].filter(Boolean),
}));
