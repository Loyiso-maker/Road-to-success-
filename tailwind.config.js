module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        zinc: {
          400: '#a1a1a1',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        red: {
          300: '#fca5a5',
          400: '#f87171',
        },
        green: {
          400: '#4ade80',
        },
      },
    },
  },
  plugins: [],
}