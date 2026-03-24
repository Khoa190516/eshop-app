# Data Model

## Entities

### Product

**Description**: Represents a product from the external API with comprehensive information.

**Fields**:
- id: number (unique identifier)
- title: string (product name)
- description: string (detailed description)
- category: string (product category)
- price: number (base price)
- discountPercentage: number (discount percentage)
- rating: number (average rating)
- stock: number (available quantity)
- tags: string[] (product tags)
- brand: string (brand name)
- sku: string (stock keeping unit)
- weight: number (product weight)
- dimensions: { width: number, height: number, depth: number } (physical dimensions)
- warrantyInformation: string (warranty details)
- shippingInformation: string (shipping details)
- availabilityStatus: string (availability status)
- reviews: Array<{ rating: number, comment: string, date: string, reviewerName: string, reviewerEmail: string }> (customer reviews)
- returnPolicy: string (return policy)
- minimumOrderQuantity: number (minimum order quantity)
- meta: { createdAt: string, updatedAt: string, barcode: string, qrCode: string } (metadata)
- images: string[] (product images URLs)
- thumbnail: string (thumbnail image URL)

**Validation Rules**:
- id: required, positive integer
- title: required, non-empty string
- price: required, positive number
- rating: 0-5 range
- stock: non-negative integer

**Relationships**: None (standalone entity)

**State Transitions**: None (static data from API)