import apiClient from './apiClient';

// User/Auth API calls
export const authService = {
  login: (email, password) =>
    apiClient.post('/auth/login', { email, password }),

  register: (userData) =>
    apiClient.post('/auth/register', userData),

  logout: () =>
    apiClient.post('/auth/logout'),

  getCurrentUser: () =>
    apiClient.get('/auth/me'),

  updateProfile: (userData) =>
    apiClient.put('/users/profile', userData),
};

// Restaurant API calls
export const restaurantService = {
  getAllRestaurants: (params) =>
    apiClient.get('/restaurants', { params }),

  getRestaurantById: (id) =>
    apiClient.get(`/restaurants/${id}`),

  searchRestaurants: (query) =>
    apiClient.get('/restaurants/search', { params: { q: query } }),

  getRestaurantsByCategory: (category) =>
    apiClient.get(`/restaurants/category/${category}`),

  getRatings: (restaurantId) =>
    apiClient.get(`/restaurants/${restaurantId}/ratings`),
};

// Menu/Food Items API calls
export const foodService = {
  getMenuItems: (restaurantId) =>
    apiClient.get(`/restaurants/${restaurantId}/menu`),

  getFoodItemById: (id) =>
    apiClient.get(`/food/${id}`),

  searchFood: (query) =>
    apiClient.get('/food/search', { params: { q: query } }),

  getFoodByCategory: (restaurantId, category) =>
    apiClient.get(`/restaurants/${restaurantId}/menu/${category}`),
};

// Order API calls
export const orderService = {
  createOrder: (orderData) =>
    apiClient.post('/orders', orderData),

  getOrders: (params) =>
    apiClient.get('/orders', { params }),

  getOrderById: (id) =>
    apiClient.get(`/orders/${id}`),

  updateOrder: (id, updateData) =>
    apiClient.put(`/orders/${id}`, updateData),

  cancelOrder: (id, reason) =>
    apiClient.post(`/orders/${id}/cancel`, { reason }),

  getOrderHistory: () =>
    apiClient.get('/orders/history'),

  trackOrder: (id) =>
    apiClient.get(`/orders/${id}/track`),
};

// Cart API calls
export const cartService = {
  addToCart: (cartData) =>
    apiClient.post('/cart', cartData),

  getCart: () =>
    apiClient.get('/cart'),

  updateCartItem: (itemId, quantity) =>
    apiClient.put(`/cart/${itemId}`, { quantity }),

  removeFromCart: (itemId) =>
    apiClient.delete(`/cart/${itemId}`),

  clearCart: () =>
    apiClient.delete('/cart'),

  applyPromo: (promoCode) =>
    apiClient.post('/cart/promo', { code: promoCode }),
};

// Payment API calls
export const paymentService = {
  initiatePayment: (paymentData) =>
    apiClient.post('/payments/initiate', paymentData),

  verifyPayment: (paymentId, transactionId) =>
    apiClient.post(`/payments/${paymentId}/verify`, { transactionId }),

  getPaymentMethods: () =>
    apiClient.get('/payments/methods'),

  savePaymentMethod: (methodData) =>
    apiClient.post('/payments/methods', methodData),

  deletePaymentMethod: (methodId) =>
    apiClient.delete(`/payments/methods/${methodId}`),
};

// Delivery API calls
export const deliveryService = {
  getDeliveryEstimate: (deliveryData) =>
    apiClient.post('/delivery/estimate', deliveryData),

  getDeliveryStatus: (orderId) =>
    apiClient.get(`/delivery/${orderId}/status`),

  updateDeliveryAddress: (orderId, address) =>
    apiClient.put(`/delivery/${orderId}/address`, { address }),
};

// Review API calls
export const reviewService = {
  addReview: (reviewData) =>
    apiClient.post('/reviews', reviewData),

  getReviews: (restaurantId) =>
    apiClient.get(`/restaurants/${restaurantId}/reviews`),

  deleteReview: (reviewId) =>
    apiClient.delete(`/reviews/${reviewId}`),
};

// Favorites API calls
export const favoriteService = {
  addFavorite: (restaurantId) =>
    apiClient.post(`/favorites/${restaurantId}`),

  removeFavorite: (restaurantId) =>
    apiClient.delete(`/favorites/${restaurantId}`),

  getFavorites: () =>
    apiClient.get('/favorites'),

  isFavorite: (restaurantId) =>
    apiClient.get(`/favorites/${restaurantId}/check`),
};
