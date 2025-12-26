import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/common/PageHeader";
import Lightbox from "../components/common/LightBox";
import galleryData from "../data/galleryData";


const categories = ["All", "Living", "Bedroom", "Dining"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filtered =
    active === "All"
      ? galleryData
      : galleryData.filter(item => item.category === active);

  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Explore our creative furniture collections"
        image="/src/assets/banner/page-header.jpg"
      />

      {/* FILTER */}
      <div className="flex justify-center gap-4 py-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full border transition
              ${
                active === cat
                  ? "bg-primary text-white"
                  : "border-theme text-theme hover:bg-theme/10"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GALLERY */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {filtered.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end">
                <div className="p-5">
                  <h3 className="text-white font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {item.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      <Lightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}