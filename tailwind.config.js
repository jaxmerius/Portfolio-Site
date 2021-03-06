const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        green: colors.green,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
