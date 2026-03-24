# Tasks: Fix Price Range Filter Text Visibility

**Input**: Design documents from `/specs/005-fix-price-filter-text/`  
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅ (N/A), quickstart.md ✅

**Tests**: No automated test tasks — spec does not request TDD; verification is visual inspection per quickstart.md.

**Organization**: Single user story (P1). No setup or foundational phase needed — this is a targeted class addition to an existing component in an already-running project.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1)

---

## Phase 1: User Story 1 - Read Price Range Labels Clearly (Priority: P1) 🎯 MVP

**Goal**: The "Min Price" and "Max Price" labels in the Price Range filter section render in the same visible dark-grey colour as the labels in the Product Category and Brand filter sections.

**Independent Test**: Start the dev server, navigate to the product listing page, and confirm both Price Range labels are clearly legible and visually consistent with the Category and Brand filter labels. Verify no layout or functional regressions.

### Implementation for User Story 1

- [x] T001 [US1] Add `text-gray-700` to the Min Price label in `components/modules/FilterSidebar.tsx`
- [x] T002 [US1] Add `text-gray-700` to the Max Price label in `components/modules/FilterSidebar.tsx`

**Checkpoint**: Both Price Range labels now display identically to labels in Category and Brand sections. User Story 1 is fully functional and testable.

---

## Phase 2: Polish & Verification

**Purpose**: Confirm correctness and accessibility compliance per quickstart.md

- [ ] T003 Run dev server (`npm run dev`) and visually verify Price Range labels match Category and Brand label colour on the product listing page
- [ ] T004 [P] Verify contrast ratio for `text-gray-700` (#374151) on white (#FFFFFF) meets WCAG AA ≥ 4.5:1 (expected ~10.1:1) using a browser accessibility tool or Lighthouse audit
- [ ] T005 [P] Confirm no layout, spacing, or input-field behaviour has changed in the filter sidebar

---

## Dependencies & Execution Order

### Phase Dependencies

- **User Story 1 (Phase 1)**: No blocking prerequisites — starts immediately
- **Polish (Phase 2)**: Depends on Phase 1 completion

### User Story Dependencies

- **User Story 1 (P1)**: No dependencies on other stories

### Within Phase 1

- T001 and T002 both target the same file (`FilterSidebar.tsx`); apply sequentially to avoid conflicts
- T001 must complete before T002 (same edit block)

### Parallel Opportunities

- T003, T004, T005 in Phase 2 — T004 and T005 are marked [P] and can run simultaneously once T003 confirms the dev server is running

---

## Parallel Example: Phase 2 Verification

```text
After T003 (dev server up):
  ├── T004 — contrast ratio check  [P]
  └── T005 — layout regression check  [P]
```

---

## Implementation Strategy

**MVP**: Phase 1 (T001 + T002) alone delivers the full feature value — two class additions to a single file. Phase 2 validates correctness but does not change behaviour.

**Suggested delivery order**: T001 → T002 → T003 → (T004 ‖ T005)

---

## Summary

| Metric | Value |
|--------|-------|
| Total tasks | 5 |
| User Story 1 tasks | 2 |
| Polish/verification tasks | 3 |
| Parallel opportunities | T004 ‖ T005 |
| Files modified | 1 (`components/modules/FilterSidebar.tsx`) |
| MVP scope | Phase 1 (T001–T002) |
