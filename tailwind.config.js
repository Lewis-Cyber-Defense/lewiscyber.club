const themes = require('daisyui/src/theming/themes')

module.exports = {
  content: ['./src/**/*.{html,md,njk,js,css}', './utils/**/*.js'],
  plugins: [require('@xpd/tailwind-3dtransforms'), require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        partii: {
          "base-100": '#141D1D',
          "base-200": '#293232',
          "base-300": '#384b4a',
          "base-content": '#c1e8fb',
          "primary": '#e49b55',
          "primary-content": '#ffffff',
          "secondary": '#559CA0',
          "secondary-content": '#ffffff',
          "accent": '#ffb876',
          "accent-content": '#ffb876',
          "neutral": '#293232',
          "neutral-content": '#d4e6e5',
          "info": '#559CA0',
          "info-content": '#ffffff',
          "success": '#66BB6A',
          "success-content": 'rgba(0, 0, 0, 0.8)',
          "warning": '#FFEE58',
          "warning-content": 'rgba(0, 0, 0, 0.8)',
          "error": '#EF5350',
          "error-content": 'rgba(255, 255, 255, 0.8)',
        },
        light: {
          ...themes.light,
        },
        dark: {
          ...themes.dark,
        },
      },
    ],
  },
}
