/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue': '#2a68ff',
        'grey': '#f1f4f8',
        'cardShadow': 'f7f8f9',
        'textColor': '#252b36',
        
        'yellow': 'rgb(250, 182, 1)',
        'purple': 'rgb(194, 128, 210)',
        'green': 'rgb(67, 185, 126)',
        'background': 'rgb(31, 32, 40)',
        'pageColor': '#282A34'
      }
    },
  },
  plugins: [],
}

