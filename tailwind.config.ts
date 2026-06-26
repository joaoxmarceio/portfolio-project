import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#121212",
        fog: "#d9d9d9",
      },
      boxShadow: {
        soft: "0 24px 80px rgb(16 17 20 / 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
