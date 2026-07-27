"use client";
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Search, Sparkles, BookOpen, Filter } from 'lucide-react';
import blogData from '@/data/blogData';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(blogData.map((b) => b.category));
    return ['All', ...Array.from(cats)];
  }, []);

  // Filter and search blogs
  const filteredBlogs = useMemo(() => {
    return blogData.filter((blog) => {
      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (blog.keywords && blog.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured blog (first item when no filter is applied, or first of filtered list)
  const featuredBlog = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const gridBlogs = filteredBlogs.length > 1 ? filteredBlogs.slice(1) : (filteredBlogs.length === 1 && searchQuery || selectedCategory !== 'All' ? filteredBlogs : []);

  // Schema.org structured data for Blog List
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "CarbonTatva AI Insights & Regulations Hub",
    "description": "Expert research and guides on carbon accounting, EU CBAM, India CCTS, BRSR Core, Scope 3 emissions management, and industrial decarbonization.",
    "url": "https://www.carbontatva.ai/blogs",
    "blogPost": blogData.map((blog) => ({
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": blog.metaDescription || blog.excerpt,
      "image": `https://www.carbontatva.ai${blog.featuredImage}`,
      "url": `https://www.carbontatva.ai/blogs/${blog.slug}`,
      "articleSection": blog.category
    }))
  };

  return (
    <main
      className="animate-fade-in"
      style={{ background: 'var(--bg-color)', minHeight: 'calc(100vh - 80px)', paddingBottom: '8rem', paddingTop: '80px' }}
    >
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <div className="container" style={{ paddingTop: '3rem' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem', maxWidth: '850px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0, 229, 153, 0.12)',
            border: '1px solid rgba(0, 229, 153, 0.3)',
            padding: '6px 16px',
            borderRadius: '50px',
            color: 'var(--primary-green)',
            fontSize: '0.85rem',
            fontWeight: '600',
            letterSpacing: '0.5px',
            marginBottom: '1.5rem',
            textTransform: 'uppercase'
          }}>
            <Sparkles size={14} /> Regulations & Intelligence Hub
          </div>
          <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1.25rem', color: 'var(--text-main)', fontWeight: '800', lineHeight: '1.15' }}>
            Insights & <span style={{ color: 'var(--primary-green)' }}>Research</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.6' }}>
            Actionable expertise on India CCTS, EU CBAM, SEBI BRSR Core, Scope 3 value chain accounting, and industrial decarbonization software.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginBottom: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Search Bar */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '550px'
          }}>
            <Search size={20} style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search guides, regulations (CBAM, CCTS, BRSR), keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1.5rem 1rem 3.2rem',
                borderRadius: '50px',
                border: '1px solid var(--border-light)',
                background: 'white',
                color: 'var(--text-main)',
                fontSize: '1rem',
                boxShadow: 'var(--shadow-sm)',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--primary-green)';
                e.target.style.boxShadow = '0 0 0 3px rgba(0, 229, 153, 0.15)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--border-light)';
                e.target.style.boxShadow = 'var(--shadow-sm)';
              }}
            />
          </div>

          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            justifyContent: 'center'
          }}>
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '0.55rem 1.25rem',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    fontWeight: isSelected ? '600' : '500',
                    border: isSelected ? '1px solid var(--primary-green)' : '1px solid var(--border-light)',
                    background: isSelected ? 'var(--primary-green)' : 'white',
                    color: isSelected ? 'white' : 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? '0 4px 12px rgba(0, 229, 153, 0.25)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = 'var(--primary-green)';
                      e.currentTarget.style.color = 'var(--primary-green)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = 'var(--border-light)';
                      e.currentTarget.style.color = 'var(--text-muted)';
                    }
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Banner (Shown when showing all or first search result) */}
        {featuredBlog && selectedCategory === 'All' && searchQuery === '' && (
          <div style={{ marginBottom: '4rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--text-main)',
              fontWeight: '700',
              fontSize: '1.25rem',
              marginBottom: '1.25rem'
            }}>
              <BookOpen size={20} color="var(--primary-green)" /> Featured Insight
            </div>
            <Link href={`/blogs/${featuredBlog.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                style={{
                  background: 'white',
                  borderRadius: '28px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-md)',
                  overflow: 'hidden',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  transition: 'all 0.35s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  e.currentTarget.style.borderColor = 'var(--primary-green-light)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                }}
              >
                <div style={{ background: '#0F172A', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <img
                    src={featuredBlog.featuredImage}
                    alt={featuredBlog.featuredImageAlt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                </div>
                <div style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '1rem'
                  }}>
                    <span style={{
                      background: 'rgba(0, 229, 153, 0.15)',
                      color: 'var(--primary-green)',
                      padding: '4px 12px',
                      borderRadius: '50px',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      textTransform: 'uppercase'
                    }}>
                      {featuredBlog.category}
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      {featuredBlog.readTime}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: '1.3' }}>
                    {featuredBlog.title}
                  </h2>

                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.1rem', marginBottom: '2rem' }}>
                    {featuredBlog.excerpt}
                  </p>

                  <div>
                    <span className="btn btn-primary" style={{
                      padding: '0.75rem 1.5rem',
                      fontSize: '1rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      Read Full Guide <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Blog Grid */}
        {filteredBlogs.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 0', background: 'white', borderRadius: '24px', border: '1px solid var(--border-light)' }}>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              No articles found matching your criteria.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="btn btn-secondary"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1250px',
            margin: '0 auto'
          }}>
            {(selectedCategory === 'All' && searchQuery === '' ? gridBlogs : filteredBlogs).map((blog) => (
              <Link key={blog.slug} href={`/blogs/${blog.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
                <div 
                  style={{
                    background: 'white',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    e.currentTarget.style.borderColor = 'var(--primary-green-light)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                  }}
                >
                  {/* Image Header */}
                  <div style={{
                    background: '#0F172A',
                    height: '210px',
                    width: '100%',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img
                      src={blog.featuredImage}
                      alt={blog.featuredImageAlt}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--primary-green)',
                      padding: '4px 12px',
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      border: '1px solid rgba(0, 229, 153, 0.3)'
                    }}>
                      {blog.category}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>{blog.readTime}</span>
                    </div>
                    
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.85rem', lineHeight: '1.35', flex: '0 0 auto' }}>
                      {blog.title}
                    </h3>
                    
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1.75rem', flex: 1 }}>
                      {blog.excerpt}
                    </p>
                    
                    <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{
                        color: 'var(--primary-green)',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        Read Article <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </main>
  );
};

export default Blogs;
