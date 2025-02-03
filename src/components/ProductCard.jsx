const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-4"
      />

      {/* Left-aligned content with text control */}
      <div className="text-left">
        <h3 className="text-lg font-semibold truncate max-w-full">
          {product.name}
        </h3>
        <p className="text-pink-600 text-lg font-semibold">{product.price}</p>
        <button className="mt-2 bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-800 transition-transform duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
