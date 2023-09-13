/** @type {import('tailwindcss').Config} */
export default {
  content: [],  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      
      'sm': '640px',

      'md': '768px',
   

      'lg': '1024px',
    

      'xl': '1280px',


      '2xl': '1536px',
     
    },
    extend: {
      backgroundImage: {
        'banner': "url('./src/assets/Poster.jpg')",
      },
    },
  },
  plugins: [],
}

