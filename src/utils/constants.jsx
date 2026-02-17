// API Endpoints
export const API_ENDPOINTS = {
  AUTH: '/auth',
  RESTAURANTS: '/restaurants',
  FOOD: '/food',
  ORDERS: '/orders',
  CART: '/cart',
  PAYMENTS: '/payments',
  DELIVERY: '/delivery',
  REVIEWS: '/reviews',
  FAVORITES: '/favorites',
  USERS: '/users',
};

// HTTP Methods
export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
};

// Error Messages
export const ERROR_MESSAGES = {
  UNAUTHORIZED: 'You are not authorized. Please login again.',
  FORBIDDEN: 'You do not have permission to access this resource.',
  NOT_FOUND: 'The requested resource was not found.',
  BAD_REQUEST: 'Invalid request. Please check your input.',
  INTERNAL_SERVER_ERROR: 'An internal server error occurred.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  TIMEOUT: 'Request timeout. Please try again.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Logged in successfully!',
  LOGOUT_SUCCESS: 'Logged out successfully!',
  ORDER_CREATED: 'Order created successfully!',
  ORDER_CANCELLED: 'Order cancelled successfully!',
  REVIEW_ADDED: 'Review added successfully!',
  FAVORITE_ADDED: 'Added to favorites!',
  FAVORITE_REMOVED: 'Removed from favorites!',
  PROFILE_UPDATED: 'Profile updated successfully!',
};

// Order Status
export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PREPARING: 'preparing',
  OUT_FOR_DELIVERY: 'out_for_delivery',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

// Payment Status
export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
  REFUNDED: 'refunded',
};

// Local Storage Keys
export const LOCAL_STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER_DATA: 'userData',
  CART_DATA: 'cartData',
  FAVORITES: 'favorites',
  RECENT_SEARCHES: 'recentSearches',
};
