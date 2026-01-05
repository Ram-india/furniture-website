import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import TestimonialCard from "../common/TestimonialCard";

import user1 from "/images/users/user-1.webp";
import user2 from "/images/users/avatar-2.webp";
import user3 from "/images/users/avatar-3.webp";
import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function Testimonials() {
  // const testimonials = [
  //   {
  //     id: 1,
  //     name: "Teresa Holland",
  //     image: user1,
  //     rating: 5,
  //     text: "Vestibulum ut maximus magna. Duis neque risus, varius nec efficitur ut.",
  //   },
  //   {
  //     id: 2,
  //     name: "Daisy Lana",
  //     image: user2,
  //     rating: 5,
  //     text: "Vestibulum ut maximus magna. Duis neque risus, varius nec efficitur ut.",
  //   },
  //   {
  //     id: 3,
  //     name: "Allen Smith",
  //     image: user3,
  //     rating: 5,
  //     text: "Vestibulum ut maximus magna. Duis neque risus, varius nec efficitur ut.",
  //   },
  //   {
  //     id: 4,
  //     name: "John Carter",
  //     image: user2,
  //     rating: 4,
  //     text: "Vestibulum ut maximus magna. Duis neque risus, varius nec efficitur ut.",
  //   },
  // ];
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchReviews = async () =>{
      try{
        const res = await api.get('/getReviews');
        setReviews(res.data);
       ;
      }catch(err){
        console.error("Testimonials API Error:", err);
        
      }finally{
        setLoading(false);
      }
    };
    fetchReviews();  
  }, []);

  if(loading)return <p className="text-center py-20">Loading...</p>;
  if(!reviews.length)return <p className="text-center py-20">No testimonials found</p>;
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary">Our Lucky Customers</h2>
        <p className="text-theme mt-2 mb-14">
          Visit our shop to see amazing creations from our designers.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          watchOverflow={true}
          autoplay={{ 
             delay: 4000,
             disableOnInteraction: false,
           }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          style={{paddingBottom:"60px"}}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          className="pb-12"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id} className="overflow-hidden">
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
