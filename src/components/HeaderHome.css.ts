import { style } from "@vanilla-extract/css";

export const header = style({
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "gray",
  display: "flex",
  flexDirection: "column",
  alignItems: 'center',
  justifyContent: 'center',
});

export const logoWrapper = style({
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1
})
export const logo = style({
  maxWidth: "95vw",
});
