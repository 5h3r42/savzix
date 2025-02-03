import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-contain mb-4"
        />
        <div className="text-left">
          <h3 className="text-lg font-semibold truncate">{product.name}</h3>
          <p className="text-pink-600 text-lg font-semibold">{product.price}</p>
        </div>
      </Link>

      <button className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition mt-2">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
