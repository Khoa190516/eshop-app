---

description: "Task list template for feature implementation"
---

# Tasks: Build eShop home page with navigation, product list, filters, and footer

**Input**: Design documents from `/specs/001-home-page/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are OPTIONAL - not requested in specification, so skipped.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: app/, components/, lib/, types/, hooks/, services/ at repository root
- Adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create project directories per implementation plan
- [X] T002 Install required dependencies (Next.js, TypeScript, Tailwind CSS, Zod, Lucide React, Shadcn UI)
- [X] T003 [P] Configure TypeScript strict mode and tsconfig.json
- [X] T004 [P] Setup Tailwind CSS configuration
- [X] T005 [P] Initialize Shadcn UI components

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T006 Create Product type definition in types/index.ts
- [X] T007 [P] Create hard-coded product data in lib/data/products.ts
- [X] T008 [P] Create formatPrice utility function in lib/utils/formatPrice.ts
- [X] T009 [P] Create Zod validation schema for Product in lib/validations/product.ts
- [X] T010 Setup root layout.tsx with basic structure
- [X] T011 [P] Configure global CSS with Tailwind in app/globals.css
- [X] T012 [P] Create error boundary in app/error.tsx

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - View Navigation Bar (Priority: P1) 🎯 MVP

**Goal**: Display navigation bar with eShop logo, search component, and user profile icon

**Independent Test**: Load home page and verify navigation elements are present and functional

### Implementation for User Story 1

- [X] T013 [US1] Create Navigation component in components/modules/Navigation.tsx
- [X] T014 [US1] Implement logo display in Navigation component
- [X] T015 [US1] Add search input component to Navigation
- [X] T016 [US1] Add user profile icon to Navigation
- [X] T017 [US1] Style Navigation with responsive design

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Browse Product List (Priority: P1) 🎯 MVP

**Goal**: Display main content section with list of products

**Independent Test**: Load home page and verify product list displays with product information

### Implementation for User Story 2

- [X] T018 [US2] Create ProductCard component in components/modules/ProductCard.tsx
- [X] T019 [US2] Implement product image display with next/image in ProductCard
- [X] T020 [US2] Add product title, price, and description to ProductCard
- [X] T021 [US2] Create ProductList component in components/modules/ProductList.tsx
- [X] T022 [US2] Implement grid layout for ProductList
- [X] T023 [US2] Add Loading and Empty states to ProductList
- [X] T024 [US2] Integrate ProductList into home page (app/page.tsx)

**Checkpoint**: At this point, User Story 2 should be fully functional and testable independently

---

## Phase 5: User Story 3 - Filter Products (Priority: P2)

**Goal**: Enable filtering products by type, price, and branch

**Independent Test**: Apply filters and verify product list updates to show only matching items

### Implementation for User Story 3

- [X] T025 [US3] Create FilterSidebar component in components/modules/FilterSidebar.tsx
- [X] T026 [US3] Implement type filter checkboxes (phone, laptop, mouse, keyboard, headphone, others)
- [X] T027 [US3] Add price range filter inputs
- [X] T028 [US3] Implement branch filter dropdown
- [X] T029 [US3] Create useProducts hook for filter logic in hooks/useProducts.ts
- [X] T030 [US3] Integrate FilterSidebar into home page layout
- [X] T031 [US3] Connect filter state to ProductList updates

**Checkpoint**: At this point, User Story 3 should be fully functional and testable independently

---

## Phase 6: User Story 4 - Sort Products (Priority: P2)

**Goal**: Enable sorting products by price (low to high, high to low)

**Independent Test**: Select sort option and verify product list reorders accordingly

### Implementation for User Story 4

- [X] T032 [US4] Create SortControls component in components/modules/SortControls.tsx
- [X] T033 [US4] Implement price sort options (low to high, high to low)
- [X] T034 [US4] Extend useProducts hook with sort logic
- [X] T035 [US4] Integrate SortControls into home page
- [X] T036 [US4] Connect sort state to ProductList updates

**Checkpoint**: At this point, User Story 4 should be fully functional and testable independently

---

## Phase 7: User Story 5 - View Footer (Priority: P3)

**Goal**: Display footer with app information

**Independent Test**: Scroll to bottom and verify footer content displays

### Implementation for User Story 5

- [X] T037 [US5] Create Footer component in components/modules/Footer.tsx
- [X] T038 [US5] Add app information content to Footer
- [X] T039 [US5] Style Footer with responsive design
- [X] T040 [US5] Integrate Footer into root layout

**Checkpoint**: At this point, User Story 5 should be fully functional and testable independently

---

## Final Phase: Polish & Cross-Cutting Concerns

**Purpose**: Final touches, performance, and compliance

- [X] T041 Add metadata to home page (app/page.tsx) for SEO
- [X] T042 Optimize fonts with next/font in layout
- [X] T043 Add accessibility attributes to components
- [X] T044 Implement responsive design refinements
- [X] T045 Add loading states and error handling
- [X] T046 Final code review for constitution compliance

**Dependencies**:
- US1 → US2 (navigation before products)
- US2 → US3, US4 (product list before filters/sorts)
- US3, US4, US5 can run in parallel after US2

**Parallel Opportunities**:
- US3 and US4 can be developed simultaneously after US2 completion
- Within each story, UI and logic tasks can be parallelized

**Implementation Strategy**:
- MVP: US1 + US2 (basic navigation and product browsing)
- Increment 1: US3 (filtering)
- Increment 2: US4 (sorting)
- Increment 3: US5 (footer) + polish</content>
<parameter name="filePath">c:\Projects\eshop-app\specs\001-home-page\tasks.md