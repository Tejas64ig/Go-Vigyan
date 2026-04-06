/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: "#FF8C00",
        'sacred-green': "#00C853",
        'alert-amber': "#FFD600",
        'critical-red': "#FF3D3D",
        'deep-void': "#0A0015",
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        exo2: ['"Exo 2"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        devanagari: ['"Tiro Devanagari Hindi"', 'serif'],
      },
      animation: {
        'border-rotate': 'border-rotate 4s linear infinite',
        'pulse-badge': 'pulse-badge 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'star-pulse': 'star-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'border-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-badge': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
        'star-pulse': {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        }
      }
    },
  },
  plugins: [],
}
