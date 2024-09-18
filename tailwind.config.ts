import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#fad200",
        secondary: "#fdea8a",
      },
      keyframes: {
        modalFadeIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translate-y-2" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        modalFadeIn: "modalFadeIn 0.5s ease-out",
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-in": "slideIn 0.8s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
