import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/PD-strona/"
  },
});

// export default {
//   build: {
//     rollupOptions: {
//       external: ['bower_components/aos/dist/aos.js']
//     }
//   }
// }
