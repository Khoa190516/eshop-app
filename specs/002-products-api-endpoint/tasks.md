# Tasks: Products API Endpoint

**Input**: Design documents from `/specs/002-products-api-endpoint/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: No test tasks included - tests not requested in feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: Uses Next.js App Router structure with /app, /components, /lib, /hooks

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Verify project readiness and basic structure

- [x] T001 Verify Next.js project structure matches implementation plan
- [x] T002 Confirm TypeScript configuration and dependencies

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Ensure existing codebase is ready for API integration

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T003 Verify existing Product type definition in types/index.ts
- [x] T004 Confirm existing products data structure in lib/data/products.ts
- [x] T005 Verify existing useProducts hook in hooks/useProducts.ts

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - View Product Catalog (Priority: P1) 🎯 MVP

**Goal**: Create GET /products API endpoint that returns all products for catalog browsing

**Independent Test**: API returns JSON with products array, accessible via GET /api/products

### Implementation for User Story 1

- [x] T006 [US1] Create API route handler in app/api/products/route.ts
- [x] T007 [US1] Implement GET method to return products from lib/data/products.ts
- [x] T008 [US1] Add proper error handling and HTTP status codes
- [x] T009 [US1] Test API endpoint manually via curl or browser

**Checkpoint**: At this point, User Story 1 should be fully functional - API returns products data

---

## Phase 4: User Story 2 - API Integration Setup (Priority: P2)

**Goal**: Update UI components to fetch product data from API instead of hardcoded imports

**Independent Test**: UI loads products from API call, no hardcoded data usage in components

### Implementation for User Story 2

- [x] T010 [US2] Update useProducts hook in hooks/useProducts.ts to fetch from API
- [x] T011 [US2] Add loading and error states to useProducts hook
- [x] T012 [US2] Update ProductList component in components/modules/ProductList.tsx to use hook
- [x] T013 [US2] Update ProductCard component in components/modules/ProductCard.tsx if needed
- [x] T014 [US2] Remove hardcoded product imports from affected components
- [x] T015 [US2] Test UI loads products from API successfully

**Checkpoint**: At this point, User Stories 1 AND 2 should both work - full API integration complete

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Final improvements and validation

- [x] T016 Verify API response time meets <1 second requirement
- [x] T017 Test error scenarios (API unavailable, network issues)
- [x] T018 Validate all 8 products are returned by API
- [x] T019 Run quickstart.md validation steps
- [x] T020 Code cleanup and ensure TypeScript compliance

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User Story 1 (P1) can proceed independently
  - User Story 2 (P2) depends on User Story 1 completion for testing
- **Polish (Final Phase)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Depends on US1 for API availability

### Within Each User Story

- API implementation before UI integration
- Core functionality before error handling
- Manual testing before polish

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Within User Story 2: Component updates can run in parallel
- Different user stories can be worked on sequentially due to dependency

---

## Parallel Example: User Story 2

```bash
# Launch component updates in parallel:
Task: "Update ProductList component in components/modules/ProductList.tsx to use hook"
Task: "Update ProductCard component in components/modules/ProductCard.tsx if needed"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test API endpoint independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test API independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test full integration → Deploy/Demo
4. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (API implementation)
   - Developer B: User Story 2 (UI integration)
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence