import { type InputHTMLAttributes, forwardRef, useId } from "react";
import {
  spacingTokens,
  borderTokens,
  typographyTokens,
} from "../styles/tokens";

type SwitchProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> & {
  label?: string;
};

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, checked, className = "", style, id, ...props }, ref) => {
    const generatedId = useId();
    const switchId = id || generatedId;

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: spacingTokens[3],
          ...style,
        }}
      >
        <label
          htmlFor={switchId}
          style={{
            position: "relative",
            display: "inline-block",
            width: "3rem",
            height: "1.5rem",
            cursor: props.disabled ? "not-allowed" : "pointer",
            ...(props.disabled && { opacity: 0.5 }),
          }}
        >
          <input
            ref={ref}
            type="checkbox"
            id={switchId}
            role="switch"
            aria-checked={checked}
            className={className}
            checked={checked}
            style={{
              opacity: 0,
              width: 0,
              height: 0,
              position: "absolute",
            }}
            {...props}
          />
          <span
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: checked
                ? "var(--color-interactive-default)"
                : "var(--color-background-secondary)",
              borderRadius: borderTokens.radius.full,
              transition: "background-color 0.2s ease",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: "0.25rem",
              left: checked ? "1.625rem" : "0.25rem",
              width: "1rem",
              height: "1rem",
              backgroundColor: "var(--color-background-primary)",
              borderRadius: borderTokens.radius.full,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              transition: "left 0.2s ease",
            }}
          />
        </label>
        {label && (
          <label
            htmlFor={switchId}
            style={{
              fontSize: typographyTokens.fontSize.base,
              fontFamily: typographyTokens.fontFamily.sans,
              color: "var(--color-foreground-primary)",
              cursor: props.disabled ? "not-allowed" : "pointer",
              userSelect: "none",
            }}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;
