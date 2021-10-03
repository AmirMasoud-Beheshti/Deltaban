module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#235264",
        secondary: "#f4f8f9",
        footer: "#a2aeb6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
