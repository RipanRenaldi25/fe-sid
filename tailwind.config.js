/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'yellow-dark': '#FFCB74',
        'primary-white': '#F6F6F6',
        'primary-black': '#111111',
        'secondary-black': '#2F2F2F',
        'yellow-gray': '#FFE6BC',
        'primary-gray': '#EFEFEF',
        'secondary-blue': '#236BFE',
        'secondary-blue-dark': '#1C4BAA',
        'sidebar-color': '#fff',
        'bg-color': '#E4E9F7',
        'purple-color': '#695CFE',
      },
      screens: {
        mobile: '500px',
      },
    },
  },
  plugins: [],
};
