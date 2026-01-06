import React, { useEffect, useState } from "react";
import CategoryFilter from "../components/products/CategoryFilter";
import ProductCard from "../components/products/ProductCard";
import PageHeader from "../components/common/PageHeader";
import { getProductCategories, getProducts } from "../api/productApi";
import Loading from "../components/common/Loading";

const Products = () => {
  const [activeCategory, SetActiveCategory] = useState("All");
  const [categories, setCategories] = useState(["All"]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          getProducts(),
          getProductCategories(),
        ]);
        setProducts(productsRes.data);

        // convert  categories to array of strings
        const catList = [
          "All",
          ...categoriesRes.data.map((cat) => cat.category),
        ];

        setCategories(catList);

      } catch (err) {
        console.error("Products API Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  if (loading) {
    return <Loading/>
  }

  return (
    <section className="bg-gray-50">
      {/* HERO */}
      <PageHeader
        title="Product"
        subtitle="Browse our exclusive range of furniture."
      />

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={SetActiveCategory}
        />
        {/* Products Grid */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={`${product.product_id}-${product.slug}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
