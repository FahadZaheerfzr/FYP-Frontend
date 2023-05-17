/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors: {
        primary: {
          100: '#4c4c4c',
          200: '#3e3e3e',
          300: '#2d2d2d',
          400: '#1a1a1a',
          500: '#0a0a0a',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        green:{
          400:"#FFCF33",
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      }
    },
  },
  plugins: [],
};
