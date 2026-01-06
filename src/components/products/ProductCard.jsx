import { useEffect } from "react";
import { Link } from "react-router-dom";

// src/components/shop/ProductCard.jsx
export default function ProductCard({ product }) {
  
  return (
    <Link to={`/products/${product.slug}`} className="group">
    <div className="group cursor-pointer group bg-white rounded-xl shadow-sm hover:shadow-lg transition">

      {/* Image */}
      <div className="overflow-hidden bg-gray-50">
        <img
          src={product.thumb}
          alt={product.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
              e.currentTarget.src = "/images/product-placeholder.webp";
            }}
        />
      </div>

      {/* Content */}
      <div className="mt-4 text-center">
        <h3 className="font-medium text-primary">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {product.category}
        </p>
      </div>
    </div>
    </Link>
  );
}