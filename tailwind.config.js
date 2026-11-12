/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.template.html",
    "./*.jsx",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        slate: {
          925: '#0f172a',
          950: '#0b0f19',
          975: '#070a12',
        },
        brand: {
          indigo: '#6366f1',
          purple: '#8b5cf6',
          violet: '#a855f7',
          cyan: '#06b6d4',
          pink: '#ec4899',
          flame: '#ff4d2e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-indigo': '0 0 25px -5px rgba(99, 102, 241, 0.4)',
        'glow-purple': '0 0 25px -5px rgba(168, 85, 247, 0.4)',
        'inner-glow': 'inset 0 0 20px 0 rgba(99, 102, 241, 0.15)',
      },
      animation: {
        'grid-flow': 'gridMove 30s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '64px 64px' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
