/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ssorange: "#F94B35",
        "ssorange-light": "#FEF4F3",
      },
    },
  },
  plugins: [],
}
