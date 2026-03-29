import { data, Link } from "react-router";
import { blogPosts } from "../data/blog-posts";

export function loader({ params }) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    throw data("Post not found", { status: 404 });
  }

  return { post };
}

export function meta({ loaderData }) {
  return [
    { title: `${loaderData.post.title} | Lianel Artiles` },
    { name: "description", content: loaderData.post.excerpt },
  ];
}

export default function BlogPostRoute({ loaderData }) {
  const { post } = loaderData;

  return (
    <article style={{ padding: "4rem 1.5rem 8rem", maxWidth: "860px", margin: "0 auto", textAlign: "left" }}>
      <Link className="link" to="/blog">
        <span>Back to blog</span>
      </Link>
      <p style={{ margin: "1.5rem 0 0.5rem", opacity: 0.75 }}>{post.publishedAt}</p>
      <h1 style={{ marginBottom: "1rem" }}>{post.title}</h1>
      <p style={{ marginBottom: "2rem" }}>{post.excerpt}</p>
      <div style={{ display: "grid", gap: "1rem" }}>
        {post.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
