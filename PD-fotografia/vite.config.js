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
        target: "http://wordpress-wcc8484kcwwsww40ko00ccwc.49.12.2.146.sslip.io",
        changeOrigin: true,
      },
    },
  },
});
