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
        // Neo-brutalism palette
        neo: {
          bg: "#FFFDF5",       // cream / aged paper
          ink: "#000000",       // pure black — all borders, text, shadows
          accent: "#FF6B6B",    // hot red
          secondary: "#FFD93D", // vivid yellow
          muted: "#C4B5FD",     // soft violet
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "neo-sm":  "4px 4px 0px 0px #000000",
        "neo-md":  "8px 8px 0px 0px #000000",
        "neo-lg":  "12px 12px 0px 0px #000000",
        "neo-xl":  "16px 16px 0px 0px #000000",
        "neo-sm-w": "4px 4px 0px 0px #FFFFFF",
        "neo-md-w": "8px 8px 0px 0px #FFFFFF",
      },
      animation: {
        "spin-slow": "spin-slow 10s linear infinite",
        "marquee":   "marquee 25s linear infinite",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
