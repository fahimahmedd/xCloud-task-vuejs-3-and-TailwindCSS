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
        darkPrimary: '#FFBB5A', 
        darkSecondary: '#FFBB5A',
        lightBackground: '#ffffff', 
        darkBackground: '#171A30', 
        darkBackgroundSecondary: '#1D2239', 
        borderPrimaryLight: '#147AFF',
        borderSecondaryLight: '#FFBB5A',
        textPrimaryLight: '#171A30',
        textSecondaryLight: '#1D2239',
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
