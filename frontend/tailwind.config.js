module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    theme: {
      extend: {
        gridTemplateColumns: {
          '5': 'repeat(5, minmax(0, 1fr))',
          '6': 'repeat(6, minmax(0, 1fr))',
          '7': 'repeat(7, minmax(0, 1fr))',
          '8': 'repeat(8, minmax(0, 1fr))',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}