// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         blue: "#2997FF",
//         gray: {
//           DEFAULT: "#86868b",
//           100: "#94928d",
//           200: "#afafaf",
//           300: "#42424570",
//         },
//         zinc: "#101010",
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class", // Enable class-based dark mode

  theme: {
    extend: {
      colors: {
        // Your existing colors
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",

        // Additional theme tokens for light/dark mode
        primary: {
          light: "#1d4ed8",
          dark: "#93c5fd",
        },
        background: {
          light: "#ffffff",
          dark: "#111827",
        },
      },
    },
  },

  plugins: [],
};
