import { type HTMLAttributes } from "react";
import { borderTokens } from "../styles/tokens";

type SeparatorProps = HTMLAttributes<HTMLHRElement> & {
  orientation?: "horizontal" | "vertical";
};

export default function Separator({
  orientation = "horizontal",
  className = "",
  style,
  ...props
}: SeparatorProps) {
  const isVertical = orientation === "vertical";

  return (
    <hr
      className={className}
      role="separator"
      aria-orientation={orientation}
      style={{
        border: "none",
        borderTop: isVertical
          ? "none"
          : `${borderTokens.width.thin} solid var(--color-border-default)`,
        borderLeft: !isVertical
          ? "none"
          : `${borderTokens.width.thin} solid var(--color-border-default)`,
        width: isVertical ? "1px" : "100%",
        height: isVertical ? "100%" : "1px",
        margin: 0,
        ...style,
      }}
      {...props}
    />
  );
}
