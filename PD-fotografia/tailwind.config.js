/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderImage: (theme) => ({
        "gradient-border": "linear-gradient(to right, #63b3ed, #9333ea)",
      }),

      colors: {
        myBlue: "",
        myGray: "rgba(58,58,58,0.96)",
        titleGray: "rgb(45,45,45)",
        "blue-gray-100": "#cfd8dc",
        "blue-gray-50": "#eceff1",
      },
      keyframes: {
        fadeIn: {
          "0%": {opacity: "0"},
          "50%": {opacity: "0.5"},
          "100%": {opacity: "1"},
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
        17: "repeat(17, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
