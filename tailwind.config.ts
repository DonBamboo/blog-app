import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "ba-",
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "426px",
        sm: "769px",
        md: "1025px",
      },
      colors: {
        tealish: "#090D1F",
      },
    },
  },
  plugins: [],
};
export default config;
