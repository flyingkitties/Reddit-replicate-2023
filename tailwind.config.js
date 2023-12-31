/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "500px",
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
