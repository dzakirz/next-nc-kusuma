/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./layouts/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "4rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#a3e635",
          secondary: "#2dd4bf",
          accent: "#22d3ee",
          neutral: "#1B171C",
          "base-100": "#fae8ff",
          info: "#818cf8",
          success: "#4ade80",
          warning: "#fde047",
          error: "#fb7185",
        },
      },
    ],
  },
};
