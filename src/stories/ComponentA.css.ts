import { style } from "@vanilla-extract/css";
import { baseStyle } from "./shared.css.ts";

export const componentA = style([
  baseStyle,
  {
    background: "yellow",
  },
]);
