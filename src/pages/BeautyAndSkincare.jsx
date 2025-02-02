import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard"; // Use the hover-enabled ProductCard

// Importing images using ES6 imports
import BeardBalmImage from "../assets/images/products/category/BeautyAndSkincare/Wilkinson Sword Barber’s Beard Balm - 56g.png";
import Hydro5RazorImage from "../assets/images/products/category/BeautyAndSkincare/Wilkinson Sword Hydro 5 Razor + 12 Blades.png";
import HydroComfortImage from "../assets/images/products/category/BeautyAndSkincare/Wilkinson Sword Hydro Comfort for Men - 4 Razor Refills.png";

const products = [
  {
    id: 1,
    name: "Wilkinson Sword Barber’s Beard Balm - 56g",
    price: "£9.99",
    image: BeardBalmImage,
  },
  {
    id: 2,
    name: "Wilkinson Sword Hydro 5 Razor + 12 Blades",
    price: "£9.99",
    image: Hydro5RazorImage,
  },
  {
    id: 3,
    name: "Wilkinson Sword Hydro Comfort for Men - 4 Razor Refills",
    price: "£9.99",
    image: HydroComfortImage,
  },
  { id: 4, name: "Lipstick", price: "£12.99", image: "💄" },
  { id: 5, name: "Face Cream", price: "£14.99", image: "🌸" },
  { id: 6, name: "Perfume", price: "£24.99", image: "🌺" },
  { id: 7, name: "Shampoo", price: "£8.99", image: "🧴" },
  { id: 8, name: "Eyeliner", price: "£5.49", image: "✏️" },
];

const BeautyAndSkincare = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow-lg p-6 max-w-7xl mx-auto mt-6">
        <div className="grid grid-cols-1 text-center">
          <h1 className="text-4xl font-bold mb-2">Beauty & Skincare</h1>
          <p className="text-lg">
            Nourish your skin with top products for a radiant glow.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="p-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Our Beauty & Skincare Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BeautyAndSkincare;
