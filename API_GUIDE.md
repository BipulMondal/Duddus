# Food Delivery App - API Service Guide

## Project Structure

```
src/
├── components/          # Reusable React components
├── pages/              # Page components for routes
├── routes/             # Routing configuration
├── services/           # API service layer
│   ├── apiClient.js    # Reusable HTTP client with interceptors
│   └── index.js        # All API service methods
├── styles/             # Global styles
└── utils/              # Helper functions and constants
    ├── constants.js    # App constants
    └── helpers.js      # Utility functions
```

## HTTP Client Setup

The HTTP client (`services/apiClient.js`) is a reusable Axios instance configured with:

- **Base URL**: Configurable via `REACT_APP_API_URL` environment variable
- **Timeout**: 10 seconds
- **Request Interceptor**: Automatically adds auth token from localStorage
- **Response Interceptor**: Handles errors globally and formats responses
- **Auth Handling**: Auto-redirects to login on 401 errors

## Environment Configuration

Create a `.env` file in the root directory:

```bash
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

Or use the provided `.env.example` as a template.

## Using API Services

All API services are exported from `services/index.js`. Import and use them in your components:

### Authentication

```javascript
import { authService } from '../services';

// Login
const response = await authService.login('email@example.com', 'password');

// Register
const response = await authService.register({
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password',
  phone: '1234567890',
});

// Get current user
const user = await authService.getCurrentUser();
```

### Restaurants

```javascript
import { restaurantService } from '../services';

// Get all restaurants
const restaurants = await restaurantService.getAllRestaurants();

// Get restaurant by ID
const restaurant = await restaurantService.getRestaurantById('123');

// Search restaurants
const results = await restaurantService.searchRestaurants('pizza');

// Get by category
const category = await restaurantService.getRestaurantsByCategory('fast-food');
```

### Food Items

```javascript
import { foodService } from '../services';

// Get menu items
const menu = await foodService.getMenuItems('restaurantId');

// Search food
const results = await foodService.searchFood('biryani');
```

### Orders

```javascript
import { orderService } from '../services';

// Create order
const order = await orderService.createOrder({
  restaurantId: '123',
  items: [
    { id: '1', quantity: 2, price: 100 },
  ],
  deliveryAddress: '123 Main St',
  paymentMethod: 'credit_card',
});

// Get orders
const orders = await orderService.getOrders();

// Track order
const tracking = await orderService.trackOrder('orderId');

// Cancel order
const result = await orderService.cancelOrder('orderId', 'Changed my mind');
```

### Cart

```javascript
import { cartService } from '../services';

// Add to cart
await cartService.addToCart({
  restaurantId: '123',
  itemId: 'item123',
  quantity: 2,
});

// Get cart
const cart = await cartService.getCart();

// Apply promo code
const result = await cartService.applyPromo('SAVE20');
```

### Payments

```javascript
import { paymentService } from '../services';

// Initiate payment
const payment = await paymentService.initiatePayment({
  orderId: '123',
  amount: 500,
  method: 'card',
});

// Verify payment
const result = await paymentService.verifyPayment('paymentId', 'transactionId');
```

### Delivery

```javascript
import { deliveryService } from '../services';

// Get delivery estimate
const estimate = await deliveryService.getDeliveryEstimate({
  restaurantId: '123',
  latitude: 28.6139,
  longitude: 77.2090,
});

// Get delivery status
const status = await deliveryService.getDeliveryStatus('orderId');
```

### Reviews

```javascript
import { reviewService } from '../services';

// Add review
await reviewService.addReview({
  restaurantId: '123',
  rating: 4.5,
  comment: 'Great food!',
});

// Get reviews
const reviews = await reviewService.getReviews('restaurantId');
```

### Favorites

```javascript
import { favoriteService } from '../services';

// Add to favorites
await favoriteService.addFavorite('restaurantId');

// Get favorites
const favorites = await favoriteService.getFavorites();

// Check if favorite
const isFavorite = await favoriteService.isFavorite('restaurantId');
```

## Error Handling

All API calls return a promise. Handle errors with try-catch:

```javascript
import { restaurantService } from '../services';

try {
  const restaurants = await restaurantService.getAllRestaurants();
  console.log('Restaurants:', restaurants);
} catch (error) {
  console.error('Error status:', error.status);
  console.error('Error message:', error.message);
  console.error('Error data:', error.data);
}
```

## Interceptors

### Request Interceptor
- Automatically adds Bearer token from `authToken` in localStorage

### Response Interceptor
- Returns only response data (unwraps axios response)
- Handles 401 errors by clearing token and redirecting to login
- Formats errors with status, message, and data

## Authentication Token

The app looks for auth token in `localStorage.authToken`. After login, store it:

```javascript
const response = await authService.login(email, password);
localStorage.setItem('authToken', response.token);
```

Token is automatically added to all subsequent requests via the request interceptor.

## Helper Functions

Import from `utils/helpers.js`:

```javascript
import {
  formatPrice,
  formatDate,
  isValidEmail,
  isValidPhone,
  debounce,
  throttle,
  calculateDistance,
  getFromLocalStorage,
  setToLocalStorage,
  removeFromLocalStorage,
} from '../utils/helpers';

// Format price
formatPrice(500); // ₹500.00

// Format date
formatDate('2024-02-16'); // 16 February 2024

// Validate email
isValidEmail('test@example.com'); // true

// Debounce search
const debouncedSearch = debounce((query) => {
  // API call
}, 300);
```

## Constants

Import from `utils/constants.js`:

```javascript
import {
  API_ENDPOINTS,
  ORDER_STATUS,
  PAYMENT_STATUS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  LOCAL_STORAGE_KEYS,
} from '../utils/constants';

console.log(ORDER_STATUS.PENDING); // 'pending'
```

## Next Steps

1. Create individual page components in `pages/`
2. Create reusable UI components in `components/`
3. Add state management (Redux, Context API) as needed
4. Implement authentication flow
5. Connect UI with API services
