import { FiTruck, FiUsers, FiAward, FiHeart,FiTarget, FiEye } from "react-icons/fi";
import PageHeader from "../components/common/PageHeader";
import ceoImage from "/images/about/ceo.jpg";

export default function About() {
  return (
    <section className="bg-white">
      {/* HERO */}
      <PageHeader
      title="About Us"
      subtitle="Crafting comfort and style for modern living"
   
      />

      {/* STORY */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Our Story
          </h2>
          <p className="text-theme mb-4 text-xl leading-relaxed mb-5">
          Founded with a passion for design and quality, our brand started as a small workshop driven by skilled artisans and a deep respect for materials. From the beginning, our focus has been on creating furniture that balances beauty, comfort, and durability.
          </p>
          <p className="text-theme text-xl leading-relaxed mb-5">
          Every piece we design goes through a thoughtful process — from selecting premium raw materials to carefully crafting each detail. We believe that good design should not only look beautiful but also stand the test of time.
          </p>
          <p className="text-theme text-xl leading-relaxed mb-5">
          Over the years, we have grown alongside our customers, learning from their needs and lifestyles. This growth has allowed us to expand our collections while staying true to our core values of quality, honesty, and innovation.
          </p>
          <p className="text-theme text-xl leading-relaxed mb-5">
          Today, our furniture finds its place in homes, offices, and spaces where life happens every day. What started as a small vision has become a commitment to delivering exceptional design experiences that enhance modern living.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden">
          <img
            src={ceoImage}
            alt="About us"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      


      

      <section className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
    
    <div className="bg-white p-8 rounded-2xl shadow">
      <h3 className="text-2xl font-semibold text-primary mb-4">
        Our Mission
      </h3>
      <p className="text-theme leading-relaxed">
        To design and deliver high-quality furniture that blends comfort,
        durability, and modern aesthetics—enhancing everyday living through
        thoughtful craftsmanship.
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow">
      <h3 className="text-2xl font-semibold text-primary mb-4">
        Our Vision
      </h3>
      <p className="text-theme leading-relaxed">
        To become a trusted global brand known for sustainable design,
        innovation, and timeless furniture that transforms spaces into
        meaningful experiences.
      </p>
    </div>

  </div>
</section>

<section className="py-20 bg-primary text-white">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    
    {[
      ["10+", "Years Experience"],
      ["5k+", "Happy Customers"],
      ["200+", "Unique Designs"],
      ["50+", "Expert Craftsmen"],
    ].map(([count, label]) => (
      <div key={label}>
        <h3 className="text-4xl font-bold">{count}</h3>
        <p className="opacity-90 mt-2">{label}</p>
      </div>
    ))}

  </div>
</section>
<section className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-primary mb-12">
      Why Choose Us
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[
        ["Premium Quality", "Finest materials & craftsmanship"],
        ["Modern Design", "Timeless and trendy collections"],
        ["Eco Friendly", "Responsible sourcing & sustainability"],
        ["Customer Trust", "Thousands of satisfied customers"],
      ].map(([title, desc]) => (
        <div key={title} className="bg-white p-6 rounded-xl shadow">
          <h4 className="font-semibold text-primary mb-2">
            {title}
          </h4>
          <p className="text-theme text-sm">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FEATURES */}
      <div className="bg-theme/5 py-20">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-4 text-center">
          <Feature
            icon={<FiTruck />}
            title="Fast Delivery"
            desc="Reliable and timely delivery across regions."
          />
          <Feature
            icon={<FiAward />}
            title="Premium Quality"
            desc="Crafted with high-quality materials."
          />
          <Feature
            icon={<FiUsers />}
            title="Expert Team"
            desc="Designed by skilled professionals."
          />
          <Feature
            icon={<FiHeart />}
            title="Customer First"
            desc="Your satisfaction is our priority."
          />
        </div>
      </div>

      

      
    </section>
  );
}

/* ---------- Components ---------- */

function Feature({ icon, title, desc }) {
  return (
    <div>
      <div className="text-4xl text-primary mx-auto mb-4 flex justify-center">
        {icon}
      </div>
      <h4 className="font-semibold text-primary mb-2">{title}</h4>
      <p className="text-theme text-sm">{desc}</p>
    </div>
  );
}

function TeamCard({ name, role, img }) {
  return (
    <div className="text-center">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="font-semibold text-primary">{name}</h4>
      <p className="text-theme text-sm">{role}</p>
    </div>
  );
}