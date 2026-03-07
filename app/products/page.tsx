"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const categories = [
  "All",
  "Pharmaceutical Equipment",
  "Storage & Containment",
  "Blending Equipment",
  "Drying Equipment",
  "Size Reduction Equipment",
  "Screening Equipment",
  "Filtration Equipment",
  "Material Handling",
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-purple-200 via-blue-100 to-orange-200 text-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-purple-600">
              <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
              <li aria-hidden="true"><span>/</span></li>
              <li className="text-gray-900 font-medium" aria-current="page">Products</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
            Comprehensive range of industrial and pharmaceutical machinery,
            manufactured to the highest quality standards.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white" aria-labelledby="products-list-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="products-list-heading" className="sr-only">All Products</h2>

          {/* Category filter buttons */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full shadow-sm transition-all ${
                  selectedCategory === cat
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Machine?
          </h2>
          <p className="text-gray-500 mb-6">
            We engineer custom solutions based on your process requirements, capacities,
            and compliance needs. Contact us for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
          >
            Request Custom Quote
          </Link>
        </div>
      </section>
    </>
  );
}
