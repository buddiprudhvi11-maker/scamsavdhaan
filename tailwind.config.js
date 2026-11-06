/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-danger': 'redPulse 2s infinite',
      },
      keyframes: {
        redPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(220, 38, 38, 0.6)' },
          '50%': { boxShadow: '0 0 0 12px rgba(220, 38, 38, 0)' },
        },
      },
    },
  },
  plugins: [],
}

