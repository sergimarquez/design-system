import { type SelectHTMLAttributes, forwardRef } from "react";
import {
  spacingTokens,
  borderTokens,
  typographyTokens,
} from "../styles/tokens";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = "", ...props }, ref) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: spacingTokens[2],
        }}
      >
        {label && (
          <label
            htmlFor={props.id}
            style={{
              fontSize: typographyTokens.fontSize.sm,
              fontWeight: typographyTokens.fontWeight.medium,
              color: "var(--color-foreground-primary)",
              fontFamily: typographyTokens.fontFamily.sans,
            }}
          >
            {label}
          </label>
        )}
        <div style={{ position: "relative", display: "inline-block" }}>
          <select
            ref={ref}
            id={props.id}
            className={className}
            style={{
              width: "100%",
              padding: spacingTokens[3],
              paddingRight: spacingTokens[12],
              fontSize: typographyTokens.fontSize.base,
              fontFamily: typographyTokens.fontFamily.sans,
              color: "var(--color-foreground-primary)",
              backgroundColor: "var(--color-background-primary)",
              border: `${borderTokens.width.base} solid ${
                error
                  ? "var(--color-status-error)"
                  : "var(--color-border-default)"
              }`,
              borderRadius: borderTokens.radius.md,
              outline: "none",
              cursor: "pointer",
              appearance: "none",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23718096' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: `right ${spacingTokens[3]} center`,
              transition: "border-color 0.2s ease",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor =
                "var(--color-interactive-default)";
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = error
                ? "var(--color-status-error)"
                : "var(--color-border-default)";
              props.onBlur?.(e);
            }}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {error && (
          <span
            style={{
              fontSize: typographyTokens.fontSize.sm,
              color: "var(--color-status-error)",
              fontFamily: typographyTokens.fontFamily.sans,
            }}
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
