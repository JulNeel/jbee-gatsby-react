import { style } from "@vanilla-extract/css";

export const postsListStyle = style([

  {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem"

  }]
)

export const thumbnailWrapperStyle = style({
  height: 300,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const thumbnailStyle = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
})