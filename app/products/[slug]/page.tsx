import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug, getAllProductSlugs } from "@/lib/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `https://www.microtechengg.in/products/${product.slug}`,
    },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `https://www.microtechengg.in/products/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const otherProducts = products.filter((p) => p.slug !== slug).slice(0, 3);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: "Microtech Engineering" },
    manufacturer: {
      "@type": "Organization",
      name: "Microtech Engineering",
      url: "https://www.microtechengg.in",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <section className="bg-gradient-to-br from-purple-200 via-blue-100 to-orange-200 text-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-purple-600 flex-wrap">
              <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/products" className="hover:text-gray-900 transition-colors">Products</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">{product.name}</li>
            </ol>
          </nav>
          <span className="inline-block text-xs bg-white text-gray-700 px-3 py-1 rounded-full font-medium mb-3">
            {product.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">{product.shortDescription}</p>
        </div>
      </section>
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Image */}
          <div className="mb-12">
            <div className="relative w-full aspect-video lg:h-[800px] lg:aspect-auto rounded-2xl overflow-hidden shadow-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Product Overview</h2>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Key Features &amp; Specifications</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Applications</h2>
                <div className="flex flex-wrap gap-3">
                  {product.applications.map((app) => (
                    <span key={app} className="px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 shadow-sm">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-purple-100 to-orange-100 text-gray-900 rounded-2xl p-6 sticky top-24 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Interested in This Product?</h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  Get pricing, custom specifications, and technical details from our engineering team.
                </p>
                <Link href="/contact" className="block w-full text-center py-3 px-5 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl mb-3">
                  Send Inquiry
                </Link>
                <div className="mt-6 pt-5 border-t border-gray-200 space-y-3">
                  {["Custom Specifications", "cGMP / GMP Compliant", "PAN India Delivery"].map((point) => (
                    <div key={point} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {otherProducts.length > 0 && (
        <section className="py-14 bg-gray-50" aria-labelledby="related-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="related-heading" className="text-xl font-bold text-gray-900 mb-8">Other Products You May Be Interested In</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherProducts.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="group bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:border-gray-300 transition-all">
                  <div className="text-xs text-gray-600 font-medium mb-2">{p.category}</div>
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-gray-700 transition-colors mb-2 leading-snug">{p.name}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{p.shortDescription}</p>
                  <div className="mt-3 text-xs font-semibold text-gray-900">View Details &rarr;</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}