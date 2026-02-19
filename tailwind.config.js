/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#F6F3EF',
        bgAlt: '#FAF8F5',
        card: '#FFFFFF',
        textPrimary: '#1C1C1C',
        textBody: '#4A4A4A',
        textMuted: '#8C8C8C',
        accent: '#B08D6D',
        accentDark: '#9C7B5A',
        borderSoft: '#E8E2DA',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        luxe: '0 10px 30px rgba(0,0,0,0.05)',
        soft: '0 10px 24px rgba(0,0,0,0.04)',
      },
      maxWidth: {
        content: '1200px',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
