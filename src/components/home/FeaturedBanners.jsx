import { NavLink } from "react-router-dom";
import { BannerCard } from "../common/BannerCard";

import banner14 from "/images/banner/banner-image-14.jpg";
import banner15 from "/images/banner/banner-image-15.jpg";

export default function FeaturedBanners() {
  const banners = [
    {
      id: 1,
      tag: "FURNOB FEATURED PRODUCTS",
      title: "Introducing the\nTotem Collection",
      image: banner14,
      bg: "bg-[#dfe6e8]",
      link: "/collection/totem",
    },
    {
      id: 2,
      tag: "10% OFF ALL ITEMS",
      title: "Furnob Featured\nProducts",
      image: banner15,
      bg: "bg-[#f4eee9]",
      link: "/featured",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid gap-6 md:grid-cols-2">
        {banners.map((item) => (
          <BannerCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
