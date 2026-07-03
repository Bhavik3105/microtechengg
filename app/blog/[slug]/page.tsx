import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug, getAllBlogPostSlugs } from "@/lib/blog";
import FAQAccordion from "@/components/FAQAccordion";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: {
      absolute: post.metaTitle,
    },
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.microtechengg.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.microtechengg.in/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  // Find 2 other related posts
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    image: `https://www.microtechengg.in${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Microtech Engineering",
      logo: {
        "@type": "ImageObject",
        url: "https://www.microtechengg.in/images/logo.png",
      },
    },
  };

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.microtechengg.in/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-purple-200 via-blue-100 to-orange-200 text-gray-900 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-purple-600 flex-wrap">
              <li>
                <Link href="/" className="hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-gray-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-900 font-medium line-clamp-1" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>
          
          <span className="inline-block text-xs bg-white text-purple-700 px-3 py-1 rounded-full font-semibold mb-4 shadow-sm">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            {post.title}
          </h1>

          {/* Author/Date Info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-600 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                AP
              </div>
              <span>{post.author}</span>
            </div>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span>Published on {post.date}</span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Column */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Large Image */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-xl aspect-video w-full max-h-[500px]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Sidebar (left-side on desktop) */}
            <div className="hidden lg:block space-y-8">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sticky top-24">
                <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                  Category
                </h4>
                <span className="inline-block text-xs bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-semibold shadow-sm">
                  {post.category}
                </span>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
                    Need Engineering Help?
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    Get custom layouts, pricing, and designs matching your processes.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full text-center py-2.5 px-4 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold rounded-full shadow-md transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Reading Column */}
            <div className="lg:col-span-3">
              <article 
                className="prose prose-purple max-w-none text-gray-700 leading-relaxed space-y-6
                  [&>p]:text-base [&>p]:leading-relaxed [&>p]:text-gray-700
                  [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:mt-8 [&>h3]:mb-4
                  [&>h4]:text-lg [&>h4]:font-bold [&>h4]:text-gray-900 [&>h4]:mt-6 [&>h4]:mb-3
                  [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:mb-6
                  [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>ol]:mb-6
                  [&>table]:w-full [&>table]:border-collapse [&>table]:my-6 [&>table]:text-sm
                  [&_th]:bg-gray-50 [&_th]:border [&_th]:border-gray-200 [&_th]:p-3 [&_th]:font-semibold [&_th]:text-gray-900 [&_th]:text-left
                  [&_td]:border [&_td]:border-gray-200 [&_td]:p-3 [&_td]:text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* FAQ Accordion */}
              {post.faqs && post.faqs.length > 0 && (
                <FAQAccordion faqs={post.faqs} />
              )}

              {/* Share/Callout box */}
              <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-orange-50 border border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Have questions about this article?
                  </h4>
                  <p className="text-sm text-gray-500">
                    Reach out to our technical director for advice or custom quotations.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold text-sm rounded-full shadow-lg transition-colors whitespace-nowrap"
                >
                  Consult an Engineer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="py-14 bg-gray-50 border-t border-gray-100" aria-labelledby="related-articles-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 id="related-articles-heading" className="text-xl font-bold text-gray-900 mb-8">
              Other Technical Articles You May Like
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {otherPosts.map((p) => (
                <div
                  key={p.slug}
                  className="group bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-[10px] text-purple-600 font-semibold mb-3 uppercase">
                      <span>{p.category}</span>
                      <span>&bull;</span>
                      <span>{p.readTime}</span>
                    </div>
                    <h4 className="text-base font-bold text-gray-900 group-hover:text-gray-700 transition-colors mb-2 leading-snug">
                      <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
                      {p.summary}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="text-xs font-bold text-gray-900 group-hover:text-purple-600 transition-colors mt-2"
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
