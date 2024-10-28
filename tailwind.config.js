/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': 'rgba(49, 13, 96, 0.845)',
      }
    }
  },
  plugins: [],
}