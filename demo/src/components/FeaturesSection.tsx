import { Card, Text, Stack, Grid } from "@sergi-marquez/design-system";

const features = [
  {
    icon: "🎨",
    title: "Design Tokens",
    description:
      "Framework-agnostic tokens using CSS custom properties and TypeScript constants for maximum flexibility.",
  },
  {
    icon: "⚛️",
    title: "React Primitives",
    description:
      "Headless, accessible components that work with any styling approach. Fully typed with TypeScript.",
  },
  {
    icon: "✅",
    title: "Type Safety",
    description:
      "Full type safety with strict TypeScript mode for better developer experience and fewer bugs.",
  },
  {
    icon: "📦",
    title: "Build System",
    description:
      "ESM + CJS + TypeScript declarations. Works with any modern bundler or framework.",
  },
  {
    icon: "♿",
    title: "Accessibility",
    description:
      "WCAG compliant components with keyboard navigation, ARIA attributes, and screen reader support.",
  },
  {
    icon: "🎨",
    title: "Themeable",
    description:
      "Easily customize colors and tokens through CSS variables or the applyTheme function.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      style={{
        padding: "6rem 3rem",
        backgroundColor: "var(--color-background-primary)",
      }}
    >
      <Stack gap={8} style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <Stack gap={3} style={{ textAlign: "center" }}>
          <Text as="h2" size="4xl" weight="bold">
            Everything You Need
          </Text>
          <Text
            size="lg"
            color="secondary"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            A complete design system with all the primitives you need to build
            modern applications.
          </Text>
        </Stack>
        <Grid cols={3} gap={6}>
          {features.map((feature, index) => (
            <Card
              key={index}
              padding={6}
              shadow="base"
              style={{
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";
              }}
            >
              <Stack gap={4}>
                <Text size="4xl" style={{ lineHeight: "1" }}>
                  {feature.icon}
                </Text>
                <Text as="h3" size="xl" weight="semibold">
                  {feature.title}
                </Text>
                <Text color="secondary" style={{ lineHeight: "1.6" }}>
                  {feature.description}
                </Text>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Stack>
    </section>
  );
}
