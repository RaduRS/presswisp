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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        h2: "clamp(1.75rem, 1.5vw + 1rem, 2.5rem)",
        body: "clamp(1rem, 1vw + 0.5rem, 1.15rem)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        serifTitle: ["var(--font-playfairDisplay)", "serif"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("@tailwindcss/typography"),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("@tailwindcss/line-clamp"),
  ],
};
export default config;
