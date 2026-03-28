/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Ye toggle ke liye lazmi hai
  theme: {
    extend: {
      colors: {
        // Mint color ko alag rakhein
        mint: '#00e7aa', 
        // Orange ko Tailwind ke default par chor dein ya custom dein
        // Agar aapko special orange chahiye toh yahan define karein:
        customOrange: '#fb923c', 
      },
    },
  },
  plugins: [],
}