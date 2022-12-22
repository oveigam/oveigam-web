/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Urbanist", ...defaultTheme.fontFamily.sans],
        urbanist: ["Urbanist"],
      },
      colors: {
        vsc: {
          50: "#DBF5FF",
          100: "#BDECFF",
          200: "#75D8FF",
          300: "#33C5FF",
          400: "#00ACF0",
          500: "#007AAC",
          600: "#00638A",
          700: "#004966",
          800: "#003042",
          900: "#001A24",
        },
      },
    },
  },
  plugins: [],
};
