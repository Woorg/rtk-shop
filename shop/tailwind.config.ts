import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        dark: "#282828",
        // bgMain: "#131322",
        gray: "#ccc",
        // lightGray: "#E0E0F0",
        softGray: "#A5A5A5",
        // orange: "#FF8411",
        // pink: "#FA00FF",
        // purple: "#C589ED",
        blue: "#00A2FF",
        // darkBlue: "#3721BD",
        // underline: "#81818E",
      },
    },
  },
  plugins: [
    require("@martijn.cuppens/tailwindcss-fluid")({
      minimum: 1.125, // Minimum size that needs fluid rescaling (in rem).
      breakpoint: 1280, // Max screen width where the fluid rescaling is applied to (in px).
      factor: 10, // Strength of resizing.
      twoDimensional: false, // Set to true if you want to resize to the smallest size of your device.
      unitPrecision: 5, // Rounding accuracy for calculated fluid resizing.
      remValue: 16, // Value of 1rem, needed for calculations.
    }),
    require("@tailwindcss/typography"),
  ],
};
export default config;
