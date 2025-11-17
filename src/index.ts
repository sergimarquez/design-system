/**
 * Design System - Main Entry Point
 * 
 * This package exports all primitives and tokens for use in consuming applications.
 * 
 * @example
 * ```tsx
 * import { Button, Text, Card } from '@your-org/design-system';
 * import '@your-org/design-system/styles';
 * ```
 */

// Export all primitives
export * from "./primitives";

// Export all tokens
export * from "./styles/tokens";

// Export CSS for token injection
import "./styles/tokens.css";

