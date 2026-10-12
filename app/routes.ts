import { type RouteConfig, index, route } from "@react-router/dev/routes";

const routes: RouteConfig = [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("blog", "routes/blog.tsx"),
  route("blog/:slug", "routes/blog-post.tsx"),
  route("contact", "routes/contact.tsx"),
  route("education", "routes/education.tsx"),
  route("projects", "routes/projects.tsx"),
  route("resume", "routes/resume.tsx"),
  route("skills", "routes/skills.tsx"),
];

export default routes;
