/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkseagreen: {
          "100": "#a4cb9d",
          "200": "#70996b",
        },
        darkolivegreen: {
          "100": "#336633",
          "200": "#154614",
          "300": "#104010",
          "400": "#003300",
          "500": "rgba(51, 102, 51, 0.09)",
        },
        darkslategray: "#1e2b1e",
        lightcoral: {
          "100": "#ea818b",
          "200": "#dc868d",
        },
        black: "#000",
        seagreen: {
          "100": "#477a47",
          "200": "rgba(71, 122, 71, 0.09)",
        },
        gainsboro: "#e6e6e6",
        gray: {
          "100": "#33000b",
          "200": "rgba(0, 0, 0, 0.2)",
          "300": "rgba(255, 255, 255, 0)",
          "400": "rgba(0, 0, 0, 0.5)",
        },
        crimson: "#ed2939",
        whitesmoke: {
          "100": "rgba(236, 236, 236, 0)",
          "200": "rgba(245, 245, 245, 0)",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        abel: "Abel",
        verveine: "Verveine",
        "nimbus-sans-extd": "'Nimbus Sans Extd'",
        abeezee: "ABeeZee",
      },
      borderRadius: {
        "8xs": "5px",
        "21xl": "40px",
        "24xl": "43px",
        "6xl": "25px",
        "31xl": "50px",
        xl: "20px",
        "3xs": "10px",
        mini: "15px",
        "25xl": "44px",
        "28xl-1": "47.1px",
      },
    },
    fontSize: {
      smi: "13px",
      xs: "12px",
      base: "16px",
      mini: "15px",
      "46xl": "65px",
      "20xl": "39px",
      "33xl": "52px",
      xl: "20px",
      "6xl": "25px",
      lgi: "19px",
      "7xl": "26px",
      sm: "14px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      "13xl": "32px",
      "21xl": "40px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "lg-1": "18.1px",
      "40xl": "59px",
      "16xl": "35px",
      "28xl": "47px",
      inherit: "inherit",
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
