import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hurricane: ["var(--font-hurricane)", "sans-serif"],
        ebGaramond: ["var(--font-ebGaramond)", "sans-serif"],
      },
      colors: {
        hazel: {
          100: "#f2f5c6",
          200: "#eee8aa",
          300: "#cbce86",
          400: "#a8b461",
          500: "#86993d",
          600: "#637f19",
          700: "#4b6110",
          800: "#394a0c",
          900: "#1f2906",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
