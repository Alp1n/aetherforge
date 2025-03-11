/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#2A2A2A',
        gold: '#FFD700',
        coral: '#FF4B4B',
        orange: '#FF8E3C',
        yellow: '#FFB938',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #FF4B4B 0%, #FF8E3C 50%, #FFB938 100%)',
      },
    },
  },
  plugins: [],
};