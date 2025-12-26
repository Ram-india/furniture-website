import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialCard from "../common/TestimonialCard";

import user1 from "/images/users/user-1.webp";
import user2 from "/images/users/avatar-2.webp";
import user3 from "/images/users/avatar-3.webp";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Teresa Holland",
      image: user1,
      rating: 5,
      text: "Vestibulum ut maximus magna. Duis neque risus, varius nec efficitur ut.",
    },
    {
      id: 2,
      name: "Daisy Lana",
      image: user2,
      rating: 5,
      text: "Vestibulum ut maximus magna. Duis neque risus, varius nec efficitur ut.",
    },
    {
      id: 3,
      name: "Allen Smith",
      image: user3,
      rating: 5,
      text: "Vestibulum ut maximus magna. Duis neque risus, varius nec efficitur ut.",
    },
    {
      id: 4,
      name: "John Carter",
      image: user2,
      rating: 4,
      text: "Vestibulum ut maximus magna. Duis neque risus, varius nec efficitur ut.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary">Our Lucky Customers</h2>
        <p className="text-theme mt-2 mb-14">
          Visit our shop to see amazing creations from our designers.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="overflow-hidden">
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
