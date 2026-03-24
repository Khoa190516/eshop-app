# Implementation Plan: Fix Price Range Filter Text Visibility

**Branch**: `005-fix-price-filter-text` | **Date**: 2026-03-25 | **Spec**: specs/005-fix-price-filter-text/spec.md  
**Input**: Feature specification from `/specs/005-fix-price-filter-text/spec.md`

## Summary

The "Min Price" and "Max Price" labels in the `FilterSidebar` Price Range section are missing an explicit Tailwind text-colour class, causing them to render in the browser's default (grey-ish) colour which blends with the white sidebar background. The fix is a targeted Tailwind CSS class addition on those two `<label>` elements to match the `text-gray-700` class already applied to labels in the Product Category and Brand sections. No logic, data, or layout changes are required.

## Technical Context

**Language/Version**: TypeScript  
**Primary Dependencies**: Next.js (App Router), Tailwind CSS  
**Storage**: N/A — UI styling only  
**Testing**: Visual inspection; contrast ratio verification against WCAG AA (≥ 4.5:1)  
**Target Platform**: Web browser (desktop)  
**Project Type**: Web application — UI bugfix  
**Performance Goals**: No measurable impact; purely static class changes  
**Constraints**: WCAG AA contrast compliance; must not alter layout, spacing, or input behaviour  
**Scale/Scope**: Single component — `components/modules/FilterSidebar.tsx`

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Rule | Status | Notes |
|------|--------|-------|
| TypeScript strict mode | ✅ Pass | No type changes needed |
| Tailwind CSS utility-first | ✅ Pass | Fix uses standard Tailwind classes |
| Component file ≤ 150 lines | ✅ Pass | `FilterSidebar.tsx` is 113 lines; unchanged |
| No `any` types | ✅ Pass | No type changes introduced |
| Server/Client component discipline | ✅ Pass | Component remains `'use client'`; no change |
| Sanitize user data / prevent XSS | ✅ Pass | No new user data surfaces |
| No API keys on client side | ✅ N/A | Not applicable |

**Post-Phase 1 re-assessment**: No violations. This is a class-only change; all constitution rules remain satisfied.

## Project Structure

### Documentation (this feature)

```text
specs/005-fix-price-filter-text/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output (N/A marker included)
├── quickstart.md        # Phase 1 output
├── checklists/
│   └── requirements.md
└── tasks.md             # Phase 2 output (/speckit.tasks — NOT created here)
```

### Source Code Changes

**Modified Files**:
- `components/modules/FilterSidebar.tsx` — Add `text-gray-700` to the two Price Range `<label>` elements (lines ~70 and ~78 of current file)

**New Files**: None

**Dependencies**: No new dependencies required (uses existing Tailwind CSS)

## Complexity Tracking

Low complexity — two-character class additions to a single existing component. No architectural, logic, or dependency changes.
