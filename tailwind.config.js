/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class", // Forces dark mode using "dark" class
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"], // Forces DaisyUI to use dark theme only
  },
};
