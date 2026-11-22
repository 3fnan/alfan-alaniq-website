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
          // Gold for text on light backgrounds (passes WCAG AA on bg/white).
          ink: "#7E5F24",
        },
        steel: "#5C6B78",
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#1EBE5A",
        },
        body: "#33414C",
        "on-dark": "#D9DEE4",
        "on-dark-muted": "#A9B6C0",
        "on-dark-faint": "#8295A2",
      },

      fontFamily: {
        display: ["var(--font-plex-condensed)", "Arial Narrow", "sans-serif"],
        sans: ["var(--font-plex-sans)", "Arial", "sans-serif"],
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
