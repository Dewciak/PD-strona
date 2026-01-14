import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  chunkSizeWarningLimit: 1000, // 1 MB - more aggressive warning
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          animations: ["aos"],
          icons: ["@fortawesome/react-fontawesome", "@fortawesome/free-solid-svg-icons"],
          utils: ["date-fns", "react-scroll", "react-day-picker"],
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"], // Remove console.logs in production
        unused: true,
      },
      mangle: {
        safari10: true,
      },
    },
    // Enable modern build optimizations
    target: ["es2020", "edge88", "firefox78", "chrome87", "safari13.1"],
    cssCodeSplit: true,
    sourcemap: false, // Disable sourcemaps in production for smaller files
  },
  server: {
    proxy: {
      "/wp-json": {
        target: "https://pati.wiktordawid.pl/",
        changeOrigin: true,
      },
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    exclude: ["@fortawesome/fontawesome-svg-core"],
  },
});
