"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import blogData from "@/data/blogData";

const LatestInsights = () => {
  return (
    <section style={{ padding: "6rem 0", background: "var(--bg-secondary)", borderTop: "1px solid var(--border-light)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "800px", margin: "0 auto" }}>
          <span style={{
            background: "rgba(0, 229, 153, 0.15)",
            color: "var(--primary-green)",
            padding: "6px 16px",
            borderRadius: "50px",
            fontSize: "0.85rem",
            fontWeight: "700",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            display: "inline-block",
            marginBottom: "1rem"
          }}>
            Knowledge & Regulations Hub
          </span>
          <h2 style={{ fontSize: "2.75rem", fontWeight: "800", color: "var(--text-main)", marginBottom: "1rem", lineHeight: "1.2" }}>
            Latest Decarbonization <span style={{ color: "var(--primary-green)" }}>Insights</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", lineHeight: "1.6" }}>
            Expert guides on navigating India CCTS, EU CBAM, SEBI BRSR Core, and Scope 3 value chain accounting.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2.5rem",
          marginBottom: "3.5rem"
        }}>
          {blogData.slice(0, 3).map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`} style={{ textDecoration: "none", color: "inherit", display: "flex" }}>
              <div style={{
                background: "white",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-sm)",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.borderColor = "var(--primary-green-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                e.currentTarget.style.borderColor = "var(--border-light)";
              }}
              >
                <div style={{ background: "#0F172A", height: "200px", width: "100%", overflow: "hidden", position: "relative" }}>
                  <img src={blog.featuredImage} alt={blog.featuredImageAlt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    background: "rgba(15, 23, 42, 0.85)",
                    backdropFilter: "blur(6px)",
                    color: "var(--primary-green)",
                    padding: "4px 12px",
                    borderRadius: "50px",
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    textTransform: "uppercase"
                  }}>
                    {blog.category}
                  </div>
                </div>

                <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginBottom: "0.75rem" }}>{blog.readTime}</span>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--text-main)", marginBottom: "0.85rem", lineHeight: "1.35", flex: "0 0 auto" }}>
                    {blog.title}
                  </h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: "1.6", fontSize: "0.95rem", marginBottom: "1.75rem", flex: 1 }}>
                    {blog.excerpt}
                  </p>
                  <div style={{ paddingTop: "1rem", borderTop: "1px solid var(--border-light)", display: "flex", alignItems: "center", color: "var(--primary-green)", fontWeight: "600", fontSize: "0.9rem", gap: "6px" }}>
                    Read Guide <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/blogs" className="btn btn-secondary" style={{ padding: "0.85rem 2.5rem", fontSize: "1.05rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            Explore All Regulations & Insights <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
