import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Lipstick", price: "$12.99", image: "💄" },
  { id: 2, name: "Face Cream", price: "$24.99", image: "🌸" },
  { id: 3, name: "Perfume", price: "$49.99", image: "🌺" },
  { id: 4, name: "Shampoo", price: "$14.99", image: "🧴" },
  { id: 5, name: "Eyeliner", price: "$9.99", image: "✏️" },
  { id: 6, name: "Foundation", price: "$29.99", image: "💧" },
  { id: 7, name: "Body Lotion", price: "$19.99", image: "🧴" },
  { id: 8, name: "Hair Oil", price: "$11.99", image: "🛢️" },
];

const ProductList = () => {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Featured Products
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
