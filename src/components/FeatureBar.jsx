import React from "react";

const features = [
  { icon: "🚚", text: "Free Shipping" },
  { icon: "↩️", text: "30-Day Return" },
  { icon: "📦", text: "Wide Range of Products" },
  { icon: "📞", text: "Customer Support" },
];

const FeatureBar = () => {
  return (
    <div className="bg-white py-6 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="text-3xl">{feature.icon}</div>
            <p className="font-medium text-gray-700">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBar;
