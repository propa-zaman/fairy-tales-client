/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: [
      {
        disney: {
          primary: "#FF4081", // Pink
          secondary: "#F8D23B", // Belle Yellow
          accent: "#1ABC9C", // Tiana Green
          neutral: "#3D4451", // Dark Gray
          "base-100": "#FFB2D9", // Light Pink
          "base-200": "#F39C12", // Bright Orange
          "base-300": "#4A90E2", // Royal Blue
          "base-400": "#9B59B6", // Rapunzel Purple
          "base-500": "#E74C3C", // Mulan Red
          "base-600": "#217CCF", // Cinderella Blue
        },
      },
      "light",
      "cupcake",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
}

