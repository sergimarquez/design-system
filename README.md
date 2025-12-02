# @sergi-marquez/design-system

A modern, accessible design system built with React, TypeScript, and design tokens. Provides headless primitives and framework-agnostic tokens to maintain consistency across projects.

## 🎯 Live Demo

🔗 **[View Storybook Documentation](https://design-system-c8tq69gah-sergis-projects-2dc6d14d.vercel.app/?path=/story/welcome--welcome)**

Interactive component documentation and playground with live examples.

## ✨ Features

- 🎨 **Design Tokens** - Framework-agnostic (CSS custom properties + TypeScript constants)
- ⚛️ **React Primitives** - 9 headless, accessible components
- 🎨 **Themeable** - Customize colors via CSS variables or JavaScript API
- ✅ **TypeScript** - Full type safety with strict mode
- 🧪 **Testing** - Jest + React Testing Library
- ♿ **Accessibility** - WCAG 2.1 AA compliant

## 📦 Installation

```bash
npm install @sergi-marquez/design-system
```

## 🚀 Quick Start

```tsx
import "@sergi-marquez/design-system/styles";
import { Button, Text, Card } from "@sergi-marquez/design-system";

function App() {
  return (
    <Card>
      <Text size="xl" weight="bold">
        Welcome
      </Text>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}
```

## 📚 Components

- **Button** - Primary, secondary, and ghost variants with size options
- **Card** - Container with padding and shadow controls
- **Text** - Typography component with size and weight variants
- **Stack** - Flexbox layout component (row/column)
- **Grid** - CSS Grid layout component
- **Input** - Form input with label and error states
- **Badge** - Status indicators (success, error, etc.)
- **Modal** - Accessible dialog with focus trap
- **Link** - Styled link component (internal/external)

View all components and examples in [Storybook](https://design-system-c8tq69gah-sergis-projects-2dc6d14d.vercel.app/?path=/story/welcome--welcome).

## 🎨 Design Tokens

Framework-agnostic tokens available as CSS custom properties and TypeScript constants:

```typescript
import {
  spacingTokens,
  colorTokens,
  typographyTokens,
} from "@sergi-marquez/design-system";

// TypeScript usage
const padding = spacingTokens[4]; // "1rem"
const primaryColor = colorTokens.interactive.default;
```

```css
/* CSS usage */
.my-component {
  padding: var(--spacing-4);
  color: var(--color-interactive-default);
}
```

## 🎨 Theme Customization

Customize themes via CSS variables or JavaScript API:

```typescript
import { applyTheme } from "@sergi-marquez/design-system/tokens";

applyTheme({
  interactive: { default: "#8b5cf6" },
  background: { primary: "#ffffff" },
});
```

## ♿ Accessibility

All components include:

- Semantic HTML elements
- ARIA attributes where needed
- Keyboard navigation support
- Focus management
- Screen reader support
- WCAG 2.1 AA compliant color contrasts

---

## 👨‍💻 For Developers

### Architecture

**Design Tokens Strategy:**

- Dual-token approach: CSS custom properties (runtime) + TypeScript constants (compile-time)
- Framework-agnostic tokens work in CSS and JavaScript contexts

**Component Architecture:**

- Headless primitives - structure and accessibility without opinionated styling
- Fully typed with TypeScript
- Accept standard HTML attributes
- Support className and style props for customization

### Development Setup

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Run tests
npm test

# Build library
npm run build
```

### Tech Stack

- React 18
- TypeScript (strict mode)
- Vite
- Storybook 8
- Jest + React Testing Library
- ESLint + Prettier
- tsup (build tool)

### CI/CD

- ✅ Linting and type checking on every push
- ✅ Full test suite with coverage
- ✅ Automated builds
- ✅ Storybook deployed to Vercel

### Project Structure

```
src/
├── primitives/     # React components
├── styles/
│   ├── tokens/     # Design token definitions
│   └── tokens.css  # CSS custom properties
└── index.ts        # Main entry point
```

---

## 📄 License

MIT © Sergi Marquez
