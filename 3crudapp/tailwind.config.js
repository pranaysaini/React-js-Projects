/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'left': '-10px 0 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

