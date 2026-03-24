<!--
Version change: 1.0.0 → 1.0.1
Added sections: None
Removed sections: None
Templates requiring updates: None
Follow-up TODOs: None
-->
# E-SHOP PROJECT CONSTITUTION & AI CONTRACTS

## Core Principles

### 1. Core Tech Stack & Patterns
Framework: Next.js (latest version, using App Router).

Language: TypeScript (Strict mode).

Styling: Tailwind CSS (Utility-first).

Components: Prioritize Server Components by default. Only use Client Components ('use client') when interaction is needed (onClick, state, effects).

Validation: Use Zod to validate all input data (API, Forms).

Icons: Lucide React.

UI Library: Shadcn UI (if possible).

### 2. Directory Structure (Architecture Contract)
AI must comply with a clear layered directory structure:

- /app: Contains Routes, Layouts, and Server Actions.
- /components:
  - /ui: Atomic components (button, input...).
  - /modules: Complex components by feature (ProductCard, CartDrawer).
- /lib: Contains library configurations (prisma, stripe, utils).
- /hooks: Custom React hooks.
- /services: Functions interacting with Database or External API (to separate logic from UI).
- /types: Common TypeScript interface/type definitions.

### 3. Coding Standards (Rules)
Naming: - Component file: PascalCase (e.g., ProductList.tsx).

Utilities/Hooks: camelCase (e.g., useCart.ts, formatPrice.ts).

Clean Code:

Functions not exceeding 50 lines. Components not exceeding 150 lines.

Do not use any. Everything must have clear types.

State Management: Prioritize Server-side state (URL search params, Server Actions). For Client-side state (like Cart), use Zustand or React Context.

### 4. E-Shop Domain Contracts
A. Product & Catalog

Always display "Loading" and "Empty" states clearly.

Product images must be optimized via next/image (must have alt, width, height).

Prices must always be formatted according to locale (VND) through a common utility function.

B. Cart & Checkout (Critical)

Cart Logic: Must be synchronized between Local Storage and Database (if user is logged in).

Checkout Flow: Must not lose data when user presses "Back".

Validation: Check stock before allowing addition to cart.

C. Security

Never expose API Key or Secret Key on the Client side.

Use Environment Variables (.env.local) for sensitive configurations.

All user data must be sanitized to prevent XSS and SQL Injection.

### 5. Performance & SEO Contract
SEO: Each page must have metadata (Title, Description, OpenGraph).

Fonts: Use next/font to optimize font loading.

Caching: Maximize use of Next.js Data Cache and Revalidation (ISR) for product detail pages.

### 6. Error Handling Protocol
Use error.tsx file for each route segment.

All API calls must be within try-catch blocks.

Error messages to users must be user-friendly, not displaying pure technical error codes.

### 7. Interaction Rule with Developer
When AI Agent proposes major changes to database or architecture, MUST explain the reason and wait for confirmation before proceeding.

Generated code must include JSDoc for complex logic.

## Governance
This constitution defines the mandatory rules, code standards, and architecture for AI Agent participating in building the eShop system. All generated code must strictly comply with these rules.

Amendment procedure: TODO(Amendment Procedure): Define how amendments are proposed, approved, and documented.

Versioning policy: Follow semantic versioning - MAJOR for backward incompatible changes, MINOR for new additions, PATCH for clarifications.

Compliance review expectations: All code changes must be reviewed for compliance with these principles. Complexity must be justified.

**Version**: 1.0.1 | **Ratified**: 2026-03-24 | **Last Amended**: 2026-03-24
