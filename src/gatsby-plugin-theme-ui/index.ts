import { merge, ThemeUIStyleObject } from "theme-ui";
import tailwind from "@theme-ui/preset-tailwind";

declare module "theme-ui" {
  interface Theme {
    footer?: ThemeUIStyleObject;
    texts?: ThemeUIStyleObject;
  }
}

const fontSizeFactor = 8;

const theme = merge(tailwind, {
  config: {
    initialColorModeName: `light`,
  },
  colors: {
    primary: tailwind.colors.blue[6],
    secondary: tailwind.colors.rose[6],
    text: tailwind.colors.gray[3],
    heading: tailwind.colors.white,
    background: `#141821`,
    divider: tailwind.colors.gray[8],
    textMuted: tailwind.colors.gray[5],
    icon_brightest: tailwind.colors.white,
    icon_darker: tailwind.colors.gray[7],
    icon_darkest: tailwind.colors.gray[8],
    icon_red: tailwind.colors.red[6],
    icon_blue: tailwind.colors.blue[6],
    icon_orange: tailwind.colors.orange[5],
    icon_yellow: tailwind.colors.yellow[5],
    icon_pink: tailwind.colors.pink[5],
    icon_purple: tailwind.colors.purple[6],
    icon_green: tailwind.colors.green[5],
    modes: {
      light: {
        text: tailwind.colors.gray[8],
        heading: tailwind.colors.black,
        primary: tailwind.colors.blue[6],
        background: tailwind.colors.gray[1],
        divider: tailwind.colors.gray[2],
        textMuted: tailwind.colors.gray[6],
        icon_brightest: tailwind.colors.gray[2],
        icon_darker: tailwind.colors.gray[4],
        icon_darkest: tailwind.colors.gray[6],
      },
    },
  },
  breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
  lineHeights: {
    body: 1.5,
  },
  styles: {
    root: {
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
      fontFamily: `"Inter", sans-serif`,
      color: `text`,
      backgroundColor: `background`,
      WebkitTextSizeAdjust: `100%`,
      a: {
        color: `primary`,
        textDecoration: `none`,
        transition: `all 0.3s ease-in-out`,
        "&:hover": {
          color: `primary`,
          textDecoration: `none`,
        },
      },
      img: {
        borderStyle: `none`,
      },
      pre: {
        fontFamily: `monospace`,
        fontSize: `1em`,
      },
    },
    legal: {
      h1: {
        my: 3,
      },
      h2: {
        my: 2,
      },
      h3: {
        my: 3,
      },
    },
    p: {
      //fontSize: [1 * fontSizeFactor, 2 * fontSizeFactor],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      color: `text`,
    },
    blockquote: {
      marginLeft: 0,
      p: {
        //fontSize: [2 * fontSizeFactor, 3 * fontSizeFactor],
        fontWeight: `medium`,
        color: `heading`,
      },
    },
    h1: {
      fontSize: [6 * fontSizeFactor, 7 * fontSizeFactor, 8 * fontSizeFactor],
      mt: 2,
      mb: 3,
      textShadow: `rgba(255, 255, 255, 0.15) 0px 5px 35px`,
      letterSpacing: `wide`,
      color: `heading`,
    },
    h2: {
      fontSize: [4 * fontSizeFactor, 5 * fontSizeFactor, 6 * fontSizeFactor],
      mt: 2,
      mb: 2,
      color: `heading`,
    },
    h3: {
      fontSize: [3 * fontSizeFactor, 4 * fontSizeFactor, 5 * fontSizeFactor],
      mt: 3,
      color: `heading`,
    },
    h4: {
      fontSize: [2 * fontSizeFactor, 3 * fontSizeFactor, 4 * fontSizeFactor],
      color: `heading`,
    },
    h5: {
      fontSize: [1 * fontSizeFactor, 2 * fontSizeFactor, 3 * fontSizeFactor],
      color: `heading`,
    },
    h6: {
      fontSize: 1 * fontSizeFactor,
      mb: 2,
      color: `heading`,
    },
  },
  layout: {
    container: {
      maxWidth: `5xl`,
    },
  },
  buttons: {
    toggle: {
      color: `background`,
      border: `none`,
      backgroundColor: `text`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 2,
      ml: 3,
    },
    ghost: {
      color: `text`,
      border: `none`,
      backgroundColor: `transparent`,
      fontFamily: `"Inter", sans-serif`,
    },
  },
  footer: {
    textAlign: `center`,
    display: `block`,
    bottom: 0,
    color: `textMuted`,
    px: [2, 3],
    py: [3, 4],
  },
  texts: {
    bigger: {
      p: {
        fontSize: [2 * fontSizeFactor, 3 * fontSizeFactor, 4 * fontSizeFactor],
      },
    },
  },
});

export default theme;
