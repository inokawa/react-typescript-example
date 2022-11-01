import { style } from "@vanilla-extract/css";

export const wrapperStyle = style({
  display: "flex",
  width: "100vw",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
});

export const innerStyle = style({
  display: "flex",
  flexDirection: "column",
  width: "300px",
});
