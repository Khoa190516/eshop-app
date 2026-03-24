# Data Model: Fix Price Range Filter Text Visibility

## N/A — Styling-Only Feature

This feature introduces no new data entities, state, or data flows. The change is limited to adding CSS utility classes to existing HTML label elements within `FilterSidebar.tsx`.

The existing `priceRange` prop shape (`{ min: number; max: number }`) and all related types in `types/index.ts` are unchanged.

No database, API, local storage, or runtime state modifications are made.
