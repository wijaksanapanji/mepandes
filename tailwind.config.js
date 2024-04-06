/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['Dancing Script'],
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}