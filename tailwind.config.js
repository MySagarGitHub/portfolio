/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Linked to the variables in your layout.tsx
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#080808', // Deepest black
          800: '#0F0F0F', // Card background
          700: '#1A1A1A', // Border/lighter elements
        },
        brand: {
          purple: '#B44CFF',
          orange: '#FF7A18',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #B44CFF 0%, #FF7A18 100%)',
      },
    },
  },
  plugins: [],
}