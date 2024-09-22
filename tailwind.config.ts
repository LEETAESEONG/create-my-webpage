import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      // font 추가
      fontFamily: {
        exo_2: "var(--font-exo_2)",
        montserrat: "var(--font-montserrat)",
      },
      blur: {
        "2.5": "10px",
      },
    },
  },
  plugins: [],
};
export default config;
