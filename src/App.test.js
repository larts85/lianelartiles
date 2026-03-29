import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio navigation and landing text', () => {
  render(<App />);

  expect(screen.getByText(/Working on my passion/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Resume/i })).toBeInTheDocument();
});
