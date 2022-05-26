module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },


    extend: {
      content: (theme) => ({
        "dollar-pattern": "url('../src/images/icon-dollar.svg')",
        "person-pattern": "url('../src/images/icon-person.svg')",
      }),
      colors: {
        strongCyan: "hsl(172, 67%, 45%)",
        veryDarkCyan: "hsl(183, 100%, 15%)",
        darkGrayishCyan: "hsl(186, 14%, 43%)",
        grayishCyan: "hsl(184, 14%, 56%)",
        lightGrayishCyan: "hsl(185, 41%, 84%)",
        veryLightGrayishGyan: "hsl(189, 41%, 97%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
};
