import { useState } from "react";
import {
  Button,
  Card,
  Text,
  Stack,
  Badge,
  Input,
  Grid,
} from "@sergi-marquez/design-system";

export default function ComponentsShowcase() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const components = [
    {
      name: "Button",
      variants: ["primary", "secondary", "ghost"],
      sizes: ["sm", "md", "lg"],
    },
    {
      name: "Card",
      description: "Container component with shadows and padding",
    },
    { name: "Text", description: "Typography component with flexible sizing" },
    {
      name: "Badge",
      variants: ["default", "success", "error", "warning", "info"],
    },
    { name: "Input", description: "Form input with label and error states" },
    { name: "Stack", description: "Layout component for flexbox layouts" },
    { name: "Grid", description: "Grid layout component" },
    { name: "Modal", description: "Dialog component with focus management" },
    { name: "Link", description: "Link component for navigation" },
  ];

  return (
    <section
      id="components"
      style={{
        padding: "6rem 3rem",
        backgroundColor: "var(--color-background-secondary)",
      }}
    >
      <Stack gap={8} style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <Stack gap={3} style={{ textAlign: "center" }}>
          <Text as="h2" size="4xl" weight="bold">
            Component Library
          </Text>
          <Text
            size="lg"
            color="secondary"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            Explore all available primitives. Each component is fully accessible
            and customizable.
          </Text>
        </Stack>

        {/* Interactive Preview */}
        <Card padding={8} shadow="lg">
          <Stack gap={6}>
            <Stack gap={2}>
              <Text as="h3" size="2xl" weight="semibold">
                Interactive Preview
              </Text>
              <Text color="secondary">
                Try out the components in real-time. See how they look and feel.
              </Text>
            </Stack>

            <Grid cols={2} gap={6}>
              <Stack gap={4}>
                <Text weight="semibold">Buttons</Text>
                <Stack direction="row" gap={3} style={{ flexWrap: "wrap" }}>
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                </Stack>
                <Stack direction="row" gap={3} style={{ flexWrap: "wrap" }}>
                  <Button variant="primary" size="sm">
                    Small
                  </Button>
                  <Button variant="primary" size="md">
                    Medium
                  </Button>
                  <Button variant="primary" size="lg">
                    Large
                  </Button>
                </Stack>
              </Stack>

              <Stack gap={4}>
                <Text weight="semibold">Badges</Text>
                <Stack direction="row" gap={2} style={{ flexWrap: "wrap" }}>
                  <Badge variant="default">Default</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="info">Info</Badge>
                </Stack>
              </Stack>

              <Stack gap={4}>
                <Text weight="semibold">Input</Text>
                <Input
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                    setError(
                      e.target.value && !/\S+@\S+\.\S+/.test(e.target.value)
                        ? "Invalid email"
                        : ""
                    );
                  }}
                  error={error}
                />
              </Stack>

              <Stack gap={4}>
                <Text weight="semibold">Typography</Text>
                <Stack gap={2}>
                  <Text as="h1" size="3xl" weight="bold">
                    Heading 1
                  </Text>
                  <Text as="h2" size="2xl" weight="semibold">
                    Heading 2
                  </Text>
                  <Text size="lg">Large text</Text>
                  <Text>Base text</Text>
                  <Text size="sm" color="muted">
                    Small muted text
                  </Text>
                </Stack>
              </Stack>
            </Grid>
          </Stack>
        </Card>

        {/* Component List */}
        <Grid cols={3} gap={4}>
          {components.map((component, index) => (
            <Card
              key={index}
              padding={6}
              style={{
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Stack gap={2}>
                <Text as="h4" size="lg" weight="semibold">
                  {component.name}
                </Text>
                {component.description && (
                  <Text size="sm" color="secondary">
                    {component.description}
                  </Text>
                )}
              </Stack>
            </Card>
          ))}
        </Grid>
      </Stack>
    </section>
  );
}
