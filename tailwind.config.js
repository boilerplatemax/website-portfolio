/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm neutral ink ramp — bright paper to soft charcoal for type.
        ink: {
          50: '#fdfcf9',
          100: '#f6f3ec',
          200: '#e8e2d5',
          300: '#cec6b4',
          400: '#a79e8c',
          500: '#7d7466',
          600: '#5f5749',
          700: '#453f34',
          800: '#2a251d',
          900: '#1b1712',
          950: '#12100b',
        },
        // Primary accent — a bright coral. The site's signature pop.
        clay: {
          400: '#ff7a4d',
          500: '#f5502a',
          600: '#dd3d1a',
          700: '#b52f12',
        },
        // Coral family reused for gradient fills.
        brand: {
          400: '#ff7a4d',
          500: '#f5502a',
          600: '#dd3d1a',
          700: '#b52f12',
        },
        // Secondary accent — an electric violet that plays off the coral.
        accent: {
          400: '#9d8bff',
          500: '#7256f0',
          600: '#5a3fd6',
        },
        // Fresh teal for occasional third-note highlights.
        pop: {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'ui-serif', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        // Soft, low, warm — a hint of lift, never a glow.
        soft: '0 1px 2px rgba(27, 23, 18, 0.04), 0 12px 32px -20px rgba(27, 23, 18, 0.25)',
        card: '0 1px 2px rgba(27, 23, 18, 0.04), 0 16px 40px -24px rgba(245, 80, 42, 0.35)',
      },
      letterSpacing: {
        label: '0.22em',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
