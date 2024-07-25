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
        white: "#fff",
        whitesmoke: "#f5f5f5",
        black: "#000",
        gray: "rgba(0, 0, 0, 0.54)",
        royalblue: "#1877f2",
        tomato: "#e94235",
        dodgerblue: "#4285f4",
        orange: "#fabb05",
        mediumseagreen: "#34a853",
        background: "#f9fbfd",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
      },
      borderRadius: {
        "145xl-9": "164.9px",
        "2xl": "21px",
      },
    },
    fontSize: {
      "23xl": "2.625rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
export default config;