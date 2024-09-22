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
        da_red: "#8B032C",
        da_gold: "#FFC60B",
        da_dark: "#020617",
      },
    },
  },
  plugins: [],
};
export default config;
