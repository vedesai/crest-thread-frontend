# Crest & Thread - Frontend

A modern ecommerce frontend application built with React, TypeScript, and Vite.

## Features

- **Homepage**: Hero banner, featured categories, featured products, trust badges, newsletter signup
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Accessibility**: WCAG 2.1 AA compliant, keyboard navigation, screen reader support
- **Performance**: Optimized images, lazy loading, CSS custom properties

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:8080/api
```

## Project Structure

```
frontend/
├── src/
│   ├── components/        # React components
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── FeaturedCategories/
│   │   ├── FeaturedProducts/
│   │   ├── TrustSection/
│   │   ├── Newsletter/
│   │   └── Footer/
│   ├── context/           # React context providers
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API service functions
│   ├── types/             # TypeScript type definitions
│   ├── styles/            # Global CSS styles
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── public/                # Static assets
└── package.json
```

## Design System

Based on Figma design: [Crest & Thread](https://www.figma.com/design/1Kn5p7SYZ1a5zd4Q05vsnc)

### Colors

- Primary: `#000000`
- Background: `#FFFFFF`
- Text Secondary: `#666666`
- Border: `#E0E0E0`

### Typography

- Font Family: Inter, system-ui
- Heading sizes: 48px, 30px, 24px, 20px, 18px
- Body: 16px

## Accessibility

- Skip links for keyboard navigation
- Semantic HTML elements
- ARIA labels on interactive elements
- Color contrast meets WCAG 2.1 AA standards
- Focus indicators on all interactive elements
- Reduced motion support

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |

## License

Copyright © 2024 Crest & Thread. All rights reserved.
