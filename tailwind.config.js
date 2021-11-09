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
        primary: colors.trueGray,
        secondary: colors.green,
        tertiary: colors.purple,
        accent: colors.teal,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
