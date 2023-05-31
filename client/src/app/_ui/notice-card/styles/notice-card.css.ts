import { style } from "@vanilla-extract/css";

export const contentStyle = style({
  display: "flex",
  alignContent: "center",
  justifyContent: "space-between",
  gap: "10px",
});

export const actionStyle = style({
  margin: "0",
  fontSize: "14px",
});

export const userNameStyle = style({
  fontWeight: "700",
});
