/** tailwind.config.js **/
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
    },
    extend: {
      screens: {
        tall: { raw: "(min-height: 700px)" }
      },
      colors: {
        primary: "#b44d00", // <– Χρησιμοποιείται κυρίως σε CTA buttons (π.χ. hover "Πρότεινε προϊόν")
        secondary: "rgba(27,71,48,1)", // <– Πιο σκούρο πράσινο, μπορεί να γίνει text-title-xl
        overlay: "rgba(0,0,0,0.5)",

        bg: "#f9f9f3", // <– πιθανό γενικό φόντο
        /* bg: "#000000", */ // <– παλιό, σχολιασμένο

        sectionlight: 'rgba(232,238,208,1)', // <– για ελαφριά sections
        title: "#1c2619", // ✅ ΝΕΟ: πιο σκούρο πράσινο για τίτλους section
        subtitle: "#2E3A25", // ✅ ΝΕΟ: για υπότιτλους
        bodytext: "#444", // ✅ ΝΕΟ: για βασικό κείμενο
      },
      fontSize: {
        "hero-title": ["clamp(2rem,5vw,4rem)", { lineHeight: "1.1" }],
        "hero-sub": ["clamp(1rem,3vw,1.5rem)", { lineHeight: "1.4" }],

        // ✅ ΝΕΕΣ τιμές για ενιαία χρήση σε κάθε section
        "title-xl": ["1.5rem", { lineHeight: "1.3" }], // ~24px
        "subtitle": ["1.125rem", { lineHeight: "1.6" }], // ~18px
        "body": ["1rem", { lineHeight: "1.75" }], // 16px
      },
    },
  },
  plugins: [],
};
