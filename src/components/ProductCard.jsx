const ProductCard = ({ product }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 text-center transform transition-all duration-500 
                 hover:shadow-lg hover:scale-105"
    >
      <div className="text-6xl mb-4">{product.image}</div>
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p className="text-pink-600 text-lg font-semibold">{product.price}</p>
      <button className="mt-4 bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition-all duration-500">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
