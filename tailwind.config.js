/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        code: ['"Nanum Gothic Coding"', '"monospace"'],
        Kode: ['"Kode Mono"', "monospace"],
      },
      colors: {
        greenPrimary: "var(--greenPrimary)",
        greenSecondary: "var(--greenSecondary)",
      },
    },
  },
  plugins: [],
};
