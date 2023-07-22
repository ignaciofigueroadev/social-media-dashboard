/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        "very-dark-blue": "hsl(230, 17%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 44%)",
        "light-grayish-blue": "hsl(227, 47%, 96%)",
        "desaturated-blue": "hsl(228, 34%, 66%)",
        "dark-desaturated-blue": "hsl(228, 28%, 20%)",
        "youtube-color": "hsl(348, 97%, 39%)",
        "facebook-color": "hsl(208, 92%, 53%)",
        "twitter-color": "hsl(203, 89%, 53%)",
        "instagram-color": "hsl(329, 70%, 58%)",
      },
      fontFamily: {
        inter: ["Inter', sans-serif"],
      },
    },
  },
  plugins: [],
};
