import React from 'react'

import PageHeader from '../components/common/PageHeader';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogData';


const Blogs = () => {
  return (
    <>
     {/* HERO */}
     <PageHeader
      title="Blog"
      subtitle="Crafting comfort and style for modern living"
      />
      <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-primary mb-10">Our Blog</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <Link
            to={`/blog/${blog.slug}`}
            key={blog.id}
            className="group"
          >
            <img
              src={blog.image}
              className="rounded-xl mb-4 group-hover:scale-105 transition"
            />
            <h3 className="font-semibold text-primary">
              {blog.title}
            </h3>
            <p className="text-sm text-theme mt-2">
              {blog.date}
            </p>
          </Link>
        ))}
      </div>
    </section>
    </>
  )
}

export default Blogs