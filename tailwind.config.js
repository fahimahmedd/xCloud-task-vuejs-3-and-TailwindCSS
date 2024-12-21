/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightPrimary: '#147AFF', 
        secondaryLight: '#FFBB5A', 
        darkPrimary: '#147AFF', 
        darkSecondary: '#FFBB5A',
        lightBackground: '#ffffff', 
        darkBackground: '#171A30', 
        darkBackgroundSecondary: '#1D2239', 
        borderPrimaryLight: '#147AFF',
        borderSecondaryLight: '#FFBB5A',
        lightText: '#171A30',
        darkText: '#74778e',
      },
      boxShadow: {
        defaultLight: '0 4px 6px rgba(0, 0, 0, 0.1)',
        dark: '0 4px 6px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
