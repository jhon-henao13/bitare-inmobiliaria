/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'brand-red': '#d12a2a', // Ajusta el hex si tienes el color exacto
        'brand-black': '#111111',
      }
    },
  },
  plugins: [],
}