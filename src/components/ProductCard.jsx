const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center transform transition-shadow duration-300 hover:shadow-lg flex flex-col justify-between">
      <div>
        <div className="text-6xl mb-4">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain"
            />
          ) : (
            product.image
          )}
        </div>
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-pink-600 text-lg font-semibold">{product.price}</p>
      </div>
      <button className="mt-4 bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
