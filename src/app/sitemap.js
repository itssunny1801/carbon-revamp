import { SITE_URL } from "@/lib/seo";
import blogData from "@/data/blogData";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/offerings", priority: 0.9, changeFrequency: "monthly" },
    { path: "/esg-calculator", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" },
    { path: "/rd", priority: 0.6, changeFrequency: "monthly" },
    { path: "/blogs", priority: 0.9, changeFrequency: "daily" },
    { path: "/demo", priority: 0.7, changeFrequency: "yearly" },
  ];

  const blogRoutes = blogData.map((post) => ({
    path: `/blogs/${post.slug}`,
    priority: 0.8,
    changeFrequency: "weekly",
    lastModified: post.publishDate ? new Date(post.publishDate) : now,
  }));

  const allRoutes = [...staticRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: new URL(route.path, SITE_URL).toString(),
    lastModified: route.lastModified || now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
