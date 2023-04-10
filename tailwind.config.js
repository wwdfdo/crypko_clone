/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "cripko-bg": "url('/src/images/crypkobluebg.svg')",
      },
    },
  },
  plugins: [],
};
