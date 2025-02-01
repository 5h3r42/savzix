import { FaShippingFast, FaUndo, FaHeadset } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Feature 1 */}
      <div className="flex items-center space-x-4">
        <FaShippingFast className="text-pink-500 w-10 h-10" />
        <div>
          <h3 className="text-xl font-bold">Free Shipping</h3>
          <p className="text-gray-600">On all orders over £50.</p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex items-center space-x-4">
        <FaUndo className="text-pink-500 w-10 h-10" />
        <div>
          <h3 className="text-xl font-bold">30-Day Returns</h3>
          <p className="text-gray-600">Hassle-free returns policy.</p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex items-center space-x-4">
        <FaHeadset className="text-pink-500 w-10 h-10" />
        <div>
          <h3 className="text-xl font-bold">24/7 Support</h3>
          <p className="text-gray-600">We’re always here to help you.</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
