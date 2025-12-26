import React from 'react'

export default function PageHeader({ title, subtitle, image }) {
    return (
      <div
        className="relative h-[20vh] md:h-[25vh] bg-center bg-cover flex items-center mb-10"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
  
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white ">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 text-center ">
            {title}
          </h1>
          <p className="text-lg text-white/90">
            {subtitle}
          </p>
        </div>
      </div>
    );
  }