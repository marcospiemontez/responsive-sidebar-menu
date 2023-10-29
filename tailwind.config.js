/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyColor: "#E4E9F7",
        sideBarColor: "#FFF",
        primaryColor: "#695CFE",
        primaryColorLight: "#F6F5FF",
        toggleColor: "#DDD",
        textColor: "#707070",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
  },
  plugins: [],
}