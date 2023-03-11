/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    fontFamily: {
      teko: [ 'Teko', 'sans-serif'],
    },
    extend: {
      colors:{
        'mainred': 'rgb(199, 0, 33)',
      },
    },
  },
  plugins: [],
}
