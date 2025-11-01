# xyzen-ui

A modern React component library for building intelligent agent web frontends, inspired by shadcn/ui.

## Features

- 🎨 Beautiful, accessible components built with Tailwind CSS
- 🔧 Fully customizable and themeable
- ⚡ TypeScript support out of the box
- 🎯 Focused on agent-based UI patterns
- 📦 Tree-shakeable and lightweight

## Installation

```bash
npm install xyzen-ui
# or
yarn add xyzen-ui
# or
pnpm add xyzen-ui
```

### Peer Dependencies

Make sure you have the following peer dependencies installed:

```bash
npm install react react-dom
```

### Tailwind CSS Setup

This library requires Tailwind CSS. Add the following to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    // ... your content paths
    "./node_modules/xyzen-ui/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
}
```

Add the following CSS variables to your global CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}
```

## Usage

### Button Component

```tsx
import { Button } from 'xyzen-ui'

export default function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}
```

### Card Component

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'xyzen-ui'

export default function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Agent Dashboard</CardTitle>
        <CardDescription>Monitor your AI agent's performance</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content goes here...</p>
      </CardContent>
      <CardFooter>
        <p>Footer content</p>
      </CardFooter>
    </Card>
  )
}
```

### Input Component

```tsx
import { Input } from 'xyzen-ui'

export default function App() {
  return (
    <div>
      <Input type="text" placeholder="Enter your message..." />
      <Input type="email" placeholder="Email address" />
    </div>
  )
}
```

## Available Components

- **Button**: Versatile button component with multiple variants (default, secondary, destructive, outline, ghost, link)
- **Card**: Container component with Header, Title, Description, Content, and Footer sub-components
- **Input**: Styled input field with full accessibility support

## Utilities

### cn (className utility)

Utility function for merging Tailwind CSS classes:

```tsx
import { cn } from 'xyzen-ui'

const className = cn(
  'base-class',
  condition && 'conditional-class',
  'another-class'
)
```

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Watch mode for development
npm run dev

# Type check
npm run type-check

# Lint
npm run lint
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

