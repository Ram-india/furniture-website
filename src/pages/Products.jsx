import React, { useState } from 'react'
import CategoryFilter from '../components/products/CategoryFilter';
import { categories } from '../data/categoriesData';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/productsData';
import PageHeader from '../components/common/PageHeader';

const Products = () => {
    const [activeCategory, SetActiveCategory] = useState('All');

   const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );
  return (
    <section className='bg-gray-50'>
         {/* HERO */}
              <PageHeader
                title="Product"
                subtitle="Browse our exclusive range of furniture designed to elevate your living spaces. From modern to classic styles, find the perfect pieces that blend comfort and aesthetics. Explore now and transform your home with our curated collections."
              />
              
        <div className='max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-4 gap-8'>
            {/* Categories Sidebar */}
            <CategoryFilter
            categories={categories}
            active={activeCategory}
            onChange={SetActiveCategory} />
            {/* Products Grid */}
            <div className='lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                
                {filteredProducts.map((product) => (
                    <ProductCard
                     key={product.id}
                     product={product}
                      />
                ))}
            </div>

        </div>
    </section>
  )
}

export default Products