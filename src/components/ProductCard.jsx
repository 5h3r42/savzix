const ProductCard = ({ product }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 text-center transform transition-all duration-300 
                 hover:scale-105 hover:shadow-2xl"
    >
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-40 h-40 object-contain mx-auto mb-4" // Increased from w-32 h-32 to w-40 h-40
      />

      {/* Product Title */}
      <h3 className="text-xl font-bold">{product.name}</h3>

      {/* Product Price */}
      <p className="text-pink-600 text-lg font-semibold">{product.price}</p>

      {/* Add to Cart Button */}
      <button className="mt-4 bg-pink-600 text-white py-2 px-4 rounded transition-all duration-300 hover:bg-pink-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
