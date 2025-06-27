const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: { 
    extend: {
       colors: {

      primary: colors.purple,
      secondary: colors.pink,
    },

     fontFamily: {
        lora: ['var(--font-lora)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'cursive'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
        spaceGrotesk: ['var(--font-space)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        rajdhani: ['var(--font-rajdhani)', 'sans-serif'],
      },
    } 
  },
  plugins: [],
}