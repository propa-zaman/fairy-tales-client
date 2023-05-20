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
        mytheme: {
          primary: "#F596AA", // Aurora Pink
          secondary: "#F8D23B", // Belle Yellow
          accent: "#3DD5A3", // Ariel Seafoam Green
          neutral: "#E43A3F", // Snow White Red
          "base-100": "#ffff", // white
          info: "#32B8A4", // Jasmine Teal
          success: "#9B59B6", // Rapunzel Purple
          warning: "#E74C3C", // Mulan Red
          error: "#1ABC9C", // Tiana Green
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
}

