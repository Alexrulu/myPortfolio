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
        primary: {
          dark:'#E2E8F0',
          light: '#223838',
        },
        secondary: {
          dark:'#8E9EB2',
          light: '#385c5c',
        },
        tertiary: {
          dark:'#56DAC7',
          light: '#047d7d',
        },
        bgprimary: {
          dark: '#0F162B',
          light: '#CDE1E0',
        },
        bgsecondary: {
          dark: '#122B39',
          light: '#B7D4D4',
        },
        focus: {
          dark: '#102045',
          light: '#83B4B6',
        }
        
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        '3xl': '1920px',
      },
      backgroundImage: {
        'dynamic-light-dark': 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), #102045, #0F162B 25%)',
        'dynamic-light-light': 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), #a8cbc9, #CDE1E0 25%)',
      },
      boxShadow: {
        'custom-dark': '2px 2px 10px var(--tw-shadow-color, #0F162B)',
        'custom-light': '2px 2px 10px var(--tw-shadow-color, #CDE1E0)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

