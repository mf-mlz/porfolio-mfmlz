module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
      poppins: ['Poppins', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1224px',
      xl: '1350px',
    },
    extend: {
      colors: {
        primary: '#232129',
        accent: {
          DEFAULT: '#B809C3',
          hover: '#0a0a0a',
        },
        ternary:{
          default: '#0a0a0a',
          hover: '#B809C3',
        },
        grey: '#494455',
      },
      backgroundImage: {
        heroLight: "url('/src/assets/img/bgWhite.jpg')",
        heroDark: "url('/src/assets/img/bgDark.jpg')",
        about: "url('/src/assets/img/Girl4.png')",
        services: "url('/src/assets/img/services.png')"
      },
    },
  },
  plugins: [],
};
