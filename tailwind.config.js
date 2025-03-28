/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#000000',
            search: '#2B2B2D',
            follow: '#CBB678',
            social: '#7C5334',
            contact: '#CBB777',
            light: '#FFF5DB',
            red: '#F53E32',
            popular: '#1E1E1E',
            gray: '#555555',
            green: '#3BB77E',
            special: '#FF6868',
            'gray-light': '#B6B6B6',
            white: '#FFFFFF',
            'gray-medium': '#ADADAD',
            'gray-dark': '#7E7E7E',
            'gray-darker': '#404040',
          }
        },
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
          montserrat: ['Montserrat', 'sans-serif'],
          quicksand: ['Quicksand', 'sans-serif'],
          nunito: ['Nunito', 'sans-serif'],
          lato: ['Lato', 'sans-serif'],
          arial: ['Arial', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif']
        }
      }
    },
    plugins: [],
  }