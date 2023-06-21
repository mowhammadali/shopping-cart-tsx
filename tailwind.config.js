/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: '#E3D0B9',
        primaryBg: '#E1BC91',
        secondary: '#C19277',
        info: '#85A389',
        text: '#62959C',
        darkPrimary: '#2C3333',
        darkPrimaryBg: '#395B64',
        darkSecondary: '#A5C9CA',
        darkInfo: '#F05454',
        darkText: '#E7F6F2',
      },
    },
  },
  plugins: [],
}

