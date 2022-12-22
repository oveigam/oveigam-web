/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').defaultTheme} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Urbanist"],
        urbanist: ["Urbanist"],
        sans: ["Urbanist", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
