/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        10000: "10000",
      },
      colors: {
        "custom-gray": "#202224",
        "search-gray": "#D5D5D5"
      },
      fontFamily: {
        "nunito-sans": ['"Nunito Sans"', "sans-serif"],
      },
      letterSpacing: {
        custom: "0.3px",
      },
      backgroundColor: {
        'custom-bg': '#F5F6FA',
      },
    },
  },
  plugins: [],
};
