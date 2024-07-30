import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#EEEEEE"
      },
      fontFamily: {
        Inter: "Inter"
      },
      screens: {
        xs: "420px"
      }
    },
  },
  plugins: [],
};
export default config;
