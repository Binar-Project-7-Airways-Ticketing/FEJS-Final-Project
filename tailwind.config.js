/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        brand: {
          yellow: "#CBA052",
          black: "#404445",
          green: "#01843E",
          choco: "#8C857B",
          gray: "#8C8C8C",
          nude: "#F2EFEA",
          whiteLight:"#f1efe9"
        }
      }
    },
  },
  plugins: [],
}