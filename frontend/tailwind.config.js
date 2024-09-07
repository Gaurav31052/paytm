/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {keyframes: {
        moveDown: {
          '0%': { top:0 },
          '100%': { top:800 },
        },
        moveUp: {
          '0%': { bottom:0 },
          '100%': { bottom:800 },
        },
   
        moveRight: {
          '0%': { left:0 },
          '100%': { left:1300 },
        },
        moveLeft: {
          '0%': { right:0 },
          '100%': { right:1300 },
        },
      },
      animation: {
        moveDown: 'moveDown 2s ease-in-out infinite',
        moveUp: 'moveUp 2s ease-in-out infinite',
        moveRight: 'moveRight 2s ease-in-out infinite',
        moveLeft: 'moveLeft 2s ease-in-out infinite',
      },
    },
   
  },
  plugins: [],
}

