import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/PD-fotografia/",
  plugins: [react()],
});

// export default {
//   build: {
//     rollupOptions: {
//       external: ['bower_components/aos/dist/aos.js']
//     }
//   }
// }
