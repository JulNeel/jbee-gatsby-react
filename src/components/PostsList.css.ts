import { style } from "@vanilla-extract/css";
import { breakpoints } from "../styles/breakpoints";

export const postsListStyle = style([
  {
    display: "grid",
    gridTemplateColumns: "none",
    gap: "2rem",
    "@media": {
      [breakpoints.smallDesktop]: {
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      },
    }
  }]
)
