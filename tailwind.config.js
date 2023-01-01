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
          black: "#3F4444",
          green: "#01843E",
          choco: "#8C857B",
          gray: "#d3d3d3",
          nude: "#F2EFEA",
          whiteLight:"#f1efe9"
        }
      }
    },
    screens: {
      'sm': '350px',
      // => @media (min-width: 640px) { ... }

      'md': '730px',
      // => @media (min-width: 768px) { ... }

      'lg': '968px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}