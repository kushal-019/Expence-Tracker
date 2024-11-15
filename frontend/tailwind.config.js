// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Tailwind will scan these files
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: {
          100: '#add8e6', // Light blue color
        },
        lightGreen: {
          100: '#90ee90', // Light green color
        },
        lightRed: {
          100: '#f08080', // Light red color
        },
      },
    },
  },
  plugins: [],
};
