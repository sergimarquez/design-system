# @sergi-marquez/design-system

A modern, accessible design system built with React, TypeScript, and design tokens. This design system provides a collection of headless primitives and design tokens that can be used across projects to maintain consistency and accelerate development.

## Features

- 🎨 **Design Tokens** - Framework-agnostic tokens (CSS custom properties + TypeScript constants)
- ⚛️ **React Primitives** - Headless, accessible components built with React 18
- 📖 **Storybook** - Interactive component documentation and playground
- 🎨 **Themeable** - Customize colors via CSS variables or JavaScript API
- ✅ **TypeScript** - Full type safety with strict mode
- 🧪 **Testing** - Jest + React Testing Library
- 📦 **Build System** - ESM + CJS + TypeScript declarations
- ♿ **Accessibility** - WCAG compliant components

## Live Demo

🔗 **[View Storybook Documentation](https://your-storybook-url.vercel.app)** - Interactive component documentation and playground

_Deployed on Vercel - free hosting for static sites_

## Installation

```bash
npm install @sergi-marquez/design-system
```

Or using yarn/pnpm:

```bash
yarn add @sergi-marquez/design-system
pnpm add @sergi-marquez/design-system
```

## Quick Start

1. Import the CSS tokens in your application root:

```tsx
import "@sergi-marquez/design-system/styles";
```

2. Import and use components:

```tsx
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

## Architecture

### Design Tokens Strategy

The design system uses a **dual-token approach**:

1. **CSS Custom Properties** - Runtime access in stylesheets
2. **TypeScript Constants** - Compile-time type safety

This allows tokens to work in both CSS and JavaScript/TypeScript contexts while maintaining type safety.

```typescript
// TypeScript usage
import { spacingTokens, colorTokens } from "@sergi-marquez/design-system";

const padding = spacingTokens[4]; // "1rem"
const primaryColor = colorTokens.interactive.default; // CSS var reference
```

```css
/* CSS usage */
.my-component {
  padding: var(--spacing-4);
  color: var(--color-interactive-default);
}
```

### Component Architecture

All primitives are **headless** - they provide structure and accessibility without opinionated styling. Components:

- Use design tokens for all styling values
- Are fully typed with TypeScript
- Accept standard HTML attributes
- Support className and style props for customization
- Are framework-agnostic (no React Router, Next.js, etc. dependencies)

### Project Structure

```
src/
├── primitives/          # React components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Text.tsx
│   └── ...
├── styles/
│   ├── tokens/          # Design token definitions
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   └── ...
│   └── tokens.css       # CSS custom properties
└── index.ts             # Main entry point
```

## Components

### Button

```tsx
import { Button } from '@sergi-marquez/design-system';

<Button variant="primary" size="md">Click me</Button>
<Button variant="secondary" size="lg">Secondary</Button>
<Button variant="ghost" disabled>Ghost</Button>
```

**Props:**

- `variant`: `"primary" | "secondary" | "ghost"`
- `size`: `"sm" | "md" | "lg"`
- Standard button HTML attributes

### Text

```tsx
import { Text } from '@sergi-marquez/design-system';

<Text as="h1" size="3xl" weight="bold">Heading</Text>
<Text size="lg">Body text</Text>
<Text size="sm" color="muted">Helper text</Text>
```

**Props:**

- `as`: HTML element type
- `size`: Typography scale size
- `weight`: Font weight
- `color`: Text color variant

### Card

```tsx
import { Card } from "@sergi-marquez/design-system";

<Card padding={6} shadow="lg">
  Card content
</Card>;
```

### Stack

```tsx
import { Stack } from "@sergi-marquez/design-system";

<Stack direction="column" gap={4}>
  <Button>First</Button>
  <Button>Second</Button>
</Stack>;
```

### Grid

```tsx
import { Grid } from "@sergi-marquez/design-system";

<Grid cols={3} gap={4}>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>;
```

### Input

```tsx
import { Input } from '@sergi-marquez/design-system';

<Input label="Email" type="email" placeholder="you@example.com" />
<Input label="Password" type="password" error="Invalid password" />
```

### Badge

```tsx
import { Badge } from '@sergi-marquez/design-system';

<Badge variant="success">New</Badge>
<Badge variant="error">Error</Badge>
```

### Modal

```tsx
import { Modal } from "@sergi-marquez/design-system";

const [isOpen, setIsOpen] = useState(false);

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Title">
  Modal content
</Modal>;
```

### Link

```tsx
import { Link } from '@sergi-marquez/design-system';

<Link href="/about">Internal link</Link>
<Link href="https://example.com" external>External link</Link>
```

## Design Tokens

### Spacing

Based on a 4px/8px scale:

```typescript
import { spacingTokens } from "@sergi-marquez/design-system";

spacingTokens[0]; // "0"
spacingTokens[1]; // "0.25rem" (4px)
spacingTokens[4]; // "1rem" (16px)
spacingTokens[8]; // "2rem" (32px)
```

### Colors

Semantic color system:

```typescript
import { colorTokens } from "@sergi-marquez/design-system";

colorTokens.background.primary;
colorTokens.foreground.primary;
colorTokens.interactive.default;
colorTokens.status.success;
```

### Typography

Font sizes, weights, and line heights:

```typescript
import { typographyTokens } from "@sergi-marquez/design-system";

typographyTokens.fontSize.base; // "1rem"
typographyTokens.fontWeight.bold; // "700"
typographyTokens.lineHeight.normal; // "1.5"
```

## Theme Customization

The design system supports full theme customization through CSS custom properties or JavaScript API:

**Method 1: CSS Variables**

```css
:root {
  --color-interactive-default: #8b5cf6;
  --color-background-primary: #ffffff;
}
```

**Method 2: JavaScript API**

```typescript
import { applyTheme } from "@sergi-marquez/design-system/tokens";

applyTheme({
  interactive: { default: "#8b5cf6" },
  background: { primary: "#ffffff" },
});
```

See the Theme Customization example in Storybook for interactive theme picker.

## Accessibility

All components are built with accessibility in mind:

- ✅ Semantic HTML elements
- ✅ ARIA attributes where needed
- ✅ Keyboard navigation support
- ✅ Focus management (Modal includes focus trap)
- ✅ Screen reader support
- ✅ WCAG 2.1 AA compliant color contrasts

### Testing Accessibility

Use Storybook's accessibility addon or tools like:

- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/)

## Development

### Prerequisites

- Node.js >= 18.0.0
- npm, yarn, or pnpm

### Setup

```bash
# Install dependencies
npm install

# Run type checking
npm run type-check

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Start Storybook
npm run storybook

# Build library
npm run build

# Lint and format code
npm run lint
npm run format
```

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

- **CI** - Runs on every push and PR:
  - Linting and type checking
  - Format verification
  - Full test suite with coverage
  - Library build verification
  - Storybook build verification

- **Release** - Automatically publishes to NPM when tags are pushed:
  - Runs full test suite
  - Builds the library
  - Publishes to NPM
  - Creates GitHub release

- **Deploy** - Storybook can be deployed to Vercel (free hosting) - see deployment instructions below

Workflows are located in `.github/workflows/`.

## Deployment

### Deploy Storybook to Vercel (Free)

Vercel offers free hosting for static sites with automatic deployments from GitHub.

**Quick Setup (Recommended):**

1. **Push your code to GitHub:**

   ```bash
   git push origin main
   ```

2. **Go to [vercel.com](https://vercel.com) and sign up/login** (free account)

3. **Import your GitHub repository:**
   - Click "Add New" → "Project"
   - Import `sergimarquez/design-system`
   - Vercel will auto-detect settings from `vercel.json`

4. **Configure build settings:**
   - **Framework Preset:** Other
   - **Build Command:** `npm run build-storybook`
   - **Output Directory:** `storybook-static`
   - **Install Command:** `npm ci`

5. **Deploy:**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your Storybook will be live at a URL like: `https://design-system-xxxxx.vercel.app`

6. **Update README:**
   - Replace the placeholder URL in this README with your actual Vercel URL
   - The deployment will auto-update on every push to `main`

**Alternative: Manual Deployment**

You can also deploy manually using Vercel CLI:

```bash
npm i -g vercel
vercel --prod
```

Follow the prompts and select the `storybook-static` directory when asked.

## Linking Locally

To use this design system in another project during development:

```bash
# In this repo
npm link

# In your consuming project
npm link @sergi-marquez/design-system
```

Or use a file path:

```json
{
  "dependencies": {
    "@sergi-marquez/design-system": "file:../design-system"
  }
}
```

## Publishing

1. Update version in `package.json`
2. Build the library:

```bash
npm run build
```

3. Publish to npm:

```bash
npm publish --access public
```

Or if using a scoped package without public access:

```bash
npm publish
```

## Contributing

This is a personal design system portfolio project. Contributions and feedback are welcome!

## License

MIT © Sergi Marquez
