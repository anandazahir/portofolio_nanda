/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["MyCustomFont", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
      },
      animation: {
        blink: "blink 1s step-start infinite",
        scroll: "scroll 10s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      screens: {
        "h-sm": { raw: "(max-height: 640px)" }, // Contoh untuk height ≤ 640px
        "h-md": { raw: "(min-height: 641px) and (max-height: 768px)" }, // Contoh untuk 641px ≤ height ≤ 768px
        "h-lg": { raw: "(min-height: 769px)" }, // Contoh untuk height ≥ 769px
      },
    },
  },
  plugins: [],
};
