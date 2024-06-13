/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class
  theme: {
    extend: {
      colors: {
        primary: "#3CB35A",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      textColor: {
        primary: "#3CB35A",
        light: "#F3F4F6",
        dark: "#1F2937",
      },
    },
    fontFamily: {
      // Lato
      lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
