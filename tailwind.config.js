// tailwind.config.js
import typography from '@tailwindcss/typography';


export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    typography,
  ],
};
