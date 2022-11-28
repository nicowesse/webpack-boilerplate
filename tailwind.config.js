const paths = require('./config/paths')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`${paths.src}/**/*.{html,js}`],
  theme: {
    extend: {},
  },
  plugins: [],
}
