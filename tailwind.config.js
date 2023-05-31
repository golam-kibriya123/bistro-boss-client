/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mBanner': `url('./src/assets/home/chef-service.jpg')`,
        'feature': `linear-gradient(0deg, rgba(21, 21, 21, 0.7), rgba(21, 21, 21, 0.7)), url('./src/assets/home/featured.jpg');`,
      }
    },
  },
  plugins: [require("daisyui")],
}

