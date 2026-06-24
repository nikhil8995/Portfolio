/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        display: ['Syne', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        neon: {
          cyan: '#00f5ff',
          green: '#39ff14',
          purple: '#bf5af2',
          orange: '#ff6b35',
          pink: '#ff2d78',
        },
        void: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#94a3b8',
          400: '#64748b',
          500: '#475569',
          600: '#334155',
          700: '#1e293b',
          800: '#0f172a',
          900: '#060d1f',
          950: '#020817',
        },
      },
      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        glowPulse: {
          '0%': { boxShadow: '0 0 5px #00f5ff44, 0 0 10px #00f5ff22' },
          '100%': { boxShadow: '0 0 20px #00f5ff88, 0 0 40px #00f5ff44' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(60px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
