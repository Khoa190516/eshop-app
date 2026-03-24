# Research Findings: Fix Price Range Filter Text Visibility

## Decision: Root Cause Analysis

**Decision**: The text colour issue originates from missing Tailwind colour utilities on the Price Range label elements.

**Rationale**: Inspecting `FilterSidebar.tsx` shows that Category and Brand checkbox labels carry `text-gray-700` explicitly:

```tsx
<span className="ml-2 text-sm capitalize text-gray-700">…</span>  // Category
<span className="ml-2 text-sm text-gray-700">…</span>             // Brand
```

The Price Range labels carry only the base `text-sm` class (no colour utility):

```tsx
<label htmlFor="min-price" className="block text-sm">Min Price</label>
<label htmlFor="max-price" className="block text-sm">Max Price</label>
```

Without an explicit colour, these elements inherit the browser's default colour (typically a mid-grey, `#767676`, in Chromium-based browsers), which fails to stand out sufficiently against the white (`#FFFFFF`) sidebar background for users on certain displays or in certain lighting conditions, even if the raw contrast ratio may technically be marginal.

**Alternatives Considered**:

| Option | Description | Verdict |
|--------|-------------|---------|
| Add `text-gray-700` | Match the existing pattern used in Category/Brand sections | ✅ Selected — consistent with existing code |
| Add `text-gray-800` | Slightly darker, matches section heading colour | Overpowers labels vs. values hierarchy, not selected |
| Add `text-gray-900` | Maximum contrast | Reserved for headings per current design; not selected |
| Add global `label` base reset in CSS | Modify `globals.css` default | Too broad — affects all labels site-wide; not selected |

---

## Decision: Target Tailwind Class

**Decision**: Use `text-gray-700` (`#374151`).

**Rationale**:
- `text-gray-700` on `bg-white` (`#FFFFFF`) yields a contrast ratio of **10.1:1**, well above the WCAG AA minimum of 4.5:1 and the stricter WCAG AAA threshold of 7:1.  
- It identically matches the colour used for item labels in the Category and Brand filter sections, satisfying FR-001 / FR-002 and SC-002 (visual consistency).

---

## Decision: Scope of Change

**Decision**: Change is limited to the two `<label>` elements inside the Price Range `<div>` block. No other elements, files, components, or styles are modified.

**Rationale**: The spec explicitly requires that all other filter sections (Product Category, Brand) remain visually unchanged (FR-005). Changing only the two affected labels achieves this without risk.

**Alternatives Considered**:
- Refactoring all filter section label styles into a shared component — out of scope and unnecessary for a targeted bugfix.

---

## All Unknowns Resolved

- Root cause confirmed: missing explicit text colour class.  
- Target class confirmed: `text-gray-700`.  
- Scope confirmed: two label elements in `FilterSidebar.tsx`.  
- No NEEDS CLARIFICATION markers remain.  

Ready for design phase.
