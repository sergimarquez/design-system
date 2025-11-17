/**
 * Theme Configuration
 * 
 * Users can customize the design system by overriding CSS custom properties.
 * 
 * @example
 * ```css
 * :root {
 *   --color-interactive-default: #3b82f6;
 *   --color-background-primary: #ffffff;
 * }
 * ```
 */

export type ThemeColor = {
  interactive?: {
    default?: string;
    hover?: string;
    active?: string;
    disabled?: string;
  };
  background?: {
    primary?: string;
    secondary?: string;
  };
  foreground?: {
    primary?: string;
    secondary?: string;
    muted?: string;
  };
  status?: {
    success?: string;
    warning?: string;
    error?: string;
    info?: string;
  };
};

/**
 * Apply a custom theme by setting CSS custom properties
 * 
 * @example
 * ```tsx
 * import { applyTheme } from '@sergi-marquez/design-system/tokens';
 * 
 * applyTheme({
 *   interactive: { default: '#6366f1' },
 *   background: { primary: '#fafafa' }
 * });
 * ```
 */
export function applyTheme(theme: ThemeColor) {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;

  if (theme.interactive?.default) {
    root.style.setProperty('--color-interactive-default', theme.interactive.default);
  }
  if (theme.interactive?.hover) {
    root.style.setProperty('--color-interactive-hover', theme.interactive.hover);
  }
  if (theme.interactive?.active) {
    root.style.setProperty('--color-interactive-active', theme.interactive.active);
  }
  if (theme.interactive?.disabled) {
    root.style.setProperty('--color-interactive-disabled', theme.interactive.disabled);
  }

  if (theme.background?.primary) {
    root.style.setProperty('--color-background-primary', theme.background.primary);
  }
  if (theme.background?.secondary) {
    root.style.setProperty('--color-background-secondary', theme.background.secondary);
  }

  if (theme.foreground?.primary) {
    root.style.setProperty('--color-foreground-primary', theme.foreground.primary);
  }
  if (theme.foreground?.secondary) {
    root.style.setProperty('--color-foreground-secondary', theme.foreground.secondary);
  }
  if (theme.foreground?.muted) {
    root.style.setProperty('--color-foreground-muted', theme.foreground.muted);
  }

  if (theme.status?.success) {
    root.style.setProperty('--color-status-success', theme.status.success);
  }
  if (theme.status?.warning) {
    root.style.setProperty('--color-status-warning', theme.status.warning);
  }
  if (theme.status?.error) {
    root.style.setProperty('--color-status-error', theme.status.error);
  }
  if (theme.status?.info) {
    root.style.setProperty('--color-status-info', theme.status.info);
  }
}

/**
 * Reset theme to default values
 */
export function resetTheme() {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  const defaultColors = {
    '--color-interactive-default': '#3b82f6',
    '--color-interactive-hover': '#2563eb',
    '--color-interactive-active': '#1d4ed8',
    '--color-interactive-disabled': '#94a3b8',
    '--color-background-primary': '#ffffff',
    '--color-background-secondary': '#f8f9fa',
    '--color-foreground-primary': '#1a1a1a',
    '--color-foreground-secondary': '#4a5568',
    '--color-foreground-muted': '#718096',
    '--color-status-success': '#10b981',
    '--color-status-warning': '#f59e0b',
    '--color-status-error': '#ef4444',
    '--color-status-info': '#3b82f6',
  };

  Object.entries(defaultColors).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

