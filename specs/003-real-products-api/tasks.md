# Implementation Tasks: Update API to use real product data from external endpoint

**Feature Branch**: `003-real-products-api` | **Date**: 2026-03-24 | **Plan**: specs/003-real-products-api/plan.md
**Input**: Implementation plan from `/specs/003-real-products-api/plan.md`

## Dependencies

**User Story Completion Order**:
1. US2 (Updated Product Model) - **MUST complete before US1**
2. US1 (Display Real Product Catalog) - Depends on US2

**Parallel Execution Opportunities**:
- US2 tasks can be done in parallel (single file update)
- US1 tasks are sequential (API update, then testing)

## Implementation Strategy

**MVP Scope**: Complete US2 + US1 for basic real data display
**Incremental Delivery**: US2 first (model update), then US1 (API integration)
**Testing Approach**: Manual testing of API responses and UI display

---

## Phase 1: Setup

No setup tasks required - project structure already established.

---

## Phase 2: Foundational Tasks

**Blocking Prerequisites**: Complete before user story implementation.

### Independent Test Criteria
- TypeScript compilation succeeds
- Product interface includes all required fields from API response

- [x] T001 Update Product interface in types/index.ts to include all API fields (rating, stock, brand, sku, weight, dimensions, warrantyInformation, shippingInformation, availabilityStatus, reviews, returnPolicy, minimumOrderQuantity, meta, images, thumbnail)

---

## Phase 3: User Story 1 - Display Real Product Catalog (P1)

**Story Goal**: As a user browsing the e-shop, I want to see real products from an external API so I can explore actual available items.

**Independent Test Criteria**:
- API endpoint returns real product data from dummyjson.com
- UI displays products with complete information including ratings, stock, and brand details
- Filtering and sorting functionality preserved with real data

- [x] T002 [US1] Update app/api/products/route.ts to fetch data from https://dummyjson.com/products using fetch API
- [x] T003 [US1] Parse API response and return products array in correct format
- [x] T004 [US1] Update error handling to catch and handle external API failures (network errors, invalid responses)
- [x] T005 [US1] Remove or comment out usage of mock data in lib/data/products.ts (no longer needed)
- [x] T006 [US1] Test API endpoint manually to verify it returns real product data
- [x] T007 [US1] Verify UI components display additional product fields (rating, stock, brand) correctly
- [x] T008 [US1] Test filtering and sorting functionality works with real product data

---

## Phase 4: Polish & Cross-Cutting Concerns

**Story Goal**: Ensure feature is production-ready with proper error handling and documentation.

**Independent Test Criteria**:
- Application handles API failures gracefully
- No console errors in browser
- Performance acceptable with real data

- [x] T009 Add fallback error messages for API unavailability in UI components
- [x] T010 Update quickstart.md with any additional setup instructions for real API
- [x] T011 Verify application performance with real product data (page load times)
- [x] T012 Test edge cases (slow network, API timeout, invalid data format)

---

**Total Tasks**: 12
**Tasks per User Story**: US1: 7, US2: 1, Polish: 4
**Parallel Opportunities**: Minimal (mostly sequential API integration)
**MVP Scope**: Tasks T001-T008 (complete US2 + US1)