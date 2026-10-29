import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pearl: "#FAF9F6",
        champagne: "#E8DDC8",
        gold: { DEFAULT: "#B99A5A", deep: "#9A7E43" },
        cocoa: "#45382C",
        sand: "#F4EFE7",
        graphite: "#292724",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: { eyebrow: "0.22em" },
      boxShadow: {
        soft: "0 24px 60px -28px rgba(69,56,44,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
