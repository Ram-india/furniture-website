import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import api from "../../api/axios";

const limitHtmlText = (html, limit = 280) => {
  if (!html) return "";
  const text = html.replace(/<[^>]*>/g, "");
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};

export default function HomeAbout({ title }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    api
      .post("/getPageDetails", { title })
      .then((res) => setData(res.data))
      .catch((err) => console.error("Page Details API Error:", err));
  }, [title]);

  if (!data) {
    return <p className="text-center py-10">Loading...</p>;
  }

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid gap-14 md:grid-cols-2 items-center">
        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
            alt={data.title}
          />
          <div className="absolute -bottom-6 -left-6 w-full h-full bg-themeSecondary rounded-2xl opacity-20"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <span className="inline-block mb-3 text-sm font-medium text-secondary tracking-wide">
            ABOUT OUR STORY
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {data.title}
          </h2>

          {/* LIMITED DESCRIPTION */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {limitHtmlText(data.description, 300)}
          </p>

          {/* STATS (optional static) */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-primary">10+</h3>
              <p className="text-gray-600 text-sm">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">5,000+</h3>
              <p className="text-gray-600 text-sm">Happy Customers</p>
            </div>
          </div>

          {/* CTA */}
          <NavLink
            to="/about"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-themeSecondary text-gray-800 font-medium rounded-full hover:bg-themeSecondaryDark transition"
          >
            Read our full story
            <FiArrowRight className="group-hover:translate-x-1 transition" />
          </NavLink>
        </div>
      </div>
    </section>
  );
}
