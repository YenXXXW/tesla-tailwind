/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
     'xs' : '380px' ,
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl' :'1536px'
  },
    extend: {
      fontFamily : {
        Barlow : ['Barlow']
      },      
    },
    
  },
  plugins: [],
}