import React from 'react';
import { notFound } from 'next/navigation';
import blogData from '@/data/blogData';
import BlogDetailContent from '@/components/blog/BlogDetailContent';

// Pre-render static routes at build time
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic SEO metadata for each blog article
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: 'Article Not Found — CarbonTatva AI',
      description: 'The requested sustainability guide or article could not be found.',
    };
  }

  const title = blog.metaTitle || `${blog.title} | CarbonTatva AI`;
  const description = blog.metaDescription || blog.excerpt;
  const url = `https://www.carbontatva.ai/blogs/${blog.slug}`;

  return {
    title,
    description,
    keywords: blog.keywords || [],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      siteName: 'CarbonTatva AI',
      images: [
        {
          url: blog.featuredImage ? `https://www.carbontatva.ai${blog.featuredImage}` : 'https://www.carbontatva.ai/assets/logo1.png',
          width: 1200,
          height: 630,
          alt: blog.featuredImageAlt || blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [blog.featuredImage ? `https://www.carbontatva.ai${blog.featuredImage}` : 'https://www.carbontatva.ai/assets/logo1.png'],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Find related articles (by relatedSlugs or same category fallback)
  let relatedBlogs = [];
  if (blog.relatedSlugs && blog.relatedSlugs.length > 0) {
    relatedBlogs = blogData.filter((b) => blog.relatedSlugs.includes(b.slug) && b.slug !== blog.slug);
  }
  if (relatedBlogs.length < 3) {
    const moreRelated = blogData.filter((b) => b.category === blog.category && b.slug !== blog.slug && !relatedBlogs.some((r) => r.slug === b.slug));
    relatedBlogs = [...relatedBlogs, ...moreRelated].slice(0, 3);
  }
  if (relatedBlogs.length < 3) {
    const anyMore = blogData.filter((b) => b.slug !== blog.slug && !relatedBlogs.some((r) => r.slug === b.slug));
    relatedBlogs = [...relatedBlogs, ...anyMore].slice(0, 3);
  }

  // Build JSON-LD BlogPosting Schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.metaDescription || blog.excerpt,
    "image": `https://www.carbontatva.ai${blog.featuredImage}`,
    "url": `https://www.carbontatva.ai/blogs/${blog.slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.carbontatva.ai/blogs/${blog.slug}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "CarbonTatva AI",
      "url": "https://www.carbontatva.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.carbontatva.ai/assets/logo1.png"
      }
    },
    "articleSection": blog.category,
    "keywords": blog.keywords ? blog.keywords.join(", ") : ""
  };

  // Optional FAQPage Schema if faqItems exist
  let faqSchema = null;
  if (blog.faqItems && blog.faqItems.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": blog.faqItems.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <BlogDetailContent blog={blog} relatedBlogs={relatedBlogs} />
    </>
  );
}
