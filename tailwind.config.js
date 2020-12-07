module.exports = {
  theme: {
    extend: {
      /* typography: {
        DEFAULT: {
          css: {
            color: '#fff5f5',
            strong: {
              color: '#fff5f5',
            },
            a: {
              color: '#fff',
              '&:hover': {
                color: '#fed7d7',
              },
            },
          },
        },
      }, */
    },
    colors: {
      primary: '#c21001',
      white: '#fff',
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