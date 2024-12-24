/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        background: "rgba(var(--background))",
        foreground: "rgba(var(--foreground))"
      }
    },
  },
  plugins: [],
}