/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        primary: '#FF6D00',
        darkBg: '#121212',
        surface: '#1F1F1F',
        border: '#262626',
        textSec: '#9E9E9E'
      }
    },
  },
  plugins: [],
};
