# Quickstart: Fix Price Range Filter Text Visibility

## What Changed

Two `<label>` elements in `components/modules/FilterSidebar.tsx` (the "Min Price" and "Max Price" labels inside the Price Range section) are missing a Tailwind text colour class. This causes them to render in the browser default colour rather than in the `text-gray-700` dark-grey colour that all other filter labels use.

## The Fix — One File, Two Lines

**File**: `components/modules/FilterSidebar.tsx`

Locate the two Price Range label elements (currently inside the `{/* Price Filter */}` comment block) and add `text-gray-700` to each `className`:

```diff
- <label htmlFor="min-price" className="block text-sm">Min Price</label>
+ <label htmlFor="min-price" className="block text-sm text-gray-700">Min Price</label>

- <label htmlFor="max-price" className="block text-sm">Max Price</label>
+ <label htmlFor="max-price" className="block text-sm text-gray-700">Max Price</label>
```

## Verification

1. Start the development server: `npm run dev`
2. Open the product listing page in a browser.
3. Inspect the filter sidebar — the "Min Price" and "Max Price" labels must now render in the same dark-grey colour as the "Product Category" and "Brand" filter labels.
4. Confirm no layout or spacing changes occurred.
5. Run a Lighthouse accessibility audit (or use a browser contrast checker) to confirm the contrast ratio is ≥ 4.5:1 (expected: ~10.1:1 for `text-gray-700` on white).

## No Build Changes Required

No new packages, environment variables, or configuration changes are needed.
