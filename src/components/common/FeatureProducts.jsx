import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/getHomePageProducts")
      .then((res) => {
        console.log("Products API:", res.data);
        setProducts(res.data);
      })
      .catch((err) =>
        console.error("Featured Products API Error:", err)
      );
  }, []);

  if (!products.length) {
    return (
      <section className="py-16 text-center">
        <p>Loading products...</p>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.product_id}
              className="border rounded-xl p-4 hover:shadow-lg transition"
            >
              <img
                src={product.imageURL}
                alt={product.title}
                className="h-48 w-full object-cover rounded-lg"
              />

              <h3 className="mt-4 font-semibold">
                {product.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}