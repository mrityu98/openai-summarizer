/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        satoshi:["Satoshi","sans-serif"],
        inter:["Inter","sans-serif"],
      },
      keyframes:{
        shine:{
          '0%, 100%':{'background-color': 'black', 'box-shadow': '0 0 10px rgba(255, 255, 255, 0.3)'},
          '50%':{'background-color': 'white', 'box-shadow': '0 0 20px rgba(255, 255, 255, 0.6)'}
        }
      },
      animation:{
        shine:'shine 3s infinite',
      },
      
    },
  },
  plugins: [],
}
