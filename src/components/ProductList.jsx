import React from "react";

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
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Products</h2>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:scale-105 p-4 flex flex-col"
          >
            <div className="text-6xl mb-4 text-center">{product.image}</div>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-pink-600 font-bold">{product.price}</p>
            <button className="mt-auto bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;