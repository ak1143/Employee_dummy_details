/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        custombgColor: '#19163d',    // Example: Red color in RGB
        customColor: '#2e3058',  // Example: Green color in RGB
        customBlue: 'rgb(0, 0, 255)',   // Example: Blue color in RGB
      },
    },
  },
  plugins: [],
}