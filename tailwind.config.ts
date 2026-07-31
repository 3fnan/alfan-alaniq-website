import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F7F4EC",
        "bg-warm": "#F1EBDB",
        ink: "#161B22",
        navy: {
          DEFAULT: "#0E2238",
          light: "#15324E",
          dark: "#081421",
        },
        gold: {
          DEFAULT: "#D4B06A",
          light: "#E7C98A",
          dark: "#B88F43",
        },
        steel: "#5C6B78",
      },

      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },

      maxWidth: {
        wrap: "1140px",
      },
    },
  },
  plugins: [],
};

export default config;