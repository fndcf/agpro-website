
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0EA5E9',
          dark: '#0284C7',
          light: '#38BDF8'
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
        'hero-gradient': 'linear-gradient(135deg, #0284C7, #0EA5E9)',
        'hero-overlay': 'linear-gradient(rgba(2, 132, 199, 0.8), rgba(14, 165, 233, 0.8))'
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