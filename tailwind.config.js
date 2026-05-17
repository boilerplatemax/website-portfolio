/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f7fb',
          100: '#eceef6',
          200: '#d4d8e8',
          300: '#a9b1cf',
          400: '#7a85b3',
          500: '#525e93',
          600: '#3d4775',
          700: '#2a3157',
          800: '#1a1e3a',
          900: '#0d1024',
          950: '#06081a',
        },
        accent: {
          400: '#6ee7b7',
          500: '#10b981',
          600: '#059669',
        },
        brand: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 80px -20px rgba(99, 102, 241, 0.5)',
        card: '0 10px 40px -10px rgba(15, 23, 42, 0.15)',
      },
      animation: {
        'gradient-x': 'gradient-x 12s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'blink': 'blink 1s steps(1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
