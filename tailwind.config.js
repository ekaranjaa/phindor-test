const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      gray: colors.blueGray,
      blue: colors.blue,
      green: colors.green,
      red: colors.red
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
