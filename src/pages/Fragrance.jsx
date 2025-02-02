import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Perfume", price: "£49.99", image: "🌺" },
  { id: 2, name: "Cologne", price: "£39.99", image: "🌼" },
  { id: 3, name: "Scented Oil", price: "£25.99", image: "🌸" },
  { id: 4, name: "Body Spray", price: "£15.99", image: "💧" },
  { id: 5, name: "Aromatherapy Oil", price: "£19.99", image: "🪔" },
  { id: 6, name: "Luxury Perfume", price: "£79.99", image: "👑" },
  { id: 7, name: "Travel Spray", price: "£12.99", image: "✈️" },
  { id: 8, name: "Deodorant", price: "£8.99", image: "🧴" },
  { id: 9, name: "Fragrance Mist", price: "£13.99", image: "💧" },
  { id: 10, name: "Solid Perfume", price: "£14.99", image: "🌸" },
  { id: 11, name: "Perfume Sample", price: "£5.99", image: "📦" },
  { id: 12, name: "Aftershave", price: "£29.99", image: "🪒" },
  { id: 13, name: "Citrus Spray", price: "£24.99", image: "🍋" },
  { id: 14, name: "Vanilla Mist", price: "£22.99", image: "🍦" },
  { id: 15, name: "Woody Perfume", price: "£35.99", image: "🌲" },
  { id: 16, name: "Floral Perfume", price: "£27.99", image: "🌺" },
  { id: 17, name: "Rose Spray", price: "£18.99", image: "🌹" },
  { id: 18, name: "Musk Cologne", price: "£31.99", image: "🐂" },
  { id: 19, name: "Cedarwood Oil", price: "£26.99", image: "🌳" },
  { id: 20, name: "Amber Perfume", price: "£33.99", image: "🧡" },
];

const Fragrance = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow-lg p-6 max-w-7xl mx-auto mt-6">
        <div className="grid grid-cols-1 text-center">
          <h1 className="text-4xl font-bold mb-2">Fragrance</h1>
          <p className="text-lg">Delightful scents to uplift your mood.</p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="p-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Fragrance Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fragrance;
