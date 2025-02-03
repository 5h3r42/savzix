import { useParams } from "react-router-dom";

const productData = {
  id: 1,
  name: "Zip Tote Basket",
  price: "$140",
  description:
    "The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, shoulder sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.",
  image: "https://via.placeholder.com/500", // Replace this with the actual image URL
};

const ProductPage = () => {
  const { id } = useParams(); // Dynamic product fetching when integrated
  const product = productData;

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side: Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg object-contain"
          />
        </div>

        {/* Right Side: Product Details */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-pink-600 font-semibold">{product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>

          {/* Add to Cart Button */}
          <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Expandable Sections */}
      <div className="mt-8">
        {["Features", "Shipping", "Returns"].map((section) => (
          <div key={section} className="border-b py-4">
            <details>
              <summary className="font-medium text-gray-700 cursor-pointer">
                {section}
              </summary>
              <p className="mt-2 text-gray-500 text-sm">
                Details about {section.toLowerCase()}.
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
