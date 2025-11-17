import { Button, Text, Stack, Badge } from "@sergi-marquez/design-system";

export default function HeroSection() {
  return (
    <section
      style={{
        padding: "8rem 3rem",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Stack gap={6} align="center">
        <Badge variant="info" style={{ fontSize: "0.875rem", padding: "0.5rem 1rem" }}>
          Design System v0.1.0
        </Badge>
        <Stack gap={4}>
          <Text
            as="h1"
            size="6xl"
            weight="bold"
            style={{
              background: "linear-gradient(135deg, var(--color-foreground-primary) 0%, var(--color-foreground-secondary) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: "1.1",
            }}
          >
            Build Beautiful Interfaces
          </Text>
          <Text size="xl" color="secondary" style={{ maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
            A modern, accessible design system built with React, TypeScript, and design tokens.
            Create consistent, beautiful user experiences with our collection of headless primitives.
          </Text>
        </Stack>
        <Stack direction="row" gap={3} justify="center" style={{ flexWrap: "wrap" }}>
          <a href="#components" style={{ textDecoration: "none" }}>
            <Button variant="primary" size="lg">
              Explore Components
            </Button>
          </a>
          <a href="/storybook" style={{ textDecoration: "none" }}>
            <Button variant="secondary" size="lg">
              View Storybook
            </Button>
          </a>
        </Stack>
      </Stack>
    </section>
  );
}

