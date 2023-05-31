/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mBanner': `url('./src/assets/shop/banner2.jpg')`,
      }
    },
  },
  plugins: [require("daisyui")],
}

