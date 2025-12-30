import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function HomeAbout() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid gap-14 md:grid-cols-2 items-center">

        {/* LEFT – FOUNDER IMAGE */}
        <div className="relative">
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with your founder image
            alt="Founder"
            className="relative z-10 w-full max-w-md rounded-2xl shadow-xl"
          />

          {/* Decorative background */}
          <div className="absolute -bottom-6 -left-6 w-full h-full bg-themeSecondary rounded-2xl opacity-20"></div>
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          <span className="inline-block mb-3 text-sm font-medium text-secondary tracking-wide">
            ABOUT OUR STORY
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
            Built with passion, <br /> designed for comfort
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Founded with a vision to bring quality craftsmanship into every
            home, our brand blends traditional expertise with modern design.
            We believe furniture should be beautiful, functional, and built
            to last.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            From carefully sourced materials to strict quality checks, every
            product reflects our commitment to excellence and customer
            satisfaction.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-primary">10+</h3>
              <p className="text-gray-600 text-sm">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">5,000+</h3>
              <p className="text-gray-600 text-sm">Happy Customers</p>
            </div>
          </div>

          {/* CTA */}
          <NavLink
            to="/about"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-themeSecondary text-gray-800 font-medium rounded-full hover:bg-themeSecondaryDark transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Read our full story
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </NavLink>
        </div>

      </div>
    </section>
  );
}