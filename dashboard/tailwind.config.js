/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,tsx,vue,js,ts}"],
  theme: {
    extend: {
      colors:{
        mainColor:"#000",
        primary :"@24262b",
        "primary-gray":"#5e626f",
        "primary-green":"#0D775E",
        "red-gray":"#444444",
        "white-100":"#F3F3F3",
      }
    },
  },
  plugins: [],
}

