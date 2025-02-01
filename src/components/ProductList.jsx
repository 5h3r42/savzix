

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
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 flex flex-col">
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
