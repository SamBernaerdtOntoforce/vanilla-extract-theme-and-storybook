import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    brand: null,
  },
  padding: {
    normal: null,
  },
});

export const themeBlue = createTheme(vars, {
  color: {
    brand: "blue",
  },
  padding: {
    normal: "10px",
  },
});
