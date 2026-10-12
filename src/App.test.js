import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import App from '../app/root';
import HomeRoute from '../app/routes/home';

function renderPortfolio() {
  return render(
    <MemoryRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<HomeRoute />} />
          <Route path="resume" element={<h1>Resume page</h1>} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

test('renders the migrated root and home route with portfolio context', () => {
  renderPortfolio();
  expect(screen.getByText(/Working on my passion/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^Resume$/i })).toHaveAttribute('href', '/resume');
});

test('navigates through the React Router outlet while preserving the header', () => {
  renderPortfolio();
  fireEvent.click(screen.getByRole('link', { name: /^Resume$/i }));
  expect(screen.getByRole('heading', { name: 'Resume page' })).toBeInTheDocument();
  expect(screen.queryByText(/Working on my passion/i)).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^Resume$/i })).toBeInTheDocument();
});
