/** tailwind.config.js **/
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
    },
    extend: {
      screens: { tall: { raw: "(min-height: 700px)" } },
      colors: {
        primary: "#b44d00",
        secondary: "rgba(27,71,48,1)",
        overlay: "rgba(0,0,0,0.5)",
        bg: "#f9f9f3",
        /*bg: "#000000",*/
        sectionlight: 'rgba(232,238,208,1)'
      },
      fontSize: {
        "hero-title": ["clamp(2rem,5vw,4rem)", { lineHeight: "1.1" }],
        "hero-sub": ["clamp(1rem,3vw,1.5rem)", { lineHeight: "1.4" }],
      },
    },
  },
  plugins: [],
};
