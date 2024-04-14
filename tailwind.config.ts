import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Quicksand', 'sans-serif'],
    },
    backgroundImage: {
      'hero-gradient': 'linear-gradient(90deg, rgba(98,114,84,1) 0%, rgba(118,136,91,1) 57%, rgba(255,255,255,1) 100%)',
      'hero-gradient-mobile': 'linear-gradient(to top, rgba(98,114,84,1) 0%, rgba(118,136,91,1) 57%, rgba(255,255,255,1) 100%)',

    }
  },
},
  plugins: [],
};
export default config;
