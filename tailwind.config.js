/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    './pages/**/*.{html,tsx}',
    './components/**/*.{html,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

