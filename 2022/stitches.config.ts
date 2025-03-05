import { createStitches, CSS as StitchesCSS } from "@stitches/react";
import { mixins } from "stitches-mixins";

// Define theme types
type MediaQueries = {
  mobile: string;
  tablet: string;
  tabletLandscape: string;
  laptop: string;
  desktop: string;
  darkMode: string;
};

type Fonts = {
  fontBase: string;
  fontAlt: string;
};

type Colors = {
  yellow: string;
  magenta: string;
  pink: string;
  offWhite: string;
  dark: string;
  grey: string;
};

type Durations = {
  fast: number;
  normal: number;
  slow: number;
  slower: number;
  slowest: number;
};

// Create the Stitches configuration
const { styled, getCssText, theme, createTheme, config } = createStitches({
  media: {
    mobile: "(min-width: 20em)", // 320px
    tablet: "(min-width: 48em)", // 768px
    tabletLandscape: "(min-width: 64em)", // 1024px
    laptop: "(min-width: 72.5em)", // 1160px
    desktop: "(min-width: 90em)", // 1440px
    darkMode: "(prefers-color-scheme: dark)",
  } as MediaQueries,
  theme: {
    fonts: {
      fontBase:
        '"AzeretMono Black", monospace, Arial, -apple-system, BlinkMacSystemFont',
      fontAlt:
        '"Ephidona", monospace, Arial, -apple-system, BlinkMacSystemFont',
    } as Fonts,
    color: {
      yellow: "#f0f26a",
      magenta: "#e82f5c",
      pink: "#ffa8a8",
      offWhite: "#fff5d6",
      dark: "#161b1b",
      grey: "#b3aba4",
    } as Colors,
    duration: {
      fast: 0.125,
      normal: 0.25,
      slow: 0.5,
      slower: 1.5,
      slowest: 2.25,
    } as Durations,
  },
  utils: {
    // paddings
    paddingX: (value: number | string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    // margins
    marginX: (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: number | string) => ({
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
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        textRendering: "optimizeLegibility",
      },
    }),
  },
});

// Export the CSS type
export type CSS = StitchesCSS<typeof config>;

// Export the Stitches utilities
export { styled, getCssText, theme, createTheme };
