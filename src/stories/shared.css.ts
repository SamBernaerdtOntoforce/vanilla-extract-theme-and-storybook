import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css.ts";

export const baseStyle = style({
  border: `1px solid ${vars.color.brand}`,
  padding: vars.padding.normal,
});
