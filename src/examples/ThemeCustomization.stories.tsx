import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button, Card, Text, Stack, Input, Badge } from "../primitives";
import { applyTheme, resetTheme } from "../styles/themes";

const meta: Meta = {
  title: "Examples/Theme Customization",
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj;

const PresetThemes = {
  default: {
    interactive: { default: "#3b82f6" },
    background: { primary: "#ffffff", secondary: "#f8f9fa" },
  },
  purple: {
    interactive: { default: "#8b5cf6" },
    background: { primary: "#ffffff", secondary: "#f8f9fa" },
  },
  green: {
    interactive: { default: "#10b981" },
    background: { primary: "#ffffff", secondary: "#f8f9fa" },
  },
  orange: {
    interactive: { default: "#f59e0b" },
    background: { primary: "#ffffff", secondary: "#f8f9fa" },
  },
  dark: {
    interactive: { default: "#60a5fa" },
    background: { primary: "#1a1a1a", secondary: "#2d2d2d" },
    foreground: { primary: "#ffffff", secondary: "#e2e8f0", muted: "#94a3b8" },
  },
};

export const ThemeCustomizer: Story = {
  render: () => {
    const [customColor, setCustomColor] = useState("#3b82f6");
    const [customBg, setCustomBg] = useState("#ffffff");

    const handlePreset = (themeName: keyof typeof PresetThemes) => {
      applyTheme(PresetThemes[themeName]);
    };

    const handleCustom = () => {
      applyTheme({
        interactive: { default: customColor },
        background: { primary: customBg },
      });
    };

    return (
      <div style={{ maxWidth: "800px", width: "100%" }}>
        <Stack gap={8}>
          <Card padding={6}>
            <Stack gap={6}>
              <Stack gap={2}>
                <Text as="h2" size="3xl" weight="bold">
                  Theme Customization
                </Text>
                <Text color="secondary">
                  Customize colors by overriding CSS custom properties or using the applyTheme function.
                </Text>
              </Stack>

              {/* Preset Themes */}
              <Stack gap={4}>
                <Text size="lg" weight="semibold">
                  Preset Themes
                </Text>
                <Stack direction="row" gap={3} style={{ flexWrap: "wrap" }}>
                  <Button variant="primary" size="sm" onClick={() => handlePreset("default")}>
                    Default
                  </Button>
                  <Button variant="primary" size="sm" onClick={() => handlePreset("purple")}>
                    Purple
                  </Button>
                  <Button variant="primary" size="sm" onClick={() => handlePreset("green")}>
                    Green
                  </Button>
                  <Button variant="primary" size="sm" onClick={() => handlePreset("orange")}>
                    Orange
                  </Button>
                  <Button variant="primary" size="sm" onClick={() => handlePreset("dark")}>
                    Dark
                  </Button>
                  <Button variant="secondary" size="sm" onClick={resetTheme}>
                    Reset
                  </Button>
                </Stack>
              </Stack>

              {/* Custom Color Picker */}
              <Stack gap={4}>
                <Text size="lg" weight="semibold">
                  Custom Colors
                </Text>
                <Stack gap={4}>
                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "var(--color-foreground-primary)",
                      }}
                    >
                      Primary Interactive Color
                    </label>
                    <Stack direction="row" gap={3}>
                      <input
                        type="color"
                        value={customColor}
                        onChange={(e) => setCustomColor(e.target.value)}
                        style={{
                          width: "60px",
                          height: "40px",
                          border: "2px solid var(--color-border-default)",
                          borderRadius: "0.375rem",
                          cursor: "pointer",
                        }}
                      />
                      <Input
                        value={customColor}
                        onChange={(e) => setCustomColor(e.target.value)}
                        placeholder="#3b82f6"
                        style={{ flex: 1 }}
                      />
                    </Stack>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "var(--color-foreground-primary)",
                      }}
                    >
                      Background Color
                    </label>
                    <Stack direction="row" gap={3}>
                      <input
                        type="color"
                        value={customBg}
                        onChange={(e) => setCustomBg(e.target.value)}
                        style={{
                          width: "60px",
                          height: "40px",
                          border: "2px solid var(--color-border-default)",
                          borderRadius: "0.375rem",
                          cursor: "pointer",
                        }}
                      />
                      <Input
                        value={customBg}
                        onChange={(e) => setCustomBg(e.target.value)}
                        placeholder="#ffffff"
                        style={{ flex: 1 }}
                      />
                    </Stack>
                  </div>

                  <Button variant="primary" onClick={handleCustom}>
                    Apply Custom Theme
                  </Button>
                </Stack>
              </Stack>

              {/* Code Example */}
              <Stack gap={4}>
                <Text size="lg" weight="semibold">
                  Code Example
                </Text>
                <pre
                  style={{
                    padding: "1rem",
                    backgroundColor: "var(--color-background-secondary)",
                    borderRadius: "0.375rem",
                    overflow: "auto",
                    fontSize: "0.875rem",
                    fontFamily: "var(--font-family-mono)",
                  }}
                >
{`import { applyTheme } from '@sergi-marquez/design-system/tokens';

// Apply custom theme
applyTheme({
  interactive: { default: '#8b5cf6' },
  background: { primary: '#ffffff' }
});

// Or override CSS variables directly
:root {
  --color-interactive-default: #8b5cf6;
  --color-background-primary: #ffffff;
}`}
                </pre>
              </Stack>
            </Stack>
          </Card>

          {/* Live Preview */}
          <Card padding={6}>
            <Stack gap={4}>
              <Text size="lg" weight="semibold">
                Live Preview
              </Text>
              <Stack gap={4}>
                <Stack direction="row" gap={3}>
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                </Stack>
                <Stack direction="row" gap={2} style={{ flexWrap: "wrap" }}>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="info">Info</Badge>
                </Stack>
                <Text>
                  This text preview shows how your custom theme looks across different components.
                </Text>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </div>
    );
  },
};

