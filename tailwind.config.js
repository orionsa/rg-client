/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        login: "url(src/assets/loginBg.jpg)"
      }
    },
  },
  plugins: [],
}

