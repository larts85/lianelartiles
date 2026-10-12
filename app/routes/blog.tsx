import { Link } from "react-router";
import { blogPosts } from "../data/blog-posts";

export function meta() {
  return [
    { title: "Blog | Lianel Artiles" },
    { name: "description", content: "Thoughts, build notes and engineering write-ups." },
  ];
}

export function loader() {
  return { posts: blogPosts };
}

export default function BlogRoute({ loaderData }) {
  return (
    <section style={{ padding: "4rem 1.5rem 8rem", maxWidth: "960px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "1rem" }}>Blog</h1>
      <p style={{ marginBottom: "2rem" }}>
        A space for architecture notes, migration write-ups and lessons from real projects.
      </p>
      <div style={{ display: "grid", gap: "1.5rem" }}>
        {loaderData.posts.map((post) => (
          <article
            key={post.slug}
            style={{
              padding: "1.5rem",
              borderRadius: "16px",
              background: "var(--bg-card-dark)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.18)",
              textAlign: "left",
            }}
          >
            <p style={{ marginBottom: "0.5rem", opacity: 0.75 }}>{post.publishedAt}</p>
            <h2 style={{ marginBottom: "0.75rem" }}>{post.title}</h2>
            <p style={{ marginBottom: "1rem" }}>{post.excerpt}</p>
            <Link className="link" to={`/blog/${post.slug}`}>
              <span>Read article</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
