/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './App.{ts,tsx}',
    './index.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      borderWidth: {
        3: '3px',
      },
      transitionDuration: {
        400: '400ms',
      },
      zIndex: {
        15: '15',
      },
    },
  },
  plugins: [],
};
