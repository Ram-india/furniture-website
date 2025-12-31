import React from "react";
import hero from"/images/hero/hero.png";

const Hero = () => {
  return (
    <section className="cream-bg h-screen flex items-center py-5 px-10 mb-5 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2  gap-10">
        <div>
          <p className="text-secondary font-semibold mb-3">
            Only The Best Furniture
          </p>
          <h1 className="third-color text-5xl font-bold leading-tight">
            Discover Your Dream Furniture Today
          </h1>
          <p className="text-theme mt-6 max-w-md">
            Explore our exquisite collection of furniture that combines style,
            comfort, and quality. Transform your living space with pieces that
            reflect your unique taste and elevate your home decor.
          </p>
          <button
            className="
        mt-8 px-6 py-3 border border-primary
        text-primary font-medium
        hover:bg-primary hover:text-white
        transition
      "
          >
            Shop Collection →
          </button>
        </div>
        <div>
            <img src={hero} className="w-full h-[420px] object-cover rounded-2xl" loading="lazy"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
