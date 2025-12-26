import React from 'react'

function TestimonialCard({ item }) {
    return (
      <div className="relative bg-white rounded-lg shadow-md p-8 pt-20 text-center h-full">
        
        {/* Avatar */}
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-full mx-auto absolute top-0 left-1/2 -translate-x-1/2 border-4 border-white bg-white"
        />
  
        {/* Name */}
        <h3 className="font-semibold text-primary">
          {item.name}
        </h3>
  
        {/* Rating */}
        <div className="flex justify-center my-2">
          {[...Array(item.rating)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-sm">★</span>
          ))}
        </div>
  
        {/* Review */}
        <p className="text-theme text-sm leading-relaxed">
          {item.text}
        </p>
      </div>
    );
  }
export default TestimonialCard