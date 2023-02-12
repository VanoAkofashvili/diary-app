/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "critical-100": "#ED213A",
        "critical-200": "#93291E",
        "negative-100": "#f12711",
        "negative-200": "#f5af19",
        "normal-100": "#FFE000",
        "normal-200": "#799F0C",
        "good-100": "#ADD100",
        "good-200": "#7B920A",
        "awesome-100": "#56ab2f",
        "awesome-200": "#a8e063",
      },
    },
  },
  plugins: [],
};
