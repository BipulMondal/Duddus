import apiClient from './apiClient';

// Type definitions
interface LoginCredentials {
  email: string;
  password: string;
}

interface UserData {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}

interface RestaurantParams {
  page?: number;
  limit?: number;
  category?: string;
  sortBy?: string;
}

interface OrderData {
  restaurantId: string;
  items: Array<{
    foodItemId: string;
    quantity: number;
  }>;
  deliveryAddress: string;
  paymentMethod: string;
}

interface OrderParams {
  page?: number;
  limit?: number;
  status?: string;
}

interface CartData {
  foodItemId: string;
  quantity: number;
  restaurantId: string;
}

interface PaymentData {
  orderId: string;
  amount: number;
  method: string;
}

interface PaymentMethod {
  type: string;
  details: any;
}

interface DeliveryData {
  restaurantId: string;
  deliveryAddress: string;
}

interface ReviewData {
  restaurantId: string;
  rating: number;
  comment: string;
}

// User/Auth API calls
export const authService = {
  login: (email: string, password: string) =>
    apiClient.post('/auth/login', { email, password }),

  register: (userData: UserData) =>
    apiClient.post('/auth/register', userData),

  logout: () =>
    apiClient.post('/auth/logout'),

  getCurrentUser: () =>
    apiClient.get('/auth/me'),

  updateProfile: (userData: UserData) =>
    apiClient.put('/users/profile', userData),
};

// Restaurant API calls
export const restaurantService = {
  getAllRestaurants: (params?: RestaurantParams) =>
    apiClient.get('/restaurants', { params }),

  getRestaurantById: (id: string) =>
    apiClient.get(`/restaurants/${id}`),

  searchRestaurants: (query: string) =>
    apiClient.get('/restaurants/search', { params: { q: query } }),

  getRestaurantsByCategory: (category: string) =>
    apiClient.get(`/restaurants/category/${category}`),

  getRatings: (restaurantId: string) =>
    apiClient.get(`/restaurants/${restaurantId}/ratings`),
};

// Menu/Food Items API calls
export const foodService = {
  getMenuItems: (restaurantId: string) =>
    apiClient.get(`/restaurants/${restaurantId}/menu`),

  getFoodItemById: (id: string) =>
    apiClient.get(`/food/${id}`),

  searchFood: (query: string) =>
    apiClient.get('/food/search', { params: { q: query } }),

  getFoodByCategory: (restaurantId: string, category: string) =>
    apiClient.get(`/restaurants/${restaurantId}/menu/${category}`),
};

// Order API calls
export const orderService = {
  createOrder: (orderData: OrderData) =>
    apiClient.post('/orders', orderData),

  getOrders: (params?: OrderParams) =>
    apiClient.get('/orders', { params }),

  getOrderById: (id: string) =>
    apiClient.get(`/orders/${id}`),

  updateOrder: (id: string, updateData: any) =>
    apiClient.put(`/orders/${id}`, updateData),

  cancelOrder: (id: string, reason: string) =>
    apiClient.post(`/orders/${id}/cancel`, { reason }),

  getOrderHistory: () =>
    apiClient.get('/orders/history'),

  trackOrder: (id: string) =>
    apiClient.get(`/orders/${id}/track`),
};

// Cart API calls
export const cartService = {
  addToCart: (cartData: CartData) =>
    apiClient.post('/cart', cartData),

  getCart: () =>
    apiClient.get('/cart'),

  updateCartItem: (itemId: string, quantity: number) =>
    apiClient.put(`/cart/${itemId}`, { quantity }),

  removeFromCart: (itemId: string) =>
    apiClient.delete(`/cart/${itemId}`),

  clearCart: () =>
    apiClient.delete('/cart'),

  applyPromo: (promoCode: string) =>
    apiClient.post('/cart/promo', { code: promoCode }),
};

// Payment API calls
export const paymentService = {
  initiatePayment: (paymentData: PaymentData) =>
    apiClient.post('/payments/initiate', paymentData),

  verifyPayment: (paymentId: string, transactionId: string) =>
    apiClient.post(`/payments/${paymentId}/verify`, { transactionId }),

  getPaymentMethods: () =>
    apiClient.get('/payments/methods'),

  savePaymentMethod: (methodData: PaymentMethod) =>
    apiClient.post('/payments/methods', methodData),

  deletePaymentMethod: (methodId: string) =>
    apiClient.delete(`/payments/methods/${methodId}`),
};

// Delivery API calls
export const deliveryService = {
  getDeliveryEstimate: (deliveryData: DeliveryData) =>
    apiClient.post('/delivery/estimate', deliveryData),

  getDeliveryStatus: (orderId: string) =>
    apiClient.get(`/delivery/${orderId}/status`),

  updateDeliveryAddress: (orderId: string, address: string) =>
    apiClient.put(`/delivery/${orderId}/address`, { address }),
};

// Review API calls
export const reviewService = {
  addReview: (reviewData: ReviewData) =>
    apiClient.post('/reviews', reviewData),

  getReviews: (restaurantId: string) =>
    apiClient.get(`/restaurants/${restaurantId}/reviews`),

  deleteReview: (reviewId: string) =>
    apiClient.delete(`/reviews/${reviewId}`),
};

// Favorites API calls
export const favoriteService = {
  addFavorite: (restaurantId: string) =>
    apiClient.post(`/favorites/${restaurantId}`),

  removeFavorite: (restaurantId: string) =>
    apiClient.delete(`/favorites/${restaurantId}`),

  getFavorites: () =>
    apiClient.get('/favorites'),

  isFavorite: (restaurantId: string) =>
    apiClient.get(`/favorites/${restaurantId}/check`),
};

