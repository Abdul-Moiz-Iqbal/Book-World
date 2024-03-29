/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        xs: "300px", // Custom breakpoint for 360px width
        sm: "380px", // Custom breakpoint for 360px width
      },
      fontFamily: {
        "nato-sans": ["Noto Sans", "sans-serif"],
        "Roboto": ["Roboto","sans-serif"],
        "Poppins": ["Poppins,sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
