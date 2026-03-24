# External API Contract: dummyjson.com/products

## Endpoint

- **URL**: https://dummyjson.com/products
- **Method**: GET
- **Authentication**: None required
- **Content-Type**: application/json

## Request

No request body or parameters required.

## Response

### Success Response (200 OK)

```json
{
  "products": [
    {
      "id": 1,
      "title": "Product Title",
      "description": "Product description",
      "category": "category",
      "price": 9.99,
      "discountPercentage": 10.48,
      "rating": 2.56,
      "stock": 99,
      "tags": ["tag1", "tag2"],
      "brand": "Brand Name",
      "sku": "SKU-001",
      "weight": 4,
      "dimensions": {
        "width": 15.14,
        "height": 13.08,
        "depth": 22.99
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Review comment",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Reviewer Name",
          "reviewerEmail": "reviewer@example.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 48,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "5784719087687",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": ["https://cdn.dummyjson.com/product-images/..."],
      "thumbnail": "https://cdn.dummyjson.com/product-images/.../thumbnail.webp"
    }
  ],
  "total": 194,
  "skip": 0,
  "limit": 30
}
```

### Error Responses

- 404: Endpoint not found
- 500: Internal server error

## Rate Limits

Not specified - assume reasonable usage.

## Data Types

- All string fields: UTF-8 encoded
- Numeric fields: Standard JSON numbers
- Arrays: As shown
- Dates: ISO 8601 format strings

## Reliability

- Service availability: Provided by dummyjson.com
- Data consistency: May change over time
- Response time: Typically < 2 seconds