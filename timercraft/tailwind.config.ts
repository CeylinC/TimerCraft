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
        header: "var(--color-header)",
        card: "var(--color-card)",
        text: "var(--color-text)",
        screen: "var(--color-screen)",
        title: "var(--color-title)",
        label: "var(--color-label)",
        labelActive: "var(--color-label-active)",
        sidebar: "var(--color-sidebar)",
        inputActive: "var(--color-input-active)",
        inputBackground: "var(--color-input-background)",
        inputAccent: "var(--color-input-accent)",
        disabled: "var(--color-disabled)",
        inputHover: "var(--color-input-hover)",
        background: "var(--color-background)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
