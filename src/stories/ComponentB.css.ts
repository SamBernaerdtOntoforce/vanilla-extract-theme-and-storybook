import { style } from "@vanilla-extract/css";
import { baseStyle } from "./shared.css.ts";

export const componentB = style([
  baseStyle,
  {
    background: "lightblue",
  },
]);
