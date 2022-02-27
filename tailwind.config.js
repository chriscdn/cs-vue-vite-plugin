module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // permits active:bg-red-50 type classes
    },
  },
  plugins: [],
}
