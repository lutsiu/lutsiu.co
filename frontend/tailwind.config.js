/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mb: {min: '350px'},
        sm: { min: "576px" },
        md: { min: "768px" },
        lg: { min: "992px" },
        xl: { min: "1200px" },
        "2xl": { min: "1400px" },
      },
    },
  },
  plugins: [],
}