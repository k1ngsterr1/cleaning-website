/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main_blue: "#00968D",
        dark_blue: "#162E36",
        yellow: "#FFD641",
      },
    },
  },
  plugins: [],
};
