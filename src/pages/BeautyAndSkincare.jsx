import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard"; // Use the hover-enabled ProductCard

const products = [
  { id: 1, name: "Moisturizer", price: "£12.99", image: "💧" },
  { id: 2, name: "Face Cream", price: "£14.99", image: "🌸" },
  { id: 3, name: "Lip Balm", price: "£5.99", image: "💄" },
  { id: 4, name: "Sunscreen", price: "£16.99", image: "☀️" },
  { id: 5, name: "Foundation", price: "£19.99", image: "💄" },
  { id: 6, name: "Eyeliner", price: "£8.99", image: "✏️" },
  { id: 7, name: "Shampoo", price: "£10.99", image: "🧴" },
  { id: 8, name: "Conditioner", price: "£12.99", image: "🧴" },
  { id: 9, name: "Body Lotion", price: "£15.99", image: "🧴" },
  { id: 10, name: "Facial Cleanser", price: "£13.99", image: "🧼" },
  { id: 11, name: "Toner", price: "£9.99", image: "💧" },
  { id: 12, name: "Serum", price: "£18.99", image: "💧" },
  { id: 13, name: "Hair Oil", price: "£11.99", image: "🛢️" },
  { id: 14, name: "Hand Cream", price: "£7.99", image: "🤲" },
  { id: 15, name: "Foot Cream", price: "£6.99", image: "🦶" },
  { id: 16, name: "Exfoliator", price: "£20.99", image: "🌿" },
  { id: 17, name: "Night Cream", price: "£25.99", image: "🌙" },
  { id: 18, name: "Eye Cream", price: "£22.99", image: "👁️" },
  { id: 19, name: "Makeup Remover", price: "£9.99", image: "🧽" },
  { id: 20, name: "Face Mask", price: "£16.99", image: "🎭" },
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
