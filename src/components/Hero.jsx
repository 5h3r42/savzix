const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow-lg p-10 max-w-7xl mx-auto mt-6 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Text Section */}
        <div>
          <h1 className="text-5xl font-bold mb-4">Your Beauty, Your Style</h1>
          <p className="text-xl mb-6">
            Discover the finest beauty products with exclusive offers.
          </p>
          <button className="bg-white text-pink-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>

        {/* Right Side: Image Section */}
        <div className="flex space-x-8 justify-center">
          {/* Placeholder images */}
          <div className="bg-gray-300 rounded-lg shadow-lg w-44 h-60 transform rotate-3" />
          <div className="bg-gray-300 rounded-lg shadow-lg w-44 h-60 transform -rotate-3" />
          <div className="bg-gray-300 rounded-lg shadow-lg w-44 h-60 transform rotate-1" />
        </div>
      </div>

      {/* Slight overflow effect for the placeholder images */}
      <div className="absolute top-0 left-0 right-0 bottom-0 rounded-lg pointer-events-none shadow-inner"></div>
    </div>
  );
};

export default Hero;
