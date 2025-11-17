import type { Meta, StoryObj } from "@storybook/react";
import { Button, Card, Text, Stack, Badge } from "./primitives";

const meta: Meta = {
  title: "Welcome",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
# Welcome to @sergi-marquez/design-system

A modern, accessible design system built with React, TypeScript, and design tokens.

## Overview

This design system provides a collection of **headless primitives** and **design tokens** that you can use to build consistent, accessible user interfaces.

### Key Features

- 🎨 **Design Tokens** - Framework-agnostic tokens (CSS custom properties + TypeScript constants)
- ⚛️ **React Primitives** - Headless, accessible components built with React 18
- ✅ **TypeScript** - Full type safety with strict mode
- 📦 **Build System** - ESM + CJS + TypeScript declarations
- ♿ **Accessibility** - WCAG compliant components

## Quick Start

### Installation

\`\`\`bash
npm install @sergi-marquez/design-system
\`\`\`

### Basic Usage

\`\`\`tsx
// Import CSS tokens
import '@sergi-marquez/design-system/styles';

// Import components
import { Button, Text, Card } from '@sergi-marquez/design-system';

function App() {
  return (
    <Card>
      <Text size="xl" weight="bold">Welcome</Text>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}
\`\`\`

## Explore Components

Use the sidebar to navigate through all available primitives:

- **Button** - Interactive button component with multiple variants
- **Text** - Typography component with flexible sizing
- **Card** - Container component with shadows and padding
- **Stack** - Layout component for flexbox layouts
- **Grid** - Grid layout component
- **Input** - Form input with label and error states
- **Badge** - Status indicators
- **Modal** - Dialog component with focus management
- **Link** - Link component for navigation

## Design Tokens

The design system uses a **dual-token approach**:

1. **CSS Custom Properties** - Runtime access in stylesheets
2. **TypeScript Constants** - Compile-time type safety

This allows tokens to work in both CSS and JavaScript/TypeScript contexts.

## Documentation

For full documentation, visit the [GitHub repository](https://github.com/sergimarquez/design-system).
        `,
      },
      page: () => null, // Hide story preview in docs
    },
  },
  tags: [],
};

export default meta;
type Story = StoryObj;

export const Welcome: Story = {
  render: () => (
    <div style={{ padding: "3rem", maxWidth: "900px", margin: "0 auto" }}>
      <Stack gap={8}>
        <Stack gap={4}>
          <Badge variant="info">Design System v0.1.0</Badge>
          <Text as="h1" size="5xl" weight="bold">
            Welcome to @sergi-marquez/design-system
          </Text>
          <Text size="xl" color="secondary">
            A modern, accessible design system built with React, TypeScript, and design tokens.
            Build consistent, accessible user interfaces with our collection of headless primitives.
          </Text>
        </Stack>

        <Card padding={6}>
          <Stack gap={4}>
            <Text as="h2" size="2xl" weight="semibold">
              Key Features
            </Text>
            <Stack gap={3}>
              <Text>🎨 Design Tokens - Framework-agnostic tokens (CSS + TypeScript)</Text>
              <Text>⚛️ React Primitives - Headless, accessible components</Text>
              <Text>✅ TypeScript - Full type safety with strict mode</Text>
              <Text>📦 Build System - ESM + CJS + TypeScript declarations</Text>
              <Text>♿ Accessibility - WCAG compliant components</Text>
            </Stack>
          </Stack>
        </Card>

        <Card padding={6}>
          <Stack gap={4}>
            <Text as="h2" size="2xl" weight="semibold">
              Quick Start
            </Text>
            <Stack gap={3}>
              <Text size="sm" color="muted">
                Installation
              </Text>
              <pre style={{ 
                padding: "1rem", 
                backgroundColor: "#f8f9fa", 
                borderRadius: "0.375rem",
                overflow: "auto",
                fontSize: "0.875rem"
              }}>
{`npm install @sergi-marquez/design-system`}
              </pre>
              <Text size="sm" color="muted">
                Usage
              </Text>
              <pre style={{ 
                padding: "1rem", 
                backgroundColor: "#f8f9fa", 
                borderRadius: "0.375rem",
                overflow: "auto",
                fontSize: "0.875rem"
              }}>
{`import '@sergi-marquez/design-system/styles';
import { Button, Text, Card } from '@sergi-marquez/design-system';`}
              </pre>
            </Stack>
          </Stack>
        </Card>

        <a 
          href="https://github.com/sergimarquez/design-system" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button variant="primary" size="lg">
            View Documentation
          </Button>
        </a>
      </Stack>
    </div>
  ),
};

