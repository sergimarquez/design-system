import { Text, Stack, Link, Grid } from "@sergi-marquez/design-system";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "4rem 3rem 2rem",
        borderTop: "1px solid var(--color-border-default)",
        backgroundColor: "var(--color-background-primary)",
        marginTop: "4rem",
      }}
    >
      <Stack gap={6} style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <Grid cols={3} gap={6}>
          <Stack gap={3}>
            <Text weight="semibold">Design System</Text>
            <Stack gap={2}>
              <Text size="sm" color="secondary">
                A modern, accessible design system built with React, TypeScript, and design tokens.
              </Text>
            </Stack>
          </Stack>
          <Stack gap={3}>
            <Text weight="semibold">Resources</Text>
            <Stack gap={2}>
              <Link href="#components" style={{ fontSize: "0.875rem", textDecoration: "none" }}>
                Components
              </Link>
              <Link href="#examples" style={{ fontSize: "0.875rem", textDecoration: "none" }}>
                Examples
              </Link>
              <Link href="/storybook" style={{ fontSize: "0.875rem", textDecoration: "none" }}>
                Storybook
              </Link>
            </Stack>
          </Stack>
          <Stack gap={3}>
            <Text weight="semibold">Connect</Text>
            <Stack gap={2}>
              <Link
                href="https://github.com/sergimarquez/design-system"
                external
                style={{ fontSize: "0.875rem", textDecoration: "none" }}
              >
                GitHub
              </Link>
              <Text size="sm" color="secondary">
                © 2024 Sergi Marquez. All rights reserved.
              </Text>
            </Stack>
          </Stack>
        </Grid>
        <div style={{ borderTop: "1px solid var(--color-border-default)", paddingTop: "2rem" }}>
          <Text size="sm" color="muted" style={{ textAlign: "center" }}>
            Built with @sergi-marquez/design-system
          </Text>
        </div>
      </Stack>
    </footer>
  );
}

