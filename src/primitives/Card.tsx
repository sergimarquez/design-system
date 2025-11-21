import { type ReactNode, type CSSProperties, type HTMLAttributes } from "react";
import { spacingTokens, borderTokens, shadowTokens } from "../styles/tokens";

type CardProps = {
  children: ReactNode;
  as?: "div" | "article" | "section";
  padding?: keyof typeof spacingTokens;
  shadow?: keyof typeof shadowTokens;
} & Omit<HTMLAttributes<HTMLDivElement>, "style"> & {
    style?: CSSProperties;
  };

export default function Card({
  children,
  as: Component = "div",
  padding = 6,
  shadow = "base",
  className = "",
  style,
  ...props
}: CardProps) {
  return (
    <Component
      className={className}
      style={{
        padding: spacingTokens[padding],
        backgroundColor: "var(--color-background-primary)",
        border: `${borderTokens.width.thin} solid var(--color-border-default)`,
        borderRadius: borderTokens.radius.xl,
        boxShadow: shadowTokens[shadow],
        transition: "all 0.2s ease",
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
