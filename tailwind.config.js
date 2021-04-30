const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./styles/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      black: colors.black,
      blue: colors.blue,
      emerald: colors.emerald,
      green: colors.green,
      lime: colors.lime,
      red: colors.red,
      white: colors.white,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
