module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'red-pop': 'redPop 4s ease-in-out forwards', // Red circle moves down
        'red-text-fade': 'redTextFade 4s ease-in-out forwards', // Red tagline fades with the circle
        'blue-pop': 'bluePop 4s ease-in-out forwards 4s', // Blue circle moves up after red disappears
        'blue-text-fade': 'blueTextFade 1.5s ease-in-out forwards 6s', // Blue tagline appears after blue circle lands
      },
      keyframes: {
        redPop: {
          '0%': { transform: 'translateY(0)', opacity: '1', boxShadow: '0 0 40px rgba(255, 0, 0, 1)' },
          '100%': { transform: 'translateY(100%)', opacity: '0', boxShadow: '0 0 10px rgba(255, 0, 0, 0.5)' },
        },
        redTextFade: {
          '0%': { transform: 'translateY(-600%)', opacity: '1' }, // Visible at start
          '100%': { transform: 'translateY(0)', opacity: '0' }, // Moves down and fades out
        },
        bluePop: {
          '0%': { transform: 'translateY(100%)', opacity: '0', boxShadow: '0 0 10px rgba(0, 200, 255, 0.5)' },
          '100%': { transform: 'translateY(0)', opacity: '1', boxShadow: '0 0 50px rgba(0, 200, 255, 1)' }, // Moves up to unblurred part
        },
        blueTextFade: {
          '0%': {transform: 'translateY(0)',  opacity: '0' }, // Starts invisible
          '100%': {transform: 'translateY(-600%)',  opacity: '1' }, // Fades in
        }
      },
      boxShadow: {
        'red-glow': '0 0 50px rgba(255, 0, 0, 0.8)',
        'blue-glow': '0 0 50px rgba(0, 200, 255, 0.8)',
      },
    },
  },
  plugins: [],
};