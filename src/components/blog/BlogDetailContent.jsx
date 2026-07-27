"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, ArrowRight, Share2, Copy, Check, ChevronDown, 
  ChevronUp, Sparkles, HelpCircle, BookOpen, ExternalLink, Bookmark
} from 'lucide-react';

// Helper to convert text to URL slug for Table of Contents anchors
const slugify = (text) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};

const BlogDetailContent = ({ blog, relatedBlogs = [] }) => {
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShareLinkedIn = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(blog.title);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    }
  };

  const handleShareTwitter = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`${blog.title} — via @CarbonTatvaAI`);
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    }
  };

  // Extract all h2 headings for Table of Contents
  const tocItems = blog.content
    .filter((item) => item.type === 'heading' && item.level === 2)
    .map((item) => ({
      id: slugify(item.text),
      text: item.text,
    }));

  return (
    <main
      className="animate-fade-in"
      style={{ background: 'var(--bg-color)', minHeight: 'calc(100vh - 80px)', paddingBottom: '8rem', paddingTop: '80px' }}
    >
      {/* Breadcrumb Bar */}
      <div style={{ background: 'rgba(15, 23, 42, 0.4)', borderBottom: '1px solid var(--border-light)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} className="hover-green">Home</Link>
          <span>/</span>
          <Link href="/blogs" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} className="hover-green">Blogs & Insights</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-main)', fontWeight: '500', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '300px' }}>
            {blog.category}
          </span>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '3.5rem' }}>
        
        {/* Back Link */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/blogs" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--primary-green)',
            fontWeight: '600',
            fontSize: '0.95rem',
            textDecoration: 'none',
            transition: 'transform 0.2s ease'
          }}>
            <ArrowLeft size={18} /> Back to All Articles
          </Link>
        </div>

        {/* Hero Title & Badges */}
        <div style={{ maxWidth: '920px', marginBottom: '3rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '1.25rem',
            flexWrap: 'wrap'
          }}>
            <span style={{
              background: 'rgba(0, 229, 153, 0.15)',
              color: 'var(--primary-green)',
              padding: '6px 16px',
              borderRadius: '50px',
              fontSize: '0.85rem',
              fontWeight: '700',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              border: '1px solid rgba(0, 229, 153, 0.3)'
            }}>
              {blog.category}
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <BookOpen size={16} /> {blog.readTime}
            </span>
          </div>

          <h1 style={{
            fontSize: '2.85rem',
            fontWeight: '800',
            color: 'var(--text-main)',
            lineHeight: '1.2',
            marginBottom: '1.5rem',
            letterSpacing: '-0.5px'
          }}>
            {blog.title}
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-muted)',
            lineHeight: '1.65',
            fontWeight: '400'
          }}>
            {blog.excerpt}
          </p>
        </div>

        {/* Featured Banner Image */}
        <div style={{
          borderRadius: '28px',
          overflow: 'hidden',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-lg)',
          marginBottom: '4rem',
          background: '#0F172A',
          maxHeight: '520px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img
            src={blog.featuredImage}
            alt={blog.featuredImageAlt}
            style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'contain', padding: '1.5rem' }}
          />
        </div>

        {/* Main Content & Sidebar Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 340px',
          gap: '4rem',
          alignItems: 'start'
        }} className="blog-detail-layout">
          
          {/* Main Article Content */}
          <article className="blog-article-body" style={{ minWidth: 0 }}>
            
            {blog.content.map((block, idx) => {
              if (block.type === 'heading') {
                if (block.level === 2) {
                  const id = slugify(block.text);
                  return (
                    <h2
                      key={idx}
                      id={id}
                      style={{
                        fontSize: '1.9rem',
                        fontWeight: '800',
                        color: 'var(--text-main)',
                        marginTop: '3.5rem',
                        marginBottom: '1.25rem',
                        lineHeight: '1.3',
                        paddingTop: '1rem',
                        borderTop: idx > 0 ? '1px solid var(--border-light)' : 'none'
                      }}
                    >
                      {block.text}
                    </h2>
                  );
                } else if (block.level === 3) {
                  const id = slugify(block.text);
                  return (
                    <h3
                      key={idx}
                      id={id}
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        color: 'var(--text-main)',
                        marginTop: '2.5rem',
                        marginBottom: '1rem',
                        lineHeight: '1.35'
                      }}
                    >
                      {block.text}
                    </h3>
                  );
                }
              }

              if (block.type === 'paragraph') {
                return (
                  <p
                    key={idx}
                    style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                      color: 'var(--text-muted)',
                      marginBottom: '1.5rem',
                      fontWeight: '400'
                    }}
                  >
                    {block.text}
                  </p>
                );
              }

              if (block.type === 'list') {
                return (
                  <ul
                    key={idx}
                    style={{
                      marginBottom: '2rem',
                      paddingLeft: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem'
                    }}
                  >
                    {block.items.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: '1.08rem',
                          lineHeight: '1.7',
                          color: 'var(--text-muted)',
                          position: 'relative',
                          listStyleType: 'disc'
                        }}
                      >
                        <span style={{ color: 'var(--text-main)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              if (block.type === 'callout') {
                const isImportant = block.alertType === 'important' || block.alertType === 'warning';
                return (
                  <div
                    key={idx}
                    style={{
                      background: isImportant ? 'rgba(239, 68, 68, 0.08)' : 'rgba(0, 229, 153, 0.08)',
                      borderLeft: `4px solid ${isImportant ? '#EF4444' : 'var(--primary-green)'}`,
                      padding: '1.5rem 1.75rem',
                      borderRadius: '0 16px 16px 0',
                      marginBottom: '2.25rem',
                      marginTop: '1.5rem',
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start'
                    }}
                  >
                    <div style={{ color: isImportant ? '#EF4444' : 'var(--primary-green)', marginTop: '2px', flexShrink: 0 }}>
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.95rem', color: isImportant ? '#EF4444' : 'var(--primary-green)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {block.alertType || 'Key Takeaway'}
                      </div>
                      <p style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.6', fontWeight: '500' }}>
                        {block.text}
                      </p>
                    </div>
                  </div>
                );
              }

              if (block.type === 'quote') {
                return (
                  <blockquote
                    key={idx}
                    style={{
                      background: 'rgba(15, 23, 42, 0.6)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '20px',
                      padding: '2rem',
                      margin: '2.5rem 0',
                      position: 'relative'
                    }}
                  >
                    <p style={{
                      fontSize: '1.25rem',
                      fontStyle: 'italic',
                      color: 'var(--text-main)',
                      lineHeight: '1.7',
                      marginBottom: block.author ? '1rem' : 0,
                      fontWeight: '500'
                    }}>
                      "{block.text}"
                    </p>
                    {block.author && (
                      <cite style={{
                        display: 'block',
                        fontSize: '0.95rem',
                        color: 'var(--primary-green)',
                        fontWeight: '600',
                        fontStyle: 'normal'
                      }}>
                        — {block.author}
                      </cite>
                    )}
                  </blockquote>
                );
              }

              return null;
            })}

            {/* Interactive FAQ Section */}
            {blog.faqItems && blog.faqItems.length > 0 && (
              <div style={{ marginTop: '4.5rem', paddingTop: '3rem', borderTop: '2px solid var(--border-light)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
                  <HelpCircle size={24} color="var(--primary-green)" />
                  <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-main)', margin: 0 }}>
                    Frequently Asked Questions
                  </h2>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {blog.faqItems.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={index}
                        style={{
                          background: 'white',
                          borderRadius: '16px',
                          border: isOpen ? '1px solid var(--primary-green)' : '1px solid var(--border-light)',
                          overflow: 'hidden',
                          boxShadow: isOpen ? '0 4px 16px rgba(0, 229, 153, 0.12)' : 'var(--shadow-sm)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          style={{
                            width: '100%',
                            padding: '1.25rem 1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            background: 'transparent',
                            border: 'none',
                            textAlign: 'left',
                            cursor: 'pointer',
                            color: 'var(--text-main)',
                            fontSize: '1.1rem',
                            fontWeight: '700'
                          }}
                        >
                          <span style={{ paddingRight: '1rem' }}>{faq.question}</span>
                          <span style={{ color: isOpen ? 'var(--primary-green)' : 'var(--text-muted)' }}>
                            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </span>
                        </button>
                        
                        {isOpen && (
                          <div style={{
                            padding: '0 1.5rem 1.5rem 1.5rem',
                            color: 'var(--text-muted)',
                            lineHeight: '1.7',
                            fontSize: '1.02rem',
                            borderTop: '1px dashed var(--border-light)',
                            paddingTop: '1rem'
                          }}>
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Keyword tags */}
            {blog.keywords && blog.keywords.length > 0 && (
              <div style={{ marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border-light)', display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)', marginRight: '8px' }}>Related Topics:</span>
                {blog.keywords.map((kw, idx) => (
                  <span key={idx} style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--text-muted)',
                    padding: '4px 12px',
                    borderRadius: '50px',
                    fontSize: '0.8rem'
                  }}>
                    #{kw}
                  </span>
                ))}
              </div>
            )}

          </article>

          {/* Sticky Sidebar */}
          <aside style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Table of Contents */}
            {tocItems.length > 0 && (
              <div style={{
                background: 'white',
                borderRadius: '24px',
                padding: '1.75rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Bookmark size={18} color="var(--primary-green)" /> In This Guide
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {tocItems.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={`#${item.id}`}
                        style={{
                          color: 'var(--text-muted)',
                          textDecoration: 'none',
                          fontSize: '0.92rem',
                          lineHeight: '1.4',
                          display: 'block',
                          transition: 'all 0.2s ease',
                          paddingLeft: '8px',
                          borderLeft: '2px solid transparent'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--primary-green)';
                          e.currentTarget.style.borderLeftColor = 'var(--primary-green)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--text-muted)';
                          e.currentTarget.style.borderLeftColor = 'transparent';
                        }}
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Share Widget */}
            <div style={{
              background: 'white',
              borderRadius: '24px',
              padding: '1.75rem',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Share2 size={18} color="var(--primary-green)" /> Share This Insight
              </h4>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={handleShareLinkedIn}
                  style={{
                    flex: 1,
                    padding: '0.6rem',
                    borderRadius: '12px',
                    border: '1px solid #0077B5',
                    background: 'rgba(0, 119, 181, 0.08)',
                    color: '#0077B5',
                    fontWeight: '600',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#0077B5'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0, 119, 181, 0.08)'; e.currentTarget.style.color = '#0077B5'; }}
                >
                  LinkedIn
                </button>
                <button
                  onClick={handleShareTwitter}
                  style={{
                    flex: 1,
                    padding: '0.6rem',
                    borderRadius: '12px',
                    border: '1px solid #1DA1F2',
                    background: 'rgba(29, 161, 242, 0.08)',
                    color: '#1DA1F2',
                    fontWeight: '600',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#1DA1F2'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(29, 161, 242, 0.08)'; e.currentTarget.style.color = '#1DA1F2'; }}
                >
                  Twitter
                </button>
                <button
                  onClick={handleCopyLink}
                  title="Copy Link"
                  style={{
                    padding: '0.6rem 0.85rem',
                    borderRadius: '12px',
                    border: '1px solid var(--border-light)',
                    background: copied ? 'var(--primary-green)' : 'white',
                    color: copied ? 'white' : 'var(--text-main)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            {/* Need Help Box */}
            <div style={{
              background: 'linear-gradient(135deg, #0B1120 0%, #0F172A 100%)',
              borderRadius: '24px',
              padding: '2rem',
              border: '1px solid rgba(0, 229, 153, 0.3)',
              boxShadow: 'var(--shadow-md)',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(0, 229, 153, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto',
                color: 'var(--primary-green)'
              }}>
                <Sparkles size={24} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.75rem', color: 'white' }}>
                Need Help with {blog.category}?
              </h4>
              <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Our AI-native carbon operating system automates data ingestion and multi-framework audit compliance.
              </p>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <span className="btn btn-primary" style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.75rem 1rem',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  Schedule a Demo <ArrowRight size={16} />
                </span>
              </Link>
            </div>

          </aside>
        </div>

        {/* Related Articles Section */}
        {relatedBlogs.length > 0 && (
          <div style={{ marginTop: '6rem', paddingTop: '4rem', borderTop: '2px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span style={{ color: 'var(--primary-green)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Explore More
                </span>
                <h3 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--text-main)', margin: 0 }}>
                  Related Insights
                </h3>
              </div>
              <Link href="/blogs" style={{ color: 'var(--primary-green)', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                View All Articles <ArrowRight size={18} />
              </Link>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem'
            }}>
              {relatedBlogs.map((rel) => (
                <Link key={rel.slug} href={`/blogs/${rel.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
                  <div style={{
                    background: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%'
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
                    <div style={{ background: '#0F172A', height: '170px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                      <img src={rel.featuredImage} alt={rel.featuredImageAlt} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }} />
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'rgba(15, 23, 42, 0.85)',
                        backdropFilter: 'blur(6px)',
                        color: 'var(--primary-green)',
                        padding: '3px 10px',
                        borderRadius: '50px',
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        textTransform: 'uppercase'
                      }}>
                        {rel.category}
                      </div>
                    </div>
                    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{rel.readTime}</span>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.75rem', lineHeight: '1.35', flex: '0 0 auto' }}>
                        {rel.title}
                      </h4>
                      <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>
                        {rel.excerpt}
                      </p>
                      <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', color: 'var(--primary-green)', fontWeight: '600', fontSize: '0.85rem', gap: '6px' }}>
                        Read Guide <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
};

export default BlogDetailContent;
