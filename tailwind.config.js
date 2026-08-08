/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#494744",
        coral: "#fcbf1a",
        ink: "#1f1f26",
        muted: "#5d6470",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(16, 27, 44, 0.08)",
      },
    },
  },
  plugins: [],
};
