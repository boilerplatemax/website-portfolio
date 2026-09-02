/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Warm neutral ink ramp — paper-to-charcoal, no cool blue tint.
        ink: {
          50: '#faf9f4',
          100: '#f2efe6',
          200: '#e6e1d4',
          300: '#cec6b4',
          400: '#a79e8c',
          500: '#7d7466',
          600: '#5f5749',
          700: '#453f34',
          800: '#2a251d',
          900: '#1b1712',
          950: '#12100b',
        },
        // Single restrained accent — a warm clay. Used sparingly.
        clay: {
          400: '#d98a63',
          500: '#c86a3f',
          600: '#b0552e',
          700: '#8f4526',
        },
        // Back-compat aliases so any stray reference degrades gracefully
        // into the new monochrome/clay world instead of the old indigo.
        brand: {
          400: '#d98a63',
          500: '#c86a3f',
          600: '#b0552e',
          700: '#8f4526',
        },
        accent: {
          400: '#a79e8c',
          500: '#7d7466',
          600: '#5f5749',
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
        card: '0 1px 2px rgba(27, 23, 18, 0.04), 0 12px 32px -20px rgba(27, 23, 18, 0.25)',
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
