import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Moisturizer",
    price: "£12.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Face Cream",
    price: "£14.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Lip Balm",
    price: "£5.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Sunscreen",
    price: "£16.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Foundation",
    price: "£19.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Eyeliner",
    price: "£8.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Shampoo",
    price: "£10.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Conditioner",
    price: "£12.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Body Lotion",
    price: "£15.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Facial Cleanser",
    price: "£13.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    name: "Toner",
    price: "£9.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    name: "Serum",
    price: "£18.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 13,
    name: "Hair Oil",
    price: "£11.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 14,
    name: "Hand Cream",
    price: "£7.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 15,
    name: "Foot Cream",
    price: "£6.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 16,
    name: "Exfoliator",
    price: "£20.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 17,
    name: "Night Cream",
    price: "£25.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 18,
    name: "Eye Cream",
    price: "£22.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 19,
    name: "Makeup Remover",
    price: "£9.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 20,
    name: "Face Mask",
    price: "£16.99",
    image: "https://via.placeholder.com/150",
  },
];

const BeautyAndSkincare = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow-lg p-6 max-w-7xl mx-auto mt-6 relative overflow-hidden min-h-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-1 items-center text-center">
          <h1 className="text-4xl font-bold mb-2">Beauty & Skincare</h1>
          <p className="text-lg">
            Nourish your skin with top products for a radiant glow.
          </p>
        </div>
      </div>

      {/* Centered Content */}
      <div className="p-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Our Beauty & Skincare Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-pink-600 text-lg font-semibold">
                {product.price}
              </p>
              <button className="mt-4 bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BeautyAndSkincare;
