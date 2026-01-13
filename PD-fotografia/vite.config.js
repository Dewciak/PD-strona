import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  // cssCodeSplit: false,
  chunkSizeWarningLimit: 4000000, // 2 MB
  plugins: [react()],
  server: {
    proxy: {
      "/wp-json": {
        target: "https://pati.wiktordawid.pl/",
        changeOrigin: true,
      },
    },
  },
});
