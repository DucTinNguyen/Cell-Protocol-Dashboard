import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "category-gradient": "linear-gradient(90deg, rgba(140, 227, 57, 0.40) -5.56%, rgba(140, 227, 57, 0.00) 100%), rgba(255, 255, 255, 0.20)",
      },
      fontFamily: {
        neueHass: ['var(--font-neueHass)'],
        marbold: ['var(--font-marbold)'],
      },
    },
  },
  plugins: [],
};
export default config;
