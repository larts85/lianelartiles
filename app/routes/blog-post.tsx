import type { Route } from "./+types/blog-post";
import { data, Link } from "react-router";
import { blogPosts } from "../data/blog-posts";
import { useBlogLanguage, useBlogMetadata } from "../data/blog-ui";

export function loader({ params }: Route.LoaderArgs) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);
  if (!post) throw data("Post not found", { status: 404 });
  return { post };
}

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData?.post) return [{ title: "404 | Lianel Artiles" }];
  const text = loaderData.post.translations.eng;
  return [{ title: `${text.title} | Lianel Artiles` }, { name: "description", content: text.excerpt }];
}

export default function BlogPostRoute({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;
  const { language, ui } = useBlogLanguage();
  const text = post.translations[language];
  useBlogMetadata(text.title, text.excerpt);
  return (
    <main className="blog-content blog-post">
      <article>
        <Link className="link" to="/blog">{ui.back}</Link>
        {post.publishedAt && <time dateTime={post.publishedAt}>{post.publishedAt}</time>}
        <h1>{text.title}</h1>
        <p className="blog-intro">{text.excerpt}</p>
        {text.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        {post.code && <pre><code>{post.code}</code></pre>}
        {post.source && <p><a href={post.source} target="_blank" rel="noopener noreferrer">{ui.source}</a></p>}
      </article>
    </main>
  );
}
