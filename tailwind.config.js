/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "page_header": "url(/page_header_bg.png)",
        "bubble": "url(https://static-www.o2.co.uk/themes/o2_theme/img/o2-flurry-bubbles.png)"
      },
      borderRadius: {
        '6xl': '4rem',  // Custom value, adjust as needed
        '8xl': '6rem',  // Custom value, adjust as needed
      },


    },
  },
  plugins: [],
}

