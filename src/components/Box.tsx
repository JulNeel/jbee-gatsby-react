import React from "react";
import clsx from "clsx";
import { sprinkles, Sprinkles } from "../styles/sprinkles.css";

export type BoxProps = React.PropsWithChildren &
  Sprinkles &
  Omit<React.AllHTMLAttributes<HTMLElement>, "color"> & {
    as?: React.ElementType;
  };

export const Box = React.forwardRef<unknown, BoxProps>(({ as = "div", className, ...props }, ref) => {
  const sprinklesProps: Record<string, unknown> = {};
  const nativeProps: Record<string, unknown> = {};

  Object.entries(props).forEach(([key, value]) => {
    if (sprinkles.properties.has(key as keyof Sprinkles)) {
      sprinklesProps[key] = value;
    } else {
      nativeProps[key] = value;
    }
  });

  return React.createElement(as, {
    className: clsx([sprinkles(sprinklesProps), className]),
    ref,
    ...nativeProps,
  });
});
