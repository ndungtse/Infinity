module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      five: '500px',
      tablet: '640px',
      // => @media (min-width: 640px) { ... }
      ltab: '780px',
      xtab: '960px',
      // => @media (min-width: 1024px) { ... }
      // ltab: '960px',
      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
