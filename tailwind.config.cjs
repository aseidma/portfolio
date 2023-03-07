/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      "sans-serif": ["Rubik", "sans-serif"],
      mono: ['"Space Mono"', "ui-monospace", "SFMono-Regular"],
    },
    extend: {},
  },
  plugins: [],
};
