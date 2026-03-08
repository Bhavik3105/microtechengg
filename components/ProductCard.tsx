import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col">
      {/* Product Image */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-56 flex items-center justify-center overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 z-10">
          <span className="text-xs bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-full font-medium shadow-sm">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors leading-snug">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed flex-1 line-clamp-3 mb-4">
          {product.shortDescription}
        </p>

        <div className="mt-auto flex items-center justify-end pt-4 border-t border-gray-100">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:gap-3 transition-all"
            aria-label={`View details for ${product.name}`}
          >
            View Details
            <svg
              className="w-4 h-4"
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
    </article>
  );
}
