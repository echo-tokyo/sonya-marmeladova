/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',
      'dark-purple': '#34274D',
      'primary': '#FF4876',
      'light-yellow': '#FFE9D0',
      'light-purple': '#8C7EA6'
    },
    fontSize: {
      sm: '0.8rem',
      base: '1.2rem',
      xl: '1.6rem',
      large: '4.4rem'
    }
  },
  plugins: [],
}

