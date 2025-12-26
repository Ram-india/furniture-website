import { FiTruck, FiPhoneCall, FiCreditCard } from "react-icons/fi";
import FeatureBox from "../common/FeatureBox";


function Features() {
  return (
    <section className="max-w-7xl  mx-auto">
      <div className=" px-6 py-20 border-t border-theme flex justify-between items-center md:grid-cols-3">
        <FeatureBox
          icon={<FiTruck />}
          title="Free Shipping Orders"
          desc="A delivery service you can depend on"
        />

        <FeatureBox
          icon={<FiPhoneCall />}
          title="Customer Support"
          desc="Satisfied customers are our best ads"
        />

        <FeatureBox
          icon={<FiCreditCard />}
          title="100% Secure Payments"
          desc="The highest level of security"
        />
      </div>
    </section>
  );
}

export default Features;