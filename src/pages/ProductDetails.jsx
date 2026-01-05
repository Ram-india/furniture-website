// src/pages/ProductDetails.jsx
import { useParams, Link } from "react-router-dom";
import { products } from "../data/productsData";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-20">
        <p>Blog not found</p>
        <Link to="/products" className="underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* Image */}
        <div className="bg-gray-50 p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-sm text-gray-500 mb-2">
            {product.category}
          </p>

          <h1 className="text-3xl font-semibold text-primary mb-6">
            {product.name}
          </h1>

          <p className="text-gray-700 leading-relaxed mb-8">
            {product.description}
          </p>

          <div>
            <h4 className="font-semibold mb-3">
              Product Highlights
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <Link
            to="/products"
            className="inline-block mt-10 px-6 py-2 border border-primary rounded-full hover-secondary transition"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </section>
  );
}