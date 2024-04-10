import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/PD-fotografia/",
  plugins: [react()],
  scripts: {
    build: "vite build",
    preview: "vite preview",
  },
  base: "https://dewciak.github.io/PD-strona/",
});
