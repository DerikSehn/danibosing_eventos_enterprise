import fontFamily from "./styles/fonts/fonts"

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily,
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

      },
      colors: {
        'zeus': {
          50: '#F4F4F4',
          100: '#E9E9E8',
          200: '#C9C8C6',
          300: '#A9A7A4',
          400: '#68645F',
          500: '#27221B',
          600: '#231F18',
          700: '#171410',
          800: '#120F0C',
          900: '#0C0A08',
        },

        'whiskey': {
          50: '#FDFAF8',
          100: '#FCF5F1',
          200: '#F7E7DC',
          300: '#F1D8C7',
          400: '#E7BB9C',
          500: '#DD9E72',
          600: '#C78E67',
          700: '#855F44',
          800: '#634733',
          900: '#422F22',
        },

        'stack': {
          50: '#FAFAFA',
          100: '#F4F4F4',
          200: '#E4E4E4',
          300: '#D3D4D3',
          400: '#B3B4B2',
          500: '#929491',
          600: '#838583',
          700: '#585957',
          800: '#424341',
          900: '#2C2C2C',
        },

        'oregon': {
          50: '#FAF6F3',
          100: '#F6ECE8',
          200: '#E7D0C5',
          300: '#D9B4A1',
          400: '#BD7C5B',
          500: '#A04415',
          600: '#903D13',
          700: '#60290D',
          800: '#481F09',
          900: '#301406',
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}