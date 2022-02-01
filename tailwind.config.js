const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      cashmere: {
        DEFAULT: "#E6C2A2",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#F7ECE2",
        400: "#EFD7C2",
        500: "#E6C2A2",
        600: "#DAA576",
        700: "#CE884A",
        800: "#B06C2F",
        900: "#845124",
      },
    },
    container: {
      screens: {
        lg: "1174px",
      },
    },
    extend: {},
  },
  plugins: [],
};
