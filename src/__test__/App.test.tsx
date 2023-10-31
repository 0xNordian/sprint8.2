import { render, screen } from '@testing-library/react';
import BtnTest from '../components/BtnTest';

test('renders test button', () => {
  render(<BtnTest />);
  const linkElement = screen.getByText(/BtnTest/i);
  expect(linkElement).toBeInTheDocument();
});
