/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-cream': 'var(--custom-cream)',
        'custom-coral': 'var(--custom-coral)',
        'custom-blue': 'var(--custom-blue)',
      },
    },
  },
  plugins: [],
}