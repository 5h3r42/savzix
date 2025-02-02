import ProductCard from "../components/ProductCard"; // Import the reusable product card

// Importing images using ES6 imports
import BeardBalmImage from "../assets/images/products/category/BeautyAndSkincare/Wilkinson Sword Barber’s Beard Balm - 56g.png";
import Hydro5RazorImage from "../assets/images/products/category/BeautyAndSkincare/Wilkinson Sword Hydro 5 Razor + 12 Blades.png";
import HydroComfortImage from "../assets/images/products/category/BeautyAndSkincare/Wilkinson Sword Hydro Comfort for Men - 4 Razor Refills.png";

const products = [
  {
    id: 1,
    name: "Wilkinson Sword Beard Balm",
    price: "£9.99",
    image: BeardBalmImage,
  },
  {
    id: 2,
    name: "Wilkinson Sword Hydro 5 Razor",
    price: "£9.99",
    image: Hydro5RazorImage,
  },
  {
    id: 3,
    name: "Wilkinson Sword Hydro Comfort Refills",
    price: "£9.99",
    image: HydroComfortImage,
  },
  { id: 4, name: "Lipstick", price: "£12.99", image: "💄" },
  { id: 5, name: "Face Cream", price: "£14.99", image: "🌸" },
];

const ProductList = () => {
  return (
    <section className="py-10">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Featured Products
      </h2>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
