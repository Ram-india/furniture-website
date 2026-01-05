import React, { useEffect, useState } from 'react'

import PageHeader from '../components/common/PageHeader';
import { Link } from 'react-router-dom';

import api from '../api/axios';


const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    api.get('/getBlogs')
      .then(res => setBlogData(res.data))
      .catch(err => console.error("Blog API Error:", err));
  }, []);

  

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
        {blogData.map(blog => (
          <Link
            to={`/blog/${blog.slug}`}
            key={blog.blog_id}
            className="group"
          >
            <img
              src={blog.hdImage}
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