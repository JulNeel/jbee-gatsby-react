import { style } from "@vanilla-extract/css";

export const blogPostNavStyle = style({
  listStyle: 'none',
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: 0,
})

export const blogPostNavItemStyle = style({
  width: '40%',
})