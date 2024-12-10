import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        headerBG: "var(--headerBG)",
        "todo-base": "var(--todo-base)",
        "todo-complete": "var(--todo-complete)",
        "todo-overdue": "var(--todo-overdue)"
      },
      spacing: {
        '9.5': '2.375rem'
      },
    },
  },
  plugins: [],
} satisfies Config;
