import {
  FiTruck,
  FiPhoneCall,
  FiCreditCard,
  FiArrowRight,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Features from "../home/Features";

export default function Footer() {
  // footerlinks
  const links = [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms" },
  ];

  return (
    <footer className="bg-white border-t border-theme ">
      {/* FEATURES */}
     <Features/>

      {/*  NEWSLETTER */}
      <div className="bg-theme cream-bg">
        <div className="max-w-7xl mx-auto px-6 py-20 grid gap-10 md:grid-cols-2 border-b border-theme">
          <div>
            <p className="text-secondary font-medium mb-3">
              Join our newsletter
            </p>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Get our emails for info on new items, sales and more.
            </h2>
          </div>

          <div>
            <div className="flex items-center border-b border-primary pb-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent outline-none text-primary"
              />
              <FiArrowRight className="text-primary text-xl" />
            </div>
            <p className="text-sm text-theme mt-3">
              By subscribing you agree to our{" "}
              <span className="inline-flex [&>a]:after:content-['&'] [&>a]:after:mx-2 [&>a:last-child]:after:content-none">
  {links.map((link, index) => (
    <NavLink
      key={index}
      to={link.path}
      className="text-primary hover-primary transition-colors"
    >
      {link.label}
    </NavLink>
  ))}
</span>
            </p>
          </div>
        </div>
      </div>

      {/*  APP & HOURS */}
      <div className=""></div>

      {/*  FOOTER LINKS */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4 text-sm">
        <div>
          <h4 className="font-semibold text-primary mb-4">Contact</h4>
          <p>Furniture Shop</p>
          <p>Ramanatha puram</p>
          <p className="mt-3">info@example.com</p>
          <p>+91 987654321</p>
        </div>

        <FooterCol
          title="Resources"
          items={[
            "Customer Service",
            "Gift Cards",
            "Product Recalls",
            "Accessibility Statement",
            "Cookie Settings",
          ]}
        />

        <FooterCol
          title="Be Inspired"
          items={[
            "Furnob Magazine",
            "LookBook Collections",
            "Brand News",
            "Browse by Designers",
          ]}
        />

        <FooterCol
          title="Our Company"
          items={[
            "About Us",
            "Gallary",
            "Social Responsibility",
            "Store Locations",
          ]}
        />
      </div>

      {/*  COPYRIGHT */}

      <div className="border-t border-theme py-6 text-center text-sm grid grid-cols-3">
        <div>
          <p>Logo</p>
        </div>
        <div>
          <p>
            Developed by <a href="#">Cute Websolutions</a>
          </p>
        </div>
        <div>
          <div className="flex items-center ">
          {links.map((link, index) => (
  <NavLink
    key={index}
    to={link.path}
    className="text-primary hover:text-secondary transition-colors"
  >
    {link.label}
    {index !== links.length - 1 && (
      <span className="mx-3 text-gray-400">|</span>
    )}
  </NavLink>
))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div>
      <div className="text-3xl text-primary mx-auto mb-4">{icon}</div>
      <h3 className="font-semibold text-primary">{title}</h3>
      <p className="text-theme text-sm mt-1">{desc}</p>
    </div>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="font-semibold text-primary mb-4">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="hover:text-secondary cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
