import React, { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import aboutData from "../data/aboutData";
import TOC from "../components/common/TOC";
import FounderSection from "../components/about/FounderSection";
import { motion } from "framer-motion";

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState(1);

  return (
    <section className="bg-white">
      <PageHeader
        title="About Us"
        subtitle="Crafting comfort and style for modern living"
      />

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* TOC */}
        <TOC
          items={aboutData}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* Content */}
        <div className="lg:col-span-3 space-y-16">
          {aboutData
            .filter((section) =>
              activeSection ? section.id === activeSection : true
            )
            .map((section, idx) => {
              const isEven = idx % 2 === 0;
              const bgClass = isEven ? "bg-gray-50" : "bg-white";

              return (
                <motion.section
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 p-8 rounded-xl shadow-lg ${bgClass}`}
                >
                  {/* Founder Section Special */}
                  {section.slug === "founder-profile" ? (
                    <FounderSection data={section} />
                  ) : (
                    <>
                      {section.image && (
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full lg:w-1/3 rounded-lg shadow-lg object-cover"
                        />
                      )}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                          {section.icon}
                          <h2 className="text-3xl font-semibold text-primary">
                            {section.title}
                          </h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {section.content}
                        </p>
                      </div>
                    </>
                  )}
                </motion.section>
              );
            })}
        </div>
      </div>
    </section>
  );
}