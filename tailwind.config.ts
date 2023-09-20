import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-montserrat)"],
      serif: ["var(--font-quicksand)"],
      hand: ["var(--font-caveat)"],
    }
  },
  plugins: [
    require("@tailwindcss/container-queries"),
  ],
}
export default config
