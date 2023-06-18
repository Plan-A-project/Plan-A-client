import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "grey.900",
      },
      // a: {
      //   color: "teal.500",
      // },
    },
  },
  textStyles: {
    headline1: {
      fontFamily: "Pretendard",
      fontSize: "24px",
      fontWeight: "semibold",
      lineHeight: "32px",
      letterSpacing: "0",
    },
    headline2: {
      fontFamily: "Pretendard",
      fontSize: "20px",
      fontWeight: "semibold",
      lineHeight: "20px",
      letterSpacing: "0",
    },
    subtitle1: {
      fontFamily: "Pretendard",
      fontSize: "18px",
      fontWeight: "semibold",
      lineHeight: "21px",
      letterSpacing: "0",
    },
    subtitle2: {
      fontFamily: "Pretendard",
      fontSize: "16px",
      fontWeight: "semibold",
      lineHeight: "19px",
      letterSpacing: "0",
    },
    body1: {
      fontFamily: "Pretendard",
      fontSize: "16px",
      fontWeight: "normal",
      lineHeight: "20px",
      letterSpacing: "0",
    },
    body2: {
      fontFamily: "Pretendard",
      fontSize: "14px",
      fontWeight: "normal",
      lineHeight: "17px",
      letterSpacing: "0",
    },
    body3: {
      fontFamily: "Pretendard",
      fontSize: "14px",
      fontWeight: "normal",
      lineHeight: "16px",
      letterSpacing: "0",
    },
    caption1: {
      fontFamily: "Pretendard",
      fontSize: "12px",
      fontWeight: "semibold",
      lineHeight: "14px",
      letterSpacing: "0",
    },
    caption2: {
      fontFamily: "Pretendard",
      fontSize: "12px",
      fontWeight: "normal",
      lineHeight: "14px",
      letterSpacing: "0",
    },
    overline: {
      fontFamily: "Pretendard",
      fontSize: "10px",
      fontWeight: "",
      lineHeight: "12px",
      letterSpacing: "0",
    },
    timetable1: {
      fontFamily: "Pretendard",
      fontSize: "9px",
      fontWeight: "medium",
      lineHeight: "11px",
      letterSpacing: "0",
    },
    timetable2: {
      fontFamily: "Pretendard",
      fontSize: "7px",
      fontWeight: "normal",
      lineHeight: "8px",
      letterSpacing: "0",
    },
  },
  colors: {
    primary: {
      50: "#EDF3FC",
      100: "#D2E0F9",
      200: "#AFCAF8",
      300: "#80ABF5",
      normal: "#4282F0",
      500: "#3F52E4",
      600: "#2D42E1",
      700: "#1C30C9",
      800: "#152394",
      900: "#0E1967",
    },
    secondary: {
      50: "#EEFBFA",
      100: "#C5F2EE",
      200: "#93E7DF",
      300: "#58DACE",
      normal: "#2DC8B9",
      500: "#00AB9A",
      600: "#008F81",
      700: "#007065",
      800: "#005249",
      900: "#003D36",
    },
    // error: #F90B66,
    // background1: #FFFFFF,
    // background2: #F7F8FA,
  },
  breakpoints: {
    sm: "375px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: "primary.500",
          color: "white",
          _hover: {
            bg: "primary.300",
          },
          _active: {
            bg: "primary.300",
          },
          _disabled: {
            bg: "#DBDCE1",
          },
        },
      },
      outline: {
        border: "1px solid",
        borderColor: "primary.500",
        color: "primary.500",
        bg: "white",
        _hover: {
          bg: "primary.50",
        },
        _active: {
          bg: "primary.50",
        },
        _disabled: {
          bg: "white",
          borderColor: "#DBDCE1",
          color: "#DBDCE1",
        },
      },
      ghost: {
        bg: "white",
        color: "primary.500",
        _hover: {
          bg: "primary.50",
        },
        _active: {
          bg: "primary.50",
        },
        _disabled: {
          bg: "white",
          color: "#DBDCE1",
        },
      },
    },
  },
});
