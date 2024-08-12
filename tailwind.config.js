const colors = require('./src/constants/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': 'Poppins',
      },
      colors:{
        ...colors,
      },
    },
  },
  plugins: [],
}