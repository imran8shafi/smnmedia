module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0057b8',
        },
        secondary: {
          light: '#f8f9fa',
          DEFAULT: '#e9ecef',
          dark: '#dee2e6',
        },
        pink: {
          DEFAULT: '#d9347e',
          light: '#ffd9eb',
          bg: '#ffe0f0',
        },
        dark: '#17151d',
        navy: '#0a2540',
        smnred: '#CC0000',
      },
      fontFamily: {
        hanken: ['Hanken Grotesk', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      maxWidth: {
        '900': '900px',
      },
    },
  },
  plugins: [],
};
