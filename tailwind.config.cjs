/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.{svelte,js,ts,html}", "./src/**/*.svelte"],
  theme: {
    extend: {
      backgroundImage: {
        "section-pattern": "url('/public/Dot.svg')"
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false
  }
}
