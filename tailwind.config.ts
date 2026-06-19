import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F5F6F9",
        "bg-soft": "#ECEEF3",
        surface: "#FFFFFF",
        ink: { DEFAULT: "#14161B", 2: "#3B414C" },
        muted: "#6E747F",
        faint: "#9AA0AC",
        line: { DEFAULT: "#E3E6EC", 2: "#D5DAE2" },
        accent: { DEFAULT: "#2F6BFF", ink: "#1B4ED1", weak: "#EBF1FF" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "1080px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(20,22,27,.04), 0 6px 24px rgba(20,22,27,.06)",
      },
    },
  },
  plugins: [],
};

export default config;
