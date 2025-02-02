const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-4"
      />
      <div className="text-left">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="text-pink-600 text-lg font-semibold">{product.price}</p>
      </div>
      <button className="mt-4 bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
