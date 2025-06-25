/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  safelist: [
    'hidden',
    'block',
    'flex',
    'items-center',
    'gap-8',
    'gap-10',
    'lg:flex',
    'lg:hidden',
    'lg:pr-12',
    'lg:pl-24',
    'xl:pr-12',
    'text-[#E9C883]',
    '!text-[#E9C883]',
    'font-habor',
    'has-menu',
    'scrolled-header',
  ],
  theme: {
    extend: {
      fontFamily: {
        'habor': ['HaboroContrastNormRegular', 'sans-serif'],
        'sans': ['Roboto', 'system-ui', 'sans-serif'],
      },
      colors: {
        'gold': '#E9C883',
      },
    },
  },
  plugins: [],
};
