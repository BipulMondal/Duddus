import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Notification from '../pages/Notification';
import SearchResult from '../pages/SearchResult';
import Help_Support from '../pages/Help_Support';

// Lazy import pages (can be added later)
// For now using placeholder pages
const Login = () => <div>Login Page</div>;
const Register = () => <div>Register Page</div>;
const Profile = () => <div>Profile Page</div>;
const Restaurants = () => <div>Restaurants Page</div>;
const RestaurantDetail = () => <div>Restaurant Detail Page</div>;
const Cart = () => <div>Cart Page</div>;
const Checkout = () => <div>Checkout Page</div>;
const Orders = () => <div>Orders Page</div>;
const OrderDetail = () => <div>Order Detail Page</div>;
const NotFound = () => <div>404 - Page Not Found</div>;

const AppRoutes = () => {
  // You can check auth status here
  const isAuthenticated = !!localStorage.getItem('authToken');

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/restaurants/:id" element={<RestaurantDetail />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/result" element={<SearchResult />} />
      <Route path="/help-and-support" element={<Help_Support />} />

      {/* Protected Routes */}
      {isAuthenticated ? (
        <>
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetail />} />
        </>
      ) : (
        <Route path="/profile" element={<Navigate to="/login" />} />
      )}

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
