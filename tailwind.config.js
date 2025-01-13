/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto","arial"],
      Poppins: ['Poppins',"arial"],
    }
  },
  extend: {
    screens: {
      "1000px": "1050px",
      "1100px": "1110px",
      "800px": "13000px",
      "400px": "400px",
    }
  },
  plugins: [],
}

