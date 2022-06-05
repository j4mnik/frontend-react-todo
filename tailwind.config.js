module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-intro': "url('/src/assets/background.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
