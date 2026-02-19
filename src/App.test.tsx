import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app component', () => {
  render(<App />);
  // Update this test based on your actual app content
  expect(document.querySelector('.App')).toBeInTheDocument();
});
