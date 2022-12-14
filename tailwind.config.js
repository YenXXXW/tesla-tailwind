/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
    'xs' : '380px' ,
    '2xs' : '500px' ,
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl' :'1536px'
  },
  fontSize: {
    'xxs' : '0.45rem' , 
    '2xxs' : '0.60rem' , 
    'xs': '.75rem',
    'sm': '.875rem',
    'tiny': '.875rem',
    'base': '1rem',
    'lg': '1.125rem',
    'xl': '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
    '7xl': '5rem',
  },
    extend: {
      fontFamily : {
        Rubik : ['Rubik']
      },      
    },
    
  },
  plugins: [
    require('tailwind-scrollbar-hide') 
  ],
}