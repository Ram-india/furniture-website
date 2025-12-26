import { useParams } from "react-router-dom";
import { blogs } from '../data/blogData';

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return <p className="text-center py-20">Blog not found</p>;
  }

  return (
    <section>

      {/* HERO */}
      <div className="relative h-[350px]">
        <img
          src={blog.banner}
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
          <div className="flex gap-4 text-sm text-theme mb-6">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>{blog.date}</span>
          </div>

          <img
            src={blog.image}
            className="rounded-2xl mb-10"
          />

          <div className="space-y-6 text-theme leading-7">
            {blog.content.map((item, index) => {
              if (item.type === "heading")
                return (
                  <h3 key={index} className="text-xl font-semibold text-primary">
                    {item.text}
                  </h3>
                );

              if (item.type === "quote")
                return (
                  <blockquote
                    key={index}
                    className="border-l-4 border-primary pl-6 italic text-primary bg-gray-50 py-4 rounded"
                  >
                    {item.text}
                  </blockquote>
                );

              return <p key={index}>{item.text}</p>;
            })}
          </div>

          {/* TAGS */}
          <div className="mt-12 flex gap-2 flex-wrap">
            {blog.tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-1 text-sm border rounded-full hover:bg-primary hover:text-white cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <aside>
          <h4 className="font-semibold text-primary mb-4">
            Recent Blogs
          </h4>
          <ul className="space-y-3 text-theme text-sm">
            {blogs.map(b => (
              <li key={b.id} className="hover:text-primary">
                {b.title}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}