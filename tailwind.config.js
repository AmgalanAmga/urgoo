/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        diamond: 'url("/src/images/diamond.PNG")'
      }
    },
  },
  plugins: [],
}
