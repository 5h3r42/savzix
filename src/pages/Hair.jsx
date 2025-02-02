import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Shampoo", price: "£12.99", image: "🧴" },
  { id: 2, name: "Conditioner", price: "£14.99", image: "🧴" },
  { id: 3, name: "Hair Oil", price: "£11.99", image: "🛢️" },
  { id: 4, name: "Hair Mask", price: "£16.99", image: "🎭" },
  { id: 5, name: "Hair Spray", price: "£10.99", image: "💨" },
  { id: 6, name: "Leave-In Conditioner", price: "£13.99", image: "🌿" },
  { id: 7, name: "Hair Serum", price: "£15.99", image: "💧" },
  { id: 8, name: "Heat Protectant", price: "£19.99", image: "🔥" },
  { id: 9, name: "Hair Cream", price: "£8.99", image: "🍦" },
  { id: 10, name: "Dry Shampoo", price: "£9.99", image: "🌫️" },
  { id: 11, name: "Scalp Treatment", price: "£18.99", image: "🧪" },
  { id: 12, name: "Hair Growth Oil", price: "£22.99", image: "🌱" },
  { id: 13, name: "Hair Dye", price: "£25.99", image: "🎨" },
  { id: 14, name: "Hair Mousse", price: "£7.99", image: "🫧" },
  { id: 15, name: "Hair Balm", price: "£6.99", image: "💄" },
  { id: 16, name: "Hair Paste", price: "£20.99", image: "🧴" },
  { id: 17, name: "Hair Wax", price: "£12.99", image: "🕯️" },
  { id: 18, name: "Hair Brush", price: "£5.99", image: "💇" },
  { id: 19, name: "Curl Cream", price: "£16.99", image: "🔄" },
  { id: 20, name: "Anti-Frizz Serum", price: "£17.99", image: "✨" },
];

const Hair = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow-lg p-6 max-w-7xl mx-auto mt-6">
        <div className="grid grid-cols-1 text-center">
          <h1 className="text-4xl font-bold mb-2">Hair</h1>
          <p className="text-lg">Achieve strong and silky hair with our products.</p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="p-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Hair Care Products</h2>
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

export default Hair;