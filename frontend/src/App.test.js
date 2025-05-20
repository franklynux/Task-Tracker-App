import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Task Tracker heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/task tracker/i);
  expect(headingElement).toBeInTheDocument();
});
