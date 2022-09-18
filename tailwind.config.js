/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/*.{html, js}'],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'san-serif'],
      },
      colors: {
        "bg-clr-0": "#333",
        "bg-clr-1": "rgb(241,245,248)",
        "bg-clr-2": "#ff7979",
        "txt-clr-0": "#222",
        "txt-clr-1": "#555"
      }
    },
  },
  plugins: [],
}