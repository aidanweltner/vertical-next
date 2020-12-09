const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: colors.warmGray[300],
            strong: {
              color: colors.warmGray[200],
            },
            a: {
              color: colors.warmGray[200],
              textDecoration: 'none',
              borderBottomWidth: '1px',
              borderColor: colors.red[600],
              transition: '0.3s ease',
              '&:hover': {
                color: colors.red[600],
                textDecoration: 'none',
                borderBottomWidth: '0',
              },
              '&:focus': {
                color: colors.red[600],
                textDecoration: 'none',
                borderBottomWidth: '0',
              }
            }
          },
        },
      },
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