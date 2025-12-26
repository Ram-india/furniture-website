import { NavLink } from "react-router-dom";
import { BannerCard } from "../common/BannerCard";

export default function FeaturedBanners() {
  const banners = [
    {
      id: 1,
      tag: "FURNOB FEATURED PRODUCTS",
      title: "Introducing the\nTotem Collection",
      image: "/src/assets/banner/banner-image-14.jpg",
      bg: "bg-[#dfe6e8]",
      link: "/collection/totem",
    },
    {
      id: 2,
      tag: "10% OFF ALL ITEMS",
      title: "Furnob Featured\nProducts",
      image: "/src/assets/banner/banner-image-15.jpg",
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