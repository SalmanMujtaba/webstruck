/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'webstruck': {
          light: '#ffff',
          DEFAULT: '#a696fb',
          dark: '#0F0920',
        },
        // 'heading-color': linear - gradient(to right, #553c9a 45%, # ee4b2b),
        gray: {
          100: '#fbfbfb',
          200: '#efefef',
          200: '#cccccc',
          200: '#8d9091'
        },
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/hero-computer.png')",
        "hero-texture": "url('/src/assets/hero-texture.svg')"
      },
      keyframes: {
        heroAnimate: {
          to: { transform: 'translateY(20px)' },
        },
        'slide-down-in': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-100%)',
          },
          '60%': {
            opacity: 1,
            transform: 'translateY(20%)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'slide-down-out': {
          '0%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
          '60%': {
            opacity: 0,
            transform: 'translateY(120%)',
          },
          to: {
            opacity: 0,
            transform: 'translateY(100%)',
          }
        },
      },
      animation: {
        heroAnimate: 'heroAnimate 2s infinite ease alternate',
        slideDownIn: 'slide-down-in 0.6s',
        slideDownOut: 'slide-down-out 0.6s',
        // headlineSlideOut: 'headline-slide-out 0.6s',
        // headlineSlideIn: 'headline-slide-in 0.6s'
      },
      textShadow: {
        default: '0 0 6px #ff8400',
      },
      buttonTextShadow: {
        default: '0px 0px 10px #a696fb;'
      },
      screens: {
        'md-max': { 'max': '768px' },
      }
    },
  },
  plugins: [],
};