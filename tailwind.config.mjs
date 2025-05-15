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
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
