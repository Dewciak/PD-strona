import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/PD-fotografia/",
  plugins: [react()],
<<<<<<< HEAD
});

// export default {
//   build: {
//     rollupOptions: {
//       external: ['bower_components/aos/dist/aos.js']
//     }
//   }
// }
=======
  scripts: {
    build: "vite build",
    preview: "vite preview",
  },
  base: "https://dewciak.github.io/PD-strona/",
});
>>>>>>> 9a054b6 (próba)
