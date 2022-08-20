module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './contexts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      three: '350px',
      five: '500px',
      tablet: '640px',
      // => @media (min-width: 640px) { ... }
      ltab: '780px',
      xtab: '960px',
      // => @media (min-width: 1024px) { ... }
      ltop: '1050px',
      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
