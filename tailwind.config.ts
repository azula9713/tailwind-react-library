import { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700",
        secondary: "#000000",
        tertiary: "#FF8C00",
      },
      textColor: {
        primary: "#000000",
        secondary: "#FFFFFF",
        tertiary: "#0F0F0F",
      },
    },
  },
  plugins: [],
  safelist: [
    "text-primary",
    "text-secondary",
    "text-tertiary",
    "bg-primary",
    "bg-secondary",
    "bg-tertiary",
  ],
};

export default config;
