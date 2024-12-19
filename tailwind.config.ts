import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textShadow: {
        white: "2px 2px 4px white",
        light: "1px 1px 2px white",
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"), // Install this plugin: npm install tailwindcss-textshadow
  ],
} satisfies Config;
