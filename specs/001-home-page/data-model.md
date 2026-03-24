# Data Model: Build eShop home page with navigation, product list, filters, and footer

## Entities

### Product

**Description**: Represents an item available for purchase in the eShop.

**Fields**:
- `title`: string - Product name (required, 1-100 characters)
- `type`: ProductType - Product category (required, enum: phone, laptop, mouse, keyboard, headphone, others)
- `branch`: string - Manufacturer or brand (required, 1-50 characters)
- `price`: number - Price in VND (required, >0)
- `year`: number - Release year (required, 2000-current year)
- `imageUrl`: string - Product image URL (required, valid URL)
- `description`: string - Detailed product description (optional, 0-1000 characters)

**Validation Rules**:
- Title: Required, trimmed, length 1-100
- Type: Must be one of the enum values
- Branch: Required, trimmed, length 1-50
- Price: Required, positive number, formatted as VND
- Year: Required, integer between 2000 and current year
- ImageUrl: Required, valid URL format
- Description: Optional, trimmed, max 1000 characters

**Relationships**: None (single entity for initial implementation)

**State Transitions**: None (static data initially)

**Notes**: Data will be hard-coded initially. Prepare for API integration with same schema.</content>
<parameter name="filePath">c:\Projects\eshop-app\specs\001-home-page\data-model.md