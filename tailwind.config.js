/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'world-cup': "url('/Assests/images/WorldCup.jpeg')",
      },
      '.no-scrollbar::-webkit-scrollbar': {
        'display': 'none'
      },
    },
  },
  plugins: [],
}
