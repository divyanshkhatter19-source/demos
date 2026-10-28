import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#903f00",
        "primary-container": "#b45309",
        "on-primary": "#ffffff",
        "on-primary-container": "#fff1eb",
        "primary-fixed": "#ffdbca",
        "primary-fixed-dim": "#ffb68e",
        "on-primary-fixed": "#331200",
        "on-primary-fixed-variant": "#763300",

        secondary: "#934b19",
        "secondary-container": "#ffa26a",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#783603",
        "secondary-fixed": "#ffdbc9",
        "secondary-fixed-dim": "#ffb68c",
        "on-secondary-fixed": "#321200",
        "on-secondary-fixed-variant": "#753401",

        tertiary: "#854600",
        "tertiary-container": "#a95b00",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#fff1e9",
        "tertiary-fixed": "#ffdcc3",
        "tertiary-fixed-dim": "#ffb77d",
        "on-tertiary-fixed": "#2f1500",
        "on-tertiary-fixed-variant": "#6e3900",

        background: "#fff8f5",
        "on-background": "#1e1b19",

        surface: "#fff8f5",
        "on-surface": "#1e1b19",
        "on-surface-variant": "#564338",
        "surface-bright": "#fff8f5",
        "surface-dim": "#e0d8d5",
        "surface-variant": "#e9e1dd",
        "surface-tint": "#9b4500",

        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#faf2ee",
        "surface-container": "#f4ece8",
        "surface-container-high": "#eee7e3",
        "surface-container-highest": "#e9e1dd",

        outline: "#897267",
        "outline-variant": "#ddc1b3",

        error: "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",

        "inverse-surface": "#33302d",
        "inverse-on-surface": "#f7efeb",
        "inverse-primary": "#ffb68e",
      },
      fontFamily: {
        headline: ["var(--font-newsreader)", "serif"],
        body: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        gutter: "1.5rem",
        "gutter-sm": "1rem",
        margin: "2rem",
        "margin-sm": "1.25rem",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};

export default config;

