// src/pages/ProductDetails.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {getProducts, getProductsDetails } from "../api/productApi";
import Loading from "../components/common/Loading";



export default function ProductDetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchDetail = async () => {
    try {
      const productsRes = await getProducts();
      const products = productsRes.data.data || productsRes.data;

      console.log("Products:", products);

      const foundProduct = products.find(
          p => String(p.slug).toLowerCase() === String(slug).toLowerCase()
      );

      if (!foundProduct) {
         console.log("Slug not found:", slug);
        setProduct(null);
        return;
      }

      const detailRes = await getProductsDetails(foundProduct.id || foundProduct.product_id);
      const detail =
        detailRes.data.data?.[0] || detailRes.data;

      console.log("Product Detail:", detail);

      setProduct(detail);
    } catch (err) {
      console.error("Product Details API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchDetail();
}, [slug]);
  if(loading){
    return <Loading />;
  }
 
  if (!product) {
    return (
      <div className="text-center py-20">
        <p>Product not found</p>
       
      </div>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* Image */}
        <div className="bg-gray-50 p-6">
          <img
            src={`${product.slider}`}
            alt={product.title}
            className="w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-sm text-gray-500 mb-2">
            {product.category}
          </p>

          <h1 className="text-3xl font-semibold text-primary mb-6">
            {product.title}
          </h1>

          <p className="text-gray-700 leading-relaxed mb-8">
            {product.meta_description || "No description available for this product."}
          </p>
          {product.features?.length > 0 && (
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
          )}
          

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