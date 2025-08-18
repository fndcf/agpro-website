
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#34C759',
          dark: '#30D158',
          light: '#40E568'
        },
        gold: {
          DEFAULT: '#CCAA77',
          dark: '#B8956A',
          light: '#D4B585'
        },
        gray: {
          50: '#f8f9fa',
          900: '#333333'
        }
      },
      fontFamily: {
        'times': ['Times New Roman', 'serif'],
        'sans': ['Segoe UI', 'sans-serif']
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #30D158, #34C759)',
        'hero-overlay': 'linear-gradient(rgba(48, 209, 88, 0.8), rgba(52, 199, 89, 0.8))'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      }
    },
  },
  plugins: [],
}