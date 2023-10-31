// BtnTest.test.js

import { render, screen } from '@testing-library/react';
import BtnTest from '../components/BtnTest';

test('renders test button', () => {
  render(<BtnTest />);
  const linkElement = screen.getByText(/BtnTest/i);
  expect(linkElement).toBeInTheDocument();
});

test('checks if sum is 4', () => {
  render(<BtnTest />);
  const btn = screen.getByTestId('btnTest');
  const buttonText = btn.textContent; // Get the button's text content
  expect(btn).toBeTruthy(); // Ensure the button is in the DOM
  expect(buttonText).toContain('4'); // Check if '4' is present in the button's text content
});