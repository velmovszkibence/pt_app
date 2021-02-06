const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            primary: 'var(--color-primary)',
            secondary: 'var(--color-secondary)',
            primarylight: 'var(--color-primary-light)',
            primarybl: 'var(--color-secondary-bg)',
            heading: 'var(--color-heading)',
        },
        letterSpacing: {
            widest: '.3em',
        },
        maxHeight: {
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
        },
        minHeight: {
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
        },
        maxWidth: {
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
