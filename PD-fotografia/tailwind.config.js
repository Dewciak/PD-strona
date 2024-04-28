// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderImage: (theme) => ({
        "gradient-border": "linear-gradient(to right, #63b3ed, #9333ea)",
      }),
      colors: {
        myBlue: "",
      },
    },
  },
  plugins: [],
});
