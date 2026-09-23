"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

const categories = ["All", "Automation", "Sustainability", "Compliance", "Water Systems", "Blending Technology", "Pharmaceutical Equipment"];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured post is the first post (or any designated one)
  const featuredPost = blogPosts[0];
  const secondaryPosts = filteredPosts.filter((post) => post.slug !== featuredPost.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.microtechengg.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.microtechengg.in/blog",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Blog Page Hero */}
      <section className="bg-gradient-to-br from-purple-200 via-blue-100 to-orange-200 text-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-purple-600">
              <li>
                <Link href="/" className="hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">
                Blog
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Industrial &amp; Pharmaceutical Knowledge Center
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
            Stay informed with technical manufacturing guides, cGMP compliance updates, machinery design insights, and engineering articles.
          </p>
        </div>
      </section>

      {/* Main Blog Catalog Section */}
      <section className="py-16 bg-white" aria-labelledby="blog-catalog-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="blog-catalog-heading" className="sr-only">
            Blog Catalog
          </h2>

          {/* Filtering and Search Bar Panel */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 bg-gray-50 p-6 rounded-2xl border border-gray-100">
            {/* Category selection */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  id={`filter-${cat.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full shadow-sm transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                id="blog-search-input"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 shadow-inner"
              />
              <svg
                className="absolute left-3.5 top-3 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Featured Post Box (Show only if search/category matches or no filters) */}
          {selectedCategory === "All" && searchQuery === "" && featuredPost && (
            <div className="mb-14">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-4">
                Latest Featured Article
              </h3>
              <div className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 grid lg:grid-cols-2 gap-8 p-6 lg:p-8">
                <div className="aspect-video lg:aspect-auto h-64 lg:h-80 w-full rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-between py-2">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-full font-semibold">
                        {featuredPost.category}
                      </span>
                      <span>&bull;</span>
                      <span>{featuredPost.readTime}</span>
                      <span>&bull;</span>
                      <span>{featuredPost.date}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors mb-4 leading-tight">
                      <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
                      {featuredPost.summary}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs font-medium text-gray-500">By {featuredPost.author}</span>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-900 group-hover:text-purple-600 transition-colors"
                    >
                      Read Full Article
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Filtered Articles Grid */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
              {selectedCategory !== "All" || searchQuery !== "" ? "Search Results" : "All Articles"}
            </h3>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                <svg
                  className="w-12 h-12 mx-auto text-gray-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-gray-600 text-lg font-medium">No articles found matching your query.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4 px-5 py-2 text-xs font-semibold text-purple-600 hover:text-purple-700 bg-purple-50 rounded-full transition-colors"
                >
                  Clear Filters &amp; Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(selectedCategory !== "All" || searchQuery !== "" ? filteredPosts : secondaryPosts).map((post) => (
                  <article
                    key={post.slug}
                    className="group flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="aspect-video w-full overflow-hidden bg-gray-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-3 font-semibold uppercase tracking-wider">
                          <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">
                            {post.category}
                          </span>
                          <span>&bull;</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors mb-3 leading-snug">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                          {post.summary}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-[10px] font-medium text-gray-400">{post.date}</span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-gray-900 group-hover:text-purple-600 transition-colors"
                        >
                          Read More &rarr;
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog CTA */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Need Expert Consulting on Your Next Setup?
          </h2>
          <p className="text-gray-500 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
            Our engineers can help you configure compliant ointment plants, PW/WFI water loops, or blenders tailored to your manufacturing requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
          >
            Get in Touch with Engineers
          </Link>
        </div>
      </section>
    </>
  );
}
