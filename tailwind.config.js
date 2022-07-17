module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        primary: "#080C48",
        DEFAULT: "#00f",
        secondary: "#2FB6F9",
      },
      white: {
        DEFAULT: "#fff",
        primary: "#eceff1",
      },
      black: {
        DEFAULT: "#000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
