/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["satoshi", "sans-serif"],
        Inter: ["inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}