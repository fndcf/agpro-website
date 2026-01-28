
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A5F',
          dark: '#152A45',
          light: '#2A4A73'
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
        'hero-gradient': 'linear-gradient(135deg, #152A45, #1E3A5F)',
        'hero-overlay': 'linear-gradient(rgba(21, 42, 69, 0.8), rgba(30, 58, 95, 0.8))'
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