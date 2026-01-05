import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";

export default function BlogDetail() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log("Slug:", slug);
    Promise.all([
      api.get(`/getBlogDetails/${slug}`),
      api.get(`/getBlogs`)
    ])
      .then(([blogRes, recentRes]) => {
        setBlog(blogRes.data);
        setRecentBlogs(recentRes.data || []);
      })
      .catch((err) => {
        console.error("Blog API Error:", err);
        setBlog(null);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (!blog) return <p className="text-center py-20">Blog not found</p>;

  return (
    <section>
      {/* HERO */}
      <div className="relative h-[350px]">
        <img
          src={`/images/${blog.image}`}
          alt={blog.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <p className="text-sm mb-2">Home / Blog</p>
            <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {/* META */}
          <div className="flex gap-4 text-sm text-theme mb-6">
            <span>By Admin</span>
            <span>•</span>
            <span>{blog.created_on}</span>
          </div>

          <img
            src={`/images/${blog.image}`}
            alt={blog.title}
            className="rounded-2xl mb-10 w-full"
          />

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </div>

        {/* SIDEBAR */}
        <aside>
          <h4 className="font-semibold text-primary mb-4">Recent Blogs</h4>
          <ul className="space-y-3 text-theme text-sm">
            {recentBlogs.map((b) => (
              <li key={b.blog_id} className="hover:text-primary">
                {b.title}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}