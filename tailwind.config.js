const colors = require('./src/constants/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      font: {
        'heading': 'Poppins',
      },
      colors:{
        ...colors,
      },
    },
  },
  plugins: [],
}