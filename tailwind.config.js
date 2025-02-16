/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}",

  ],
  theme: {
    extend: {
      colors:{
        gray:{
          200:"#f2f3f3", //background
          600: "#3b4146" //text color

        },
        purple:{
          200 : "#e0e7ff", //secondary button color
          500 : "#8331d5", //secondary button text
          600 : "#5046e4", //primary button color
        },
        blue:{
          100:"#edf2fe" //tag background
        },
        slate:{
          700: {
            opaque: 'rgba(51, 65, 85, 0.7)'
          }
        }
      }
    },
  },
  plugins: [],
}

