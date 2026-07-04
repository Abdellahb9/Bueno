/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Semantic brand tokens — tweak here, not in components
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // primary orange
          600: '#ea580c',
          700: '#c2410c',
        },
        flame: {
          400: '#f87171',
          500: '#ef4444', // accent red
          600: '#dc2626',
        },
        cream: '#fdf6ec',
        charcoal: {
          800: '#1c1917',
          900: '#141110', // page background
          950: '#0c0a09',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(249, 115, 22, 0.45)',
        card: '0 20px 40px -18px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
};
