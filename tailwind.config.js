// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-bg': 'url(\'./src/assets/DesktopBgd.png\')',
        'mobile-bg': 'url(\'./src/assets/MobileBgd.png\')',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

