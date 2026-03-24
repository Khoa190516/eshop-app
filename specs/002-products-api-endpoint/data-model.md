# Data Model

**Feature**: Products API Endpoint  
**Date**: March 24, 2026  
**Plan**: [specs/002-products-api-endpoint/plan.md](specs/002-products-api-endpoint/plan.md)

## Entities

### Product Entity

**Purpose**: Represents an item available for purchase in the e-shop catalog.

**Fields**:
- `title`: string (required) - The product name/title
- `type`: string (required) - Product category (phone, laptop, mouse, keyboard, headphone)
- `branch`: string (required) - Manufacturer/brand name
- `price`: number (required) - Price in USD
- `year`: number (required) - Release year
- `imageUrl`: string (required) - URL to product image
- `description`: string (required) - Detailed product description

**Validation Rules**:
- `title`: Non-empty string, max 200 characters
- `type`: Must be one of predefined categories
- `branch`: Non-empty string, max 100 characters
- `price`: Positive number, max 999999.99
- `year`: Valid year between 2000-2030
- `imageUrl`: Valid URL format
- `description`: Non-empty string, max 1000 characters

**Relationships**: None (standalone entity for initial implementation)

**State Transitions**: N/A (static data initially)

**Example**:
```json
{
  "title": "iPhone 15 Pro",
  "type": "phone",
  "branch": "Apple",
  "price": 999,
  "year": 2023,
  "imageUrl": "/images/iphone15.jpg",
  "description": "Latest iPhone with advanced camera system and A17 Pro chip."
}
```

## Data Flow

1. **Source**: Hardcoded in `lib/data/products.ts`
2. **API Layer**: `GET /api/products` returns array of Product objects
3. **Client Layer**: UI components fetch and display Product data
4. **Validation**: TypeScript interfaces ensure type safety throughout

## Future Extensions

- Add `id`: unique identifier when moving to database
- Add `stock`: inventory quantity
- Add `categories`: array of category strings
- Add `specifications`: detailed tech specs object
- Add `reviews`: customer reviews array