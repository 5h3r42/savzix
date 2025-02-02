import React from "react";
import Image1 from "../assets/images/products/category/BeautyAndSkincare/Wilkinson Sword Barber’s Beard Balm - 56g.png";
import Image2 from "../assets/images/products/category/BeautyAndSkincare/Wilkinson Sword Hydro 5 Razor + 12 Blades.png";
import Image3 from "../assets/images/products/category/BeautyAndSkincare/Wilkinson Sword Hydro Comfort for Men - 4 Razor Refills.png";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg shadow-lg p-8 max-w-7xl mx-auto flex items-center gap-8">
      {/* Hero Text Section */}
      <div className="flex-1 text-white">
        <h1 className="text-5xl font-bold">Your Beauty, Your Style</h1>
        <p className="mt-4 text-lg">
          Discover the finest beauty products with exclusive offers.
        </p>
        <button className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700">
          Shop Now
        </button>
      </div>

      {/* Placeholder Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder 1 */}
        <div className="bg-gray-200 rounded-lg shadow-md h-[320px] w-[220px] flex items-center justify-center overflow-hidden">
          <img
            src={Image1}
            alt="Wilkinson Sword Beard Balm"
            className="h-auto w-auto max-h-[85%] max-w-[85%] object-contain"
          />
        </div>

        {/* Placeholder 2 */}
        <div className="bg-gray-200 rounded-lg shadow-md h-[320px] w-[220px] flex items-center justify-center overflow-hidden">
          <img
            src={Image2}
            alt="Wilkinson Sword Hydro 5 Razor"
            className="h-auto w-auto max-h-[85%] max-w-[85%] object-contain"
          />
        </div>

        {/* Placeholder 3 */}
        <div className="bg-gray-200 rounded-lg shadow-md h-[320px] w-[220px] flex items-center justify-center overflow-hidden">
          <img
            src={Image3}
            alt="Wilkinson Sword Hydro Comfort Refills"
            className="h-auto w-auto max-h-[85%] max-w-[85%] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
