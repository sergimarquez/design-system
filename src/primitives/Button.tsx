import { type ButtonHTMLAttributes, type ReactNode } from "react";
import {
  spacingTokens,
  borderTokens,
  typographyTokens,
} from "../styles/tokens";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  // Size styles
  const sizeStyles = {
    sm: {
      padding: `${spacingTokens[2]} ${spacingTokens[4]}`,
      fontSize: typographyTokens.fontSize.sm,
    },
    md: {
      padding: `${spacingTokens[3]} ${spacingTokens[6]}`,
      fontSize: typographyTokens.fontSize.base,
    },
    lg: {
      padding: `${spacingTokens[4]} ${spacingTokens[8]}`,
      fontSize: typographyTokens.fontSize.lg,
    },
  };

  // Variant styles
  const variantStyles = {
    primary: {
      background: "var(--color-interactive-default)",
      color: "var(--color-background-primary)",
      border: "none",
    },
    secondary: {
      background: "var(--color-background-secondary)",
      color: "var(--color-foreground-primary)",
      border: `${borderTokens.width.thin} solid var(--color-border-default)`,
    },
    ghost: {
      background: "transparent",
      color: "var(--color-interactive-default)",
      border: "none",
    },
  };

  const disabledStyles = disabled
    ? {
        opacity: 0.5,
        cursor: "not-allowed",
      }
    : {};

  // Merge custom styles but protect typography and padding
  const customStyle = props.style || {};
  const {
    fontSize: _,
    fontFamily: __,
    fontWeight: ___,
    padding: ____,
    ...safeCustomStyle
  } = customStyle;

  // Remove style from props to prevent override
  const { style: __style, ...restProps } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      data-variant={variant}
      className={className}
      style={{
        // Variant styles
        ...variantStyles[variant],
        // Layout and visual styles
        borderRadius: borderTokens.radius.md,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.2s ease",
        boxSizing: "border-box",
        border: variantStyles[variant].border || "none",
        textAlign: "center",
        lineHeight: "1.5",
        // Disabled styles
        ...disabledStyles,
        // Allow custom styles for layout/positioning (but not typography or padding)
        ...safeCustomStyle,
        // Protected styles last - cannot be overridden
        fontSize: sizeStyles[size].fontSize,
        fontFamily: typographyTokens.fontFamily.sans,
        fontWeight: typographyTokens.fontWeight.medium,
        padding: sizeStyles[size].padding,
      }}
      {...restProps}
    >
      {children}
    </button>
  );
}
