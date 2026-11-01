import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useParams } from 'react-router';
import App from '../app/root';
import BlogRoute, { loader as blogLoader } from '../app/routes/blog';
import BlogPostRoute, { loader as postLoader, meta } from '../app/routes/blog-post';
import { blogPosts } from '../app/data/blog-posts';

function Post() {
  return <BlogPostRoute loaderData={postLoader({ params: useParams() })} />;
}

function renderBlog() {
  const description = document.createElement('meta');
  description.name = 'description';
  document.head.appendChild(description);
  return render(
    <MemoryRouter initialEntries={['/blog']}>
      <Routes>
        <Route element={<App />}>
          <Route path="blog" element={<BlogRoute loaderData={blogLoader()} />} />
          <Route path="blog/:slug" element={<Post />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

afterEach(() => document.querySelector('meta[name="description"]')?.remove());

test.each([
  ['English', 'eng', 'en', 'Read article', 'Back to blog'],
  ['Español', 'esp', 'es', 'Leer artículo', 'Volver al blog'],
  ['Français', 'fre', 'fr', 'Lire l’article', 'Retour au blog'],
])('reads and returns from an article in %s', (label, language, locale, read, back) => {
  renderBlog();
  if (language !== 'eng') fireEvent.click(screen.getByRole('button', { name: label }));
  const text = blogPosts[0].translations[language];
  expect(screen.getByRole('heading', { name: text.title })).toBeInTheDocument();
  fireEvent.click(screen.getAllByRole('link', { name: read })[0]);
  expect(screen.getByRole('heading', { level: 1, name: text.title })).toBeInTheDocument();
  expect(screen.getByText(text.body[0])).toBeInTheDocument();
  expect(document.title).toBe(`${text.title} | Lianel Artiles`);
  expect(document.documentElement.lang).toBe(locale);
  expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', text.excerpt);
  fireEvent.click(screen.getByRole('link', { name: back }));
  expect(screen.getAllByRole('link', { name: read })).toHaveLength(blogPosts.length);
  expect(document.title).toBe('Blog | Lianel Artiles');
});

test('switches all three languages while reading without leaving the article', () => {
  renderBlog();
  fireEvent.click(screen.getAllByRole('link', { name: 'Read article' })[0]);
  for (const [label, language] of [['Español', 'esp'], ['Français', 'fre'], ['English', 'eng']]) {
    fireEvent.click(screen.getByRole('button', { name: label }));
    expect(screen.getByRole('heading', { level: 1, name: blogPosts[0].translations[language].title })).toBeInTheDocument();
  }
});

test('unknown articles return 404 and metadata handles missing loader data', () => {
  try {
    postLoader({ params: { slug: 'missing' } });
    throw new Error('Expected 404');
  } catch (error) {
    expect(error.init.status).toBe(404);
  }
  expect(meta({ loaderData: undefined })).toEqual([{ title: '404 | Lianel Artiles' }]);
});
