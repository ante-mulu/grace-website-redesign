/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-bounce": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "50%": { opacity: "1", transform: "translateY(0)" },
          "75%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "fade-bounce": "fade-bounce 2s ease-in-out infinite",
        slideLeft: "slideLeft 30s linear infinite",
      },
    },
  },
  plugins: [],
};
