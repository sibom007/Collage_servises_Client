/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        site: "url('./public/scattered-forcefields (1).png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
