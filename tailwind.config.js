module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "lima": "url(./assets/fondo-lima-cortado.png)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
