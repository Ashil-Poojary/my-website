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
        // Neutral and Base Colors
        'charcoal-gray': '#393E46', // Card Background
        'light-gray': '#EEEEEE', // Card Text and Button Text
        'dark-blue-gray': '#222831', // Page Background
        'off-white': '#F9F7F7', // Soft White for page background or card highlights
    
        // Blue Shades
        'midnight-blue': '#112D4E', // Dark Blue for headers or accents
        'royal-blue': '#3F72AF', // Medium Blue for accents or buttons
        'pale-blue': '#769FCD', // Soft Blue for backgrounds or accents
        'sky-blue': '#B9D7EA', // Light Sky Blue for backgrounds or highlights
        'baby-blue': '#D6E6F2', // Very Light Blue for subtle backgrounds
        'light-blue': '#DBE2EF', // Very Light Blue for backgrounds or card highlights
    
        // Additional Colors
        'teal': '#00ADB5', // Button Background
        'almost-white': '#F7FBFC', // Very Light Gray-Blue for backgrounds
    }
    
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
