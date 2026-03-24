# Implementation Plan: Update API to use real product data from external endpoint

**Branch**: `003-real-products-api` | **Date**: 2026-03-24 | **Spec**: specs/003-real-products-api/spec.md
**Input**: Feature specification from `/specs/003-real-products-api/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Update the GET /products API endpoint to call the real external API at https://dummyjson.com/products instead of returning hardcoded mock data. Update the Product data model to match the full API response format, including additional fields like rating, stock, brand, etc. Ensure UI components can display the enhanced product information.

## Technical Context

**Language/Version**: TypeScript (Strict mode)  
**Primary Dependencies**: Next.js (App Router), Node.js fetch API  
**External API**: https://dummyjson.com/products (GET, no auth, JSON response)  
**Data Format**: JSON with products array containing comprehensive product objects  
**Storage**: External API (dummyjson.com)  
**Testing**: Unit tests for API endpoint, integration tests for data fetching  
**Target Platform**: Server-side API routes  
**Project Type**: Web application API enhancement  
**Performance Goals**: API response under 2 seconds, handle up to 100 products  
**Constraints**: No authentication required, maintain existing error handling  
**Scale/Scope**: Single API endpoint update with model expansion

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Constitution not yet defined for this project. Recommend creating project constitution with `/speckit-constitution` to establish coding standards, architectural patterns, and development guidelines.

**Provisional Assessment**: Following existing patterns from previous features (Next.js App Router, TypeScript strict, proper error handling, data validation).

## Project Structure

### Documentation (this feature)

```text
specs/003-real-products-api/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
│   └── external-api.md  # API contract for dummyjson.com
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code Changes

**Modified Files**:
- `app/api/products/route.ts` - Update to call external API instead of returning mock data
- `types/index.ts` - Expand Product interface to include all API response fields
- `lib/data/products.ts` - Remove or update mock data (may become unused)

**New Files**: None

**Dependencies**: No new dependencies required (using built-in fetch)

## Complexity Tracking

Low complexity feature - single API endpoint modification with model update. No new architectural patterns or complex integrations required.