import type { Route } from "./+types/blog";
import { Link } from "react-router";
import { blogPosts } from "../data/blog-posts";
import { blogUI, useBlogLanguage, useBlogMetadata } from "../data/blog-ui";

export function meta() {
  return [{ title: "Blog | Lianel Artiles" }, { name: "description", content: blogUI.eng.intro }];
}

export function loader() {
  return { posts: blogPosts };
}

export default function BlogRoute({ loaderData }: Route.ComponentProps) {
  const { language, ui } = useBlogLanguage();
  useBlogMetadata("Blog", ui.intro);
  return (
    <main className="blog-content">
      <h1>Blog</h1>
      <p className="blog-intro">{ui.intro}</p>
      <div className="blog-grid">
        {loaderData.posts.map((post) => {
          const text = post.translations[language];
          return (
            <article key={post.slug} className="blog-card">
              {post.publishedAt && <time dateTime={post.publishedAt}>{post.publishedAt}</time>}
              <h2>{text.title}</h2>
              <p>{text.excerpt}</p>
              <Link className="link" to={`/blog/${post.slug}`}>{ui.read}</Link>
            </article>
          );
        })}
      </div>
    </main>
  );
}
