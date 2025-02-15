/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}",

  ],
  theme: {
    extend: {
      colors:{
        purple:{
          300 : "#e0e7ff",
          500 : "#524cb3",
          600 : "#5046e4",
        }
      }
    },
  },
  plugins: [],
}

