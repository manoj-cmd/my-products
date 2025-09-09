/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <-- important for class-based dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Optional: custom colors for light/dark themes
        lightBg: "#ffffff",
        lightText: "#1f2937",
        darkBg: "#1f2937",
        darkText: "#f9fafb",
      },
    },
  },
  plugins: [],
};
