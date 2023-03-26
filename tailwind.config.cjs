/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E5E5E5",
        secondary: "#F64348",
        tertiary: "#898989",
        dark: "#343434",
      },
    },
  },
  plugins: [],
};
