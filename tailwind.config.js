// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // This is the key line
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
