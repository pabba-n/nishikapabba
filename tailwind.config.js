/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode:'jit',
  theme: {
    extend: {
      colors: {
        "light-black" : "#292827",
        "pale-pink" : "#e2b7b2",
        "pale-blue" : "#7c95af",
        "pale-green" : "#476b5d",
      },
      backgroundImage: (theme) => ({
          "gradient-rainbow" : 
          "linear-gradient(81.66deg, #e2b7b2 7.21%, #7c95af 45.05%, #476b5d 78.07%)",

          "gradient-raingreen":
          "linear-gradient(90deg, #e2b7b2 14.53%, #7c95af 69.36%, #476b5d 117.73%)",
        }),

      fontFamily: {
        barlow: ["Barlow Condensed"],
        dangrek: ["Dangrek"]
      },
      content: {
        brush: "url('./assets/blob.png')",
        logo: "url('./assets/logo.png')",
      },
      animation: {
        type: 'type 2.7s ease-out .8s infinite alternate both',
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0ch)' },
          '5%, 10%': { transform: 'translateX(1ch)' },
          '15%, 20%': { transform: 'translateX(2ch)' },
          '25%, 30%': { transform: 'translateX(3ch)' },
          '35%, 40%': { transform: 'translateX(4ch)' },
          '45%, 50%': { transform: 'translateX(5ch)' },
          '55%, 60%': { transform: 'translateX(6ch)' },
          '65%, 70%': { transform: 'translateX(7ch)' },
          '75%, 80%': { transform: 'translateX(8ch)' },
          '85%, 90%': { transform: 'translateX(9ch)' },
          '95%, 100%': { transform: 'translateX(11ch)' },
        },
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
