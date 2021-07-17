module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        50: "#dff7f7",
        100: "#b0ebec",
        200: "#7bdde1",
        300: "#43cfd6", //dark
        400: "#00c4ce",
        500: "#00bac9",
        600: "#00aab6",
        700: "#00959d",
        800: "#008186",
        900: "#005e5c",
      },
      secondary: {
        50: "#ecfeef",
        100: "#d3fbd8", // dark
        200: "#b9f9c2",
        300: "#9ff6ab",
        400: "#88f097",
        500: "#75eb83",
        600: "#6ada77",
        700: "#5ec56a",
        800: "#54b35f",
        900: "#41924a",
      },
      background: {
        dark: "#121212",
        light: "#fff",
        gray: "#f3f3f3",
        dp01: "#1e1e1e",
        dp02: "#222222",
        dp03: "#242424",
        dp04: "#272727",
        dp06: "#2c2c2c",
        dp08: "#2e2e2e",
        dp12: "#333333",
        dp16: "#343434",
        dp24: "#383838",
      },
      default: {
        black: "#000",
        white: "#fff",
      },
    },
    extend: {
      fontFamily: {
        title: ["raleway", "montserrat", "sans-serif"],
        body: ["open sans", "Helvetica Neue", "helvetica"],
      },
      opacity: {
        38: "0.38",
        87: "0.87",
      },
      textOpacity: {
        38: "0.38",
        87: "0.87",
      },
      strokeWidth: {
        3: "3",
        4: "4",
        "5/2": "2.5",
        "7/2": "3.5",
      },
      width: {
        76: "19rem",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["disabled"],
      textColor: ["disabled"],
      textOpacity: ["disabled"],
      borderOpacity: ["disabled"],
      borderWidth: ["dark"],
      borderColor: ["hover", "dark"],
      textDecoration: ["hover", "dark"],
    },
  },
  plugins: [],
};
