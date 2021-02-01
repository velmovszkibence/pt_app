const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            primary: 'var(--color-primary)',
            secondary: 'var(--color-secondary)',
            primarylight: 'var(--color-primary-light)'
        },
        letterSpacing: {
            widest: '.3em',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
