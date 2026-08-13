/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '80rem',
      },
    },
    extend: {
      colors: {
        // Theme-reactive tokens — flip automatically via CSS variables in index.css
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        surface2: 'rgb(var(--color-surface-2) / <alpha-value>)',
        surface3: 'rgb(var(--color-surface-3) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        'border-c': 'rgb(var(--color-border) / <alpha-value>)',
        // Fixed (non-theme-reactive) dark ink — used for text sitting on gold surfaces
        inkfixed: '#160f04',
        // Legacy alias kept for safety
        ink: {
          DEFAULT: '#0a0a0a',
          soft: '#141414',
          card: '#1a1a1a',
        },
        gold: {
          DEFAULT: '#f5a623',
          light: '#ffd482',
          dark: '#c9780f',
          glow: '#ffcf6b',
        },
        teal: {
          DEFAULT: '#22d3c8',
        },
        nebula: {
          DEFAULT: '#8b7cf6',
          soft: '#c4b8ff',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #ffd482 0%, #f5a623 45%, #e2711d 100%)',
        'aurora-gradient': 'linear-gradient(120deg, #f5a623 0%, #ff8a5c 35%, #8b7cf6 100%)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translate3d(0, 40px, 0)' },
          '100%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        loaderDash: {
          '0%': { strokeDasharray: '1, 200', strokeDashoffset: '0' },
          '50%': { strokeDasharray: '89, 200', strokeDashoffset: '-35' },
          '100%': { strokeDasharray: '89, 200', strokeDashoffset: '-124' },
        },
        spin2s: {
          '100%': { transform: 'rotate(360deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: 0.55, filter: 'blur(40px)' },
          '50%': { opacity: 0.9, filter: 'blur(55px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp .8s cubic-bezier(0.39, 0.575, 0.565, 1) both',
        'fade-in': 'fadeIn .3s ease both',
        'loader-dash': 'loaderDash 1.5s ease-in-out infinite',
        'loader-spin': 'spin2s 2s linear infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 5s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
