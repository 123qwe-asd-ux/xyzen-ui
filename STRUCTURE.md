# Project Structure

This document describes the structure of the xyzen-ui component library.

## Directory Structure

```
xyzen-ui/
├── src/                      # Source code
│   ├── components/           # React components
│   │   ├── button.tsx        # Button component with variants
│   │   ├── card.tsx          # Card component with sub-components
│   │   ├── input.tsx         # Input component
│   │   └── index.ts          # Component exports
│   ├── utils/                # Utility functions
│   │   └── cn.ts             # className merging utility
│   └── index.ts              # Main library entry point
├── examples/                 # Usage examples
│   └── agent-dashboard.tsx   # Example agent dashboard
├── dist/                     # Built files (generated)
├── package.json              # Package configuration
├── tsconfig.json             # TypeScript configuration
├── tsup.config.ts            # Build configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── .eslintrc.json            # ESLint configuration
└── README.md                 # Documentation
```

## Components

### Button
A versatile button component with multiple variants and sizes:
- Variants: default, secondary, destructive, outline, ghost, link
- Sizes: sm, default, lg, icon
- Full TypeScript support
- Accessible by default

### Card
A container component for displaying content:
- Sub-components: CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- Composable and flexible
- Consistent styling

### Input
A styled input field component:
- Full HTML input attributes support
- Accessible focus states
- Placeholder support
- TypeScript typed

## Utilities

### cn (className utility)
Utility function for intelligently merging Tailwind CSS classes:
- Combines clsx and tailwind-merge
- Handles conditional classes
- Prevents style conflicts

## Build Output

The library is built to multiple formats:
- **CommonJS** (`dist/index.js`) - for Node.js and bundlers
- **ESM** (`dist/index.mjs`) - for modern bundlers
- **TypeScript Declarations** (`dist/index.d.ts`, `dist/index.d.mts`) - for type safety

## Development Workflow

1. **Install dependencies**: `npm install`
2. **Build**: `npm run build`
3. **Development mode**: `npm run dev` (watch mode)
4. **Type check**: `npm run type-check`
5. **Lint**: `npm run lint`

## Integration with Projects

To use this library in a project:

1. Install the package (when published): `npm install xyzen-ui`
2. Set up Tailwind CSS in your project
3. Add the xyzen-ui theme configuration to your tailwind.config.js
4. Import and use components:
   ```tsx
   import { Button, Card, Input } from 'xyzen-ui'
   ```

## Theming

The library uses CSS variables for theming, allowing easy customization:
- Color scheme variables (`--primary`, `--secondary`, etc.)
- Border radius (`--radius`)
- Light and dark mode support

## Technology Stack

- **React 18** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 3** - Styling
- **class-variance-authority** - Component variants
- **clsx & tailwind-merge** - Class name utilities
- **tsup** - Build tool
- **ESLint** - Code quality
