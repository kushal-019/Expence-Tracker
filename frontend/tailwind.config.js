/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}", // Paths for React components
];
export const theme = {
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
};
export const plugins = [];
