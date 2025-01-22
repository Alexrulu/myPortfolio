/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E2E8F0',
        secondary: '#8E9EB2',
        tertiary: '#56DAC7',
        bgprimary: '#0F162B',
        bgsecondary: '#122B39',
        focus: '#102045', // Color del foco
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        '3xl': '1920px',
      },
      backgroundImage: {
        'dynamic-light': 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), #102045, #0F162B 25%)', // Foco y fondo
      },
      boxShadow: {
        'custom': '2px 2px 10px var(--tw-shadow-color, #0F162B)',
      },
      
    },    
  },
  plugins: [],
}

