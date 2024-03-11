import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "shorten-desktop": "url('/images/bg-shorten-desktop.svg')",
        "shorten-mobile": "url('/images/bg-shorten-mobile.svg')",
        "boost-desktop": "url('/images/bg-boost-desktop.svg')",
        "boost-mobile": "url('/images/bg-boost-mobile.svg')",
      },
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        gray: "hsl(0, 0%, 75%)",
        "light-violet": "hsl(230, 25%, 95%)",
        "dark-violet": "hsl(257, 27%, 26%)",
        "secondary-red": "hsl(0, 87%, 67%)",
        "grayish-violet": "hsl(257, 7%, 63%)",
        "very-dark-blue": "hsl(255, 11%, 22%)",
        "very-dark-violet": "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        poppins: "[var(--font-poppins), sans-serif]",
      },
    },
  },
  plugins: [],
};
export default config;
