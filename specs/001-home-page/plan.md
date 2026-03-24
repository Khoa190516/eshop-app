# Implementation Plan: Build eShop home page with navigation, product list, filters, and footer

**Branch**: `001-home-page` | **Date**: 2026-03-24 | **Spec**: specs/001-home-page/spec.md
**Input**: Feature specification from `/specs/001-home-page/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Build the eShop home page with navigation bar, product list display, filtering and sorting capabilities, and footer. Use hard-coded data initially, prepare for API integration. Follow Next.js App Router patterns with Server Components, TypeScript, and Tailwind CSS.

## Technical Context

**Language/Version**: TypeScript (Strict mode)  
**Primary Dependencies**: Next.js (latest version, App Router), Tailwind CSS, Zod, Lucide React, Shadcn UI  
**Storage**: N/A (hard-coded data initially, prepare for API)  
**Testing**: Jest for unit tests, React Testing Library for component tests, Cypress for e2e tests  
**Target Platform**: Web browsers (responsive design)  
**Project Type**: Web application (eShop)  
**Performance Goals**: Page load under 3 seconds, responsive interactions under 100ms, support 1000+ concurrent users  
**Constraints**: Responsive design (mobile-first), user-friendly UI, accessibility compliant, SEO optimized  
**Scale/Scope**: Single page application with product catalog display

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Core Tech Stack & Patterns**: Using Next.js App Router, TypeScript strict, Tailwind CSS, Server Components by default, Zod validation, Lucide React icons, Shadcn UI components.

**Directory Structure**: Follow layered structure with /app for routes, /components/ui and /modules, /lib for configs, /hooks, /services, /types.

**Coding Standards**: PascalCase for components, camelCase for utilities, functions <50 lines, components <150 lines, no 'any', Server-side state priority.

**E-Shop Domain Contracts**: Display Loading/Empty states, optimize images with next/image, format prices in VND, prepare cart logic, security measures, sanitize data.

**Performance & SEO**: Include metadata, use next/font, leverage Next.js caching.

**Error Handling**: Use error.tsx, try-catch for API calls, user-friendly messages.

**Interaction Rule**: Explain major changes, include JSDoc.

All principles will be followed. No violations.

## Project Structure

### Documentation (this feature)

```text
specs/001-home-page/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
app/
├── page.tsx                    # Home page route
├── layout.tsx                  # Root layout
├── globals.css                 # Global styles
└── error.tsx                   # Error boundary

components/
├── ui/                         # Atomic components (Button, Input, etc.)
│   ├── button.tsx
│   ├── input.tsx
│   └── ...
├── modules/                    # Feature components
│   ├── Navigation.tsx          # Navigation bar
│   ├── ProductList.tsx         # Product grid/list
│   ├── ProductCard.tsx         # Individual product
│   ├── FilterSidebar.tsx       # Filter controls
│   ├── SortControls.tsx        # Sort options
│   └── Footer.tsx              # Site footer

lib/
├── data/                       # Hard-coded data
│   └── products.ts
├── utils/                      # Utility functions
│   ├── formatPrice.ts
│   └── ...
└── validations/                # Zod schemas
    └── product.ts

types/
└── index.ts                    # Type definitions

hooks/
└── useProducts.ts              # Custom hooks for product logic

services/
└── productService.ts           # Future API service layer
```

**Structure Decision**: Single Next.js project structure following the constitution's directory guidelines. Components separated into ui (atomic) and modules (composite). Data in lib/data initially, services prepared for API integration.

## Complexity Tracking

No constitution violations to justify.</content>
<parameter name="filePath">c:\Projects\eshop-app\specs\001-home-page\plan.md