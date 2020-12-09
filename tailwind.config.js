const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        gray: colors.warmGray,
        primary: '#c21001',
        white: '#fff',
      },
      backgroundColor: {
        none: 'none',
      },
    },
  },
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.js',
    './components/**/*.js'
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}