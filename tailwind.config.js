/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff914d',
        secondary: '#395B64',
        dark: '#1e293b',
        accent: '#0ea5e9',
      },
      fontFamily: {
        'sans': ['Avenir LT W01 35 Light', 'Avenir', 'Inter', 'system-ui', 'sans-serif'],
        'display': ['Raleway', 'Space Grotesk', 'system-ui', 'sans-serif'],
        'avenir': ['Avenir LT W01 35 Light', 'Avenir', 'system-ui', 'sans-serif'],
        'raleway': ['Raleway', 'system-ui', 'sans-serif'],
      },
      backgroundSize: {
        '200%': '200%',
      },
      animation: {
        // ── Existing ──────────────────────────────────
        'fade-in-up':   'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'scale-in':     'scaleIn 0.4s ease-out forwards',
        'float':        'float 3s ease-in-out infinite',
        'glow':         'glow 2s ease-in-out infinite',
        'shimmer':      'shimmer 2s linear infinite',
        'pulse-slow':   'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',

        // ── Divider ───────────────────────────────────
        'expand-line':  'expandLine 0.8s cubic-bezier(0.4,0,0.2,1) 0.3s forwards',
        'glow-pulse':   'glowPulse 2s ease-in-out 1.2s infinite',
        'shimmer-run':  'shimmerRun 0.6s ease 1.1s forwards',
        'dot-pop':      'dotPop 0.3s ease forwards',

        // ── Scroll indicator ──────────────────────────
        'line-drain':   'lineDrain 1.8s ease-in-out infinite',
        'chev-bounce':  'chevBounce 1.6s ease-in-out infinite',
        'mouse-drop':   'mouseDrop 1.8s ease-in-out infinite',
        'orbit':        'orbit 2.4s linear infinite',

        // ── Hero reveal ───────────────────────────────
        'fade-up':      'fadeUp 0.9s ease forwards',
        'fade-in':      'fadeIn 1s ease forwards',
        'expand-w':     'expandW 0.8s ease forwards',
      },
      keyframes: {
        // ── Existing ──────────────────────────────────
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%':   { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 5px rgba(255,145,77,0.3)' },
          '50%':      { textShadow: '0 0 20px rgba(255,145,77,0.6)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '0% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },

        // ── Divider ───────────────────────────────────
        expandLine: {
          'to': { width: '48px' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 0px 0 rgba(234,88,12,0)' },
          '50%':      { boxShadow: '0 0 8px 2px rgba(234,88,12,0.5)' },
        },
        shimmerRun: {
          '0%':   { opacity: '0', transform: 'translateX(-6px)' },
          '30%':  { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateX(54px)' },
        },
        dotPop: {
          '0%':   { opacity: '0', transform: 'scale(0)' },
          '60%':  { opacity: '1', transform: 'scale(1.3)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },

        // ── Scroll indicator ──────────────────────────
        lineDrain: {
          '0%':   { top: '-100%' },
          '60%':  { top: '100%' },
          '61%':  { top: '-100%' },
          '100%': { top: '-100%' },
        },
        chevBounce: {
          '0%, 100%': { transform: 'rotate(45deg) translateY(0)' },
          '50%':      { transform: 'rotate(45deg) translateY(4px)' },
        },
        mouseDrop: {
          '0%, 100%': { transform: 'translateY(0)',    opacity: '1' },
          '60%':      { transform: 'translateY(10px)', opacity: '0' },
          '61%':      { transform: 'translateY(0)',    opacity: '0' },
          '80%':      { opacity: '1' },
        },
        orbit: {
          'to': { transform: 'rotate(360deg)' },
        },

        // ── Hero reveal ───────────────────────────────
        fadeUp: {
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'to': { opacity: '1' },
        },
        expandW: {
          'to': { width: '56px' },
        },
      },
    },
  },
  plugins: [],
}