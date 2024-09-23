import React from "react";

const pricingPlans = [
  {
    title: "Basic",
    price: "$14.99",
    features: [
      "Free Setup",
      "Bandwidth Limit 10 GB",
      "20 User Connection",
      "Analytics Report",
      "Public API Access",
      "Plugins Integration",
      "Custom Content Management",
    ],
  },
  {
    title: "Standard",
    price: "$49.99",
    features: [
      "Free Setup",
      "Bandwidth Limit 10 GB",
      "20 User Connection",
      "Analytics Report",
      "Public API Access",
      "Plugins Integration",
      "Custom Content Management",
    ],
  },
  {
    title: "Premium",
    price: "$89.99",
    features: [
      "Free Setup",
      "Bandwidth Limit 10 GB",
      "20 User Connection",
      "Analytics Report",
      "Public API Access",
      "Plugins Integration",
      "Custom Content Management",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="ml-[240px] mt-[70px] p-6 border min-h-screen">
      <h1 className="text-[#202224] font-nunito-sans text-[32px] font-bold tracking-[-0.114px]">
        Pricing
      </h1>
      <div className="flex space-x-4">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="w-1/3 border rounded-[19px] p-4 space-y-5 text-center bg-white">
            <h1 className="text-[#202224] font-nunito-sans text-[22px] font-bold leading-normal">
              {plan.title}
            </h1>
            <p className="text-[#212121] font-nunito-sans text-[16px] font-normal leading-normal opacity-80">
              Monthly Charge
            </p>
            <h1 className="text-[#4880FF] font-nunito-sans text-[46px] font-extrabold leading-normal">
              {plan.price}
            </h1>
            <div className="border"></div>
            {plan.features.map((feature, featureIndex) => (
              <p key={featureIndex} className={`text-[#212121] text-center font-nunito-sans text-[18px] font-semibold leading-normal ${featureIndex >= 5 ? "opacity-40" : ""}`}>
                {feature}
              </p>
            ))}
            <div className="border"></div>
            <button className="w-[180px] h-[60px] flex-shrink-0 rounded-[30px] border-2 border-[#4880FF] bg-transparent text-[#4880FF] font-nunito-sans text-[16px] font-semibold">
              Get Started
            </button>
            <p className="text-[#212121] font-nunito-sans text-[16px] font-bold leading-normal underline">
              Start Your 30 Day Free Trial
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
