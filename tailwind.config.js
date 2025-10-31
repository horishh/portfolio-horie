// tailwind.config.js
import { defineConfig } from "tailwindcss";

export default defineConfig({
  darkMode: "selector", 
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [{ pattern: /dark:/ }], 
  plugins: [],
});
