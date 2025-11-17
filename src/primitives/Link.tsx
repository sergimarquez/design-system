import { type ReactNode } from "react";
import { typographyTokens } from "../styles/tokens";

type LinkProps = {
  children: ReactNode;
  href: string;
  external?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Link component - Framework-agnostic link component
 * 
 * For internal navigation in Next.js, Remix, or other frameworks,
 * wrap this component or use your framework's Link component directly.
 */
export default function Link({
  children,
  href,
  external = false,
  className = "",
  style,
}: LinkProps) {
  const baseStyles = {
    color: "var(--link-color, var(--color-interactive-default))",
    textDecoration: "underline",
    textDecorationColor: "var(--link-underline, var(--color-foreground-muted))",
    textDecorationThickness: "var(--link-underline-thickness, 1px)",
    textUnderlineOffset: "4px",
    fontFamily: typographyTokens.fontFamily.sans,
    transition:
      "color 0.25s ease, text-decoration-color 0.25s ease, text-decoration-thickness 0.25s ease",
    cursor: "pointer",
  };

  const combinedStyles = { ...baseStyles, ...style } as React.CSSProperties;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={combinedStyles}
      >
        {children}
      </a>
    );
  }

  // For internal links, use a plain anchor tag
  // Consumers can wrap this component with their framework's Link if needed
  return (
    <a href={href} className={className} style={combinedStyles}>
      {children}
    </a>
  );
}
