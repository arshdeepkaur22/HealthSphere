/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:  {
      colors: {
        backgroundcolour: '#E2F3FD',
        colourblueshade:'#3A8EF6',
        footerbg:'#0A0E31',
      graybg:'#F1F1F1'},

        fontFamily:{sora:['Sora']}
  },
  plugins: [],
}}