import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
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
        primary_dark: "var(--primary-dark)",
        secondary_dark: "var(--secondary-dark)",
        secondary_light: "var(--secondary-light)",
      },
    },
  },
  plugins: [],
} satisfies Config;
