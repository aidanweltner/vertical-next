const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: colors.warmGray[300],
            h1: {
              color: colors.warmGray[200],
            },
            h2: {
              color: colors.warmGray[200],
            },
            h3: {
              color: colors.warmGray[200],
            },
            h4: {
              color: colors.warmGray[200],
            },
            h5: {
              color: colors.warmGray[200],
            },
            h6: {
              color: colors.warmGray[200],
            },
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
            },
            'ol li': {
              color: colors.warmGray[300],
              '&:before': {
                color: colors.warmGray[500],
              },
            },
            'ul li': {
              color: colors.warmGray[300],
              '&:before': {
                color: colors.warmGray[500],
              },
            },
            hr: {
              borderColor: colors.warmGray[700],
            },
            thead: {
              color: colors.warmGray[200],
            },
            pre: {
              backgroundColor: colors.warmGray[800],
            },
            code: {
              color: colors.warmGray[200],
            },
            blockquote: {
              color: colors.warmGray[300],
              borderLeftColor: colors.warmGray[700],
            },
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