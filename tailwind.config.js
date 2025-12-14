/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        rose: {
          50: '#fff5f7',   /* Very light pink background */
          100: '#ffe4ea',  /* Light pastel pink */
          200: '#ffc5d5',  /* Soft candy pink */
          300: '#ffa1b9',  /* Medium pastel pink */
          400: '#ff7b9c',  /* Rich pastel pink */
          500: '#ff5c8a',  /* Brand pink (vibrant pastel) */
          600: '#e64576',  /* Hover darker pink */
          700: '#be185d',  /* Dark pink text */
          800: '#9d174d',  /* Darker pink text */
          900: '#831843',  /* Deep berry */
        },
        stone: {
          50: '#faf9f8',   /* Warm white */
          100: '#f5f4f2',
          200: '#e7e5e4',
          800: '#594a4e',  /* Warm brownish gray text */
          850: '#423639',
          900: '#2e2628',  /* Dark chocolate/charcoal */
        }
      }
    },
  },
  plugins: [],
}