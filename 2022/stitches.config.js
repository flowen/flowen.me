import { createStitches } from "@stitches/react";
import { mixins } from "stitches-mixins";

export const { styled, getCssText, theme } = createStitches({
  media: {
    mobile: "(min-width: 20em)", // 320px
    tablet: "(min-width: 48em)", // 768px
    tabletLandscape: "(min-width: 64em)", // 1024px
    laptop: "(min-width: 72.5em)", // 1160px
    desktop: "(min-width: 90em)", // 1440px
    darkMode: "(prefers-color-scheme: dark)",
  },
  theme: {
    fonts: {
      fontBase:
        '"AzeretMono Black", monospace, Arial, -apple-system, BlinkMacSystemFont',
      fontAlt:
        '"Ephidona", monospace, Arial, -apple-system, BlinkMacSystemFont',
    },
    color: {
      yellow: "#f0f26a",
      magenta: "#e82f5c",
      pink: "#ffa8a8",
      offWhite: "#fff5d6",
      dark: "#161b1b",
      grey: "#b3aba4",
    },
    duration: {
      fast: 0.125,
      normal: 0.25,
      slow: 0.5,
      slower: 1.5,
      slowest: 2.25,
    },
  },
  utils: {
    // paddings
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    // margins
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // with custom mixins
    include: mixins({
      fontAlt: {
        fontFamily:
          '"Ephidona", monospace, Arial, -apple-system, BlinkMacSystemFont',
        fontFeatureSettings: '"aalt" on',
        fontWeight: "400",
      },
    }),
  },
});
