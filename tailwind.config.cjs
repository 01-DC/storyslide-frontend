/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ssorange: "#F94B35",
        "ssorange-light": "#FEF4F3",
        "cta-brown": "#1E1E1EB2",
        "cta-brown-tran": "#1E1E1E4D",
      },
      height: {
        frame: "50vh",
      },
    },
  },
  plugins: [],
}
