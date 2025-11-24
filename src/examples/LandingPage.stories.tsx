import type { Meta, StoryObj } from "@storybook/react";
import { Button, Card, Text, Stack, Badge, Link } from "../primitives";

const meta: Meta = {
  title: "Examples/Landing Page",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const LandingPage: Story = {
  render: () => (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--color-background-secondary)",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "2rem 3rem",
          borderBottom: "1px solid var(--color-border-default)",
          backgroundColor: "var(--color-background-primary)",
        }}
      >
        <Stack direction="row" gap={4} justify="space-between" align="center">
          <Text size="xl" weight="bold">
            Design System
          </Text>
          <Stack direction="row" gap={4}>
            <Link href="#features">Features</Link>
            <Link href="#components">Components</Link>
            <Link href="#docs">Docs</Link>
          </Stack>
        </Stack>
      </div>

      {/* Hero Section */}
      <div
        style={{
          padding: "6rem 3rem",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Stack gap={6}>
          <Badge variant="info">New Release v0.1.0</Badge>
          <Stack gap={4}>
            <Text as="h1" size="6xl" weight="bold">
              Build Beautiful Interfaces
            </Text>
            <Text
              size="xl"
              color="secondary"
              style={{ maxWidth: "600px", margin: "0 auto" }}
            >
              A modern, accessible design system built with React, TypeScript,
              and design tokens. Create consistent, beautiful user experiences.
            </Text>
          </Stack>
          <Stack direction="row" gap={3} justify="center">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="secondary" size="lg">
              View Components
            </Button>
          </Stack>
        </Stack>
      </div>

      {/* Features Section */}
      <div
        style={{
          padding: "4rem 3rem",
          backgroundColor: "var(--color-background-primary)",
        }}
      >
        <Stack gap={8} style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Text
            as="h2"
            size="4xl"
            weight="bold"
            style={{ textAlign: "center" }}
          >
            Key Features
          </Text>
          <Stack direction="row" gap={6} style={{ flexWrap: "wrap" }}>
            <Card padding={6} style={{ flex: "1 1 300px" }}>
              <Stack gap={4}>
                <Text size="2xl">🎨</Text>
                <Text as="h3" size="xl" weight="semibold">
                  Design Tokens
                </Text>
                <Text color="secondary">
                  Framework-agnostic tokens using CSS custom properties and
                  TypeScript constants.
                </Text>
              </Stack>
            </Card>
            <Card padding={6} style={{ flex: "1 1 300px" }}>
              <Stack gap={4}>
                <Text size="2xl">⚛️</Text>
                <Text as="h3" size="xl" weight="semibold">
                  React Primitives
                </Text>
                <Text color="secondary">
                  Headless, accessible components that work with any styling
                  approach.
                </Text>
              </Stack>
            </Card>
            <Card padding={6} style={{ flex: "1 1 300px" }}>
              <Stack gap={4}>
                <Text size="2xl">✅</Text>
                <Text as="h3" size="xl" weight="semibold">
                  TypeScript
                </Text>
                <Text color="secondary">
                  Full type safety with strict mode for better developer
                  experience.
                </Text>
              </Stack>
            </Card>
          </Stack>
        </Stack>
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "3rem",
          borderTop: "1px solid var(--color-border-default)",
          backgroundColor: "var(--color-background-primary)",
          marginTop: "4rem",
        }}
      >
        <Stack
          gap={4}
          style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}
        >
          <Text color="secondary">
            © 2024 @sergi-marquez/design-system. Built with React and
            TypeScript.
          </Text>
          <Stack direction="row" gap={4} justify="center">
            <Link href="https://github.com/sergimarquez/design-system" external>
              GitHub
            </Link>
            <Link href="#docs">Documentation</Link>
          </Stack>
        </Stack>
      </div>
    </div>
  ),
};
