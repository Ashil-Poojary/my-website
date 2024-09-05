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
        'text-color1': '#black',
        'text-color2': '#black',
        'bgColor': '#FBF8F1',
        'grey-card': '#F7ECDE',
        'btnColor2':"#BF9270",
        'btnColor1':"#DCD7C9",
      },
    },
  },
  plugins: [],
};
export default config;
