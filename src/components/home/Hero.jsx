import React, { useEffect, useState } from "react";
import api from "../../api/axios"

const Hero = () => {
  const [hero, setHero] = useState(null);
  useEffect(()=>{
    api.get("/getHomePageSlider")
      .then((res) =>  setHero(res.data))
      .catch((err) => console.error(err));
  },[]);
   if (!hero) return null;
  return (
    
    <section className="cream-bg h-screen flex items-center py-5 px-10 mb-5 ">
    
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2  gap-10">
        <div>
          <p className="text-secondary font-semibold mb-3">
            Only The Best Furniture
          </p>
          <h1 className="third-color text-5xl font-bold leading-tight">
           {hero?.title }
          </h1>
          <p className="text-theme mt-6 max-w-md">
             {hero?.content}
          </p>
          <button
            className="
        mt-8 px-6 py-3 border border-primary
        text-primary font-medium
        hover:bg-primary hover:text-white
        transition
      "
          >
            Veiw →
          </button>
        </div>
        <div className="  h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px]">
          <img
            src={IMAGE_BASE + hero.image}
            alt={hero?.title}
            className="w-full  object-cover rounded-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
