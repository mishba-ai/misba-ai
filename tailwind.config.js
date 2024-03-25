/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "semi-border": "50% 100px 100px 0 0",
      },
      fontFamily: {
        code: ['"Nanum Gothic Coding"', '"monospace"'],
        Kode: ['"Kode Mono"', "monospace"],
        Ubuntu: ['"Ubuntu"', "sans-serif"],
      },
      colors: {
        greenPrimary: "var(--greenPrimary)",
        greenSecondary: "var(--greenSecondary)",
        gray: "var(--gray)",
      },
    },
  },
  plugins: [],
};
