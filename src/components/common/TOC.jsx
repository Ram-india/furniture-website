// src/components/common/TOC.jsx
import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function TOC({ items, activeSection, setActiveSection }) {
  return (
    <aside className="sticky top-20 hidden lg:block border border-gray-200 rounded-xl p-5 bg-white shadow-md">
      <h4 className="font-semibold text-primary mb-4">About Us</h4>
      <ul className="space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() =>
                setActiveSection(activeSection === item.id ? null : item.id)
              }
              className={`flex items-center justify-between w-full p-2 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-secondary text-white font-medium shadow"
                  : "text-gray-600 hover:bg-gray-100 hover:text-primary"
              }`}
            >
              <div className="flex items-center gap-2">
                {item.icon}
                {item.title}
              </div>
              {activeSection === item.id && (
                <FiArrowRight className="text-white text-xl" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}