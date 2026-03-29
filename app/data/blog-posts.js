export const blogPosts = [
  {
    slug: "moving-portfolio-to-cloudflare",
    title: "Moving My Portfolio To Cloudflare",
    excerpt:
      "Why I moved from a static CRA portfolio to a full-stack React Router setup on Cloudflare Workers.",
    publishedAt: "2026-03-29",
    body: [
      "This portfolio started as a classic Create React App project deployed to GitHub Pages.",
      "That worked well for a static resume site, but it became limiting once I wanted to add a blog and features that benefit from server-side rendering and request-time logic.",
      "The new stack uses React Router and Cloudflare Workers, which gives me modern routing, server loaders and a cleaner path to ship blog content and dynamic features.",
    ],
  },
  {
    slug: "why-blogging-belongs-in-a-portfolio",
    title: "Why Blogging Belongs In A Portfolio",
    excerpt:
      "A portfolio shows outcomes. A blog shows how you think, decide and solve problems.",
    publishedAt: "2026-03-28",
    body: [
      "A portfolio without writing often hides the process behind the polished final result.",
      "A blog helps explain tradeoffs, architecture decisions and the reasoning behind code and product choices.",
      "That is useful both for clients and for technical interviews, because it shows judgment instead of just screenshots.",
    ],
  },
];
