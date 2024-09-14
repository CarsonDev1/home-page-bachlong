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
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translate-y-2' },
        },
      },
      animation: {
        modalFadeIn: 'modalFadeIn 0.5s ease-out',
      },
    },
  },
  plugins: [],
};
export default config;
