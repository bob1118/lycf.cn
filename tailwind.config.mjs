/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f7fb',
          100: '#e8eff7',
          200: '#ccdded',
          300: '#9fc0de',
          400: '#6b9ec9',
          500: '#4780b4',
          600: '#356698',
          700: '#2c527b',
          800: '#1e3a8a',
          900: '#0f172a',
          950: '#090e1a',
        },
        gold: {
          50: '#fbf8f1',
          100: '#f5efe0',
          200: '#eadbc0',
          300: '#dcc297',
          400: '#cba36d',
          500: '#c29b61',
          600: '#b17c42',
          700: '#936237',
          800: '#785032',
          900: '#62422b',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'Plus Jakarta Sans',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'sans-serif',
        ],
        display: [
          'Plus Jakarta Sans',
          'Inter',
          'PingFang SC',
          'Microsoft YaHei',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 10px 30px -5px rgba(15, 23, 42, 0.06), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
        card: '0 20px 40px -15px rgba(15, 23, 42, 0.1)',
      },
    },
  },
  plugins: [],
};
