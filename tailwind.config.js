/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff5f2',
          100: '#ffe8e0',
          200: '#ffd0c0',
          300: '#ffa88a',
          400: '#f57a5a',
          500: '#e85d3e',
          600: '#d44a2e',
          700: '#b13a24',
          800: '#8f311f',
          900: '#6e2a1a',
        },
        earth: {
          50: '#faf6f2',
          100: '#f0e6d8',
          200: '#e0ccaf',
          300: '#c9a87c',
          400: '#b08a5a',
          500: '#8f6e42',
          600: '#6e5432',
          700: '#4f3d24',
          800: '#3a2d1a',
          900: '#2a2012',
        },
        warm: {
          50: '#fff8f5',
          100: '#ffede6',
          200: '#ffd9cc',
          300: '#ffb8a0',
          400: '#f59375',
          500: '#e87a5a',
          600: '#d46240',
          700: '#b34d30',
          800: '#8f3d26',
          900: '#6e2f1e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
