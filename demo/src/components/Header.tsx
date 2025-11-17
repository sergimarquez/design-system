import { Text, Stack, Button, Link } from "@sergi-marquez/design-system";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        padding: "1.5rem 3rem",
        borderBottom: "1px solid var(--color-border-default)",
        backgroundColor: "var(--color-background-primary)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack direction="row" gap={6} justify="space-between" align="center" style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Text size="xl" weight="bold" style={{ color: "var(--color-foreground-primary)" }}>
            @sergi-marquez
          </Text>
        </Link>
        <Stack direction="row" gap={4} align="center">
          <Link href="#components" style={{ textDecoration: "none", fontSize: "0.9375rem" }}>
            Components
          </Link>
          <Link href="#examples" style={{ textDecoration: "none", fontSize: "0.9375rem" }}>
            Examples
          </Link>
          <Link href="https://github.com/sergimarquez/design-system" external style={{ textDecoration: "none", fontSize: "0.9375rem" }}>
            GitHub
          </Link>
          <a href="/storybook" style={{ textDecoration: "none" }}>
            <Button variant="primary" size="sm">
              Storybook
            </Button>
          </a>
        </Stack>
      </Stack>
    </header>
  );
}

