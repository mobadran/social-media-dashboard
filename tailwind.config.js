/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./dist/script.js"],
  darkMode: 'selector',
  theme: {
    colors: {
      'facebook': 'hsl(208, 92%, 53%)',
      'twitter': 'hsl(203, 89%, 53%)',
      'youtube': 'hsl(348, 97%, 39%)',
      'limeGreen': 'hsl(163, 72%, 41%)',
      'brightRed': 'hsl(356, 69%, 56%)',
      'light': 'hsl(232, 33%, 91%)',
      'darkBgWhite': 'hsl(228, 26%, 27%)',

      // Dark theme
      'darkBlueBg': 'hsl(230, 17%, 14%)',
      'darkBluePattern': 'hsl(232, 19%, 15%)',
      'desaturatedBlueBg': 'hsl(228, 28%, 20%)',
      'desaturatedBlueText': 'hsl(228, 34%, 66%)',
      'white': 'hsl(0, 0%, 100%)',
      // Light theme
      'paleBlue': 'hsl(225, 100%, 98%)',
      'lightGrayishBlue': 'hsl(227, 47%, 96%)',
      'darkGrayishBlue': 'hsl(228, 12%, 44%)',
    },
    
    backgroundImage: {
      'instagram': 'linear-gradient(70deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
      'dark': 'linear-gradient(70deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
    },

    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    }
  },
}