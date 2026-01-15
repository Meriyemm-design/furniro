import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@fonts": path.resolve(__dirname, "./src/assets/fonts"),
      "@styles": path.resolve(__dirname, "./src/Styles"),
      "@components": path.resolve(__dirname, "./src/Components"),
      "@pages": path.resolve(__dirname, "./src/Pages"),
      "@routes": path.resolve(__dirname, "./src/routes"),
    },
  },
});
