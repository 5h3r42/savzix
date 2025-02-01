import React, { useState } from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Oral-B Essential Dental Floss 50 m – Pack of 6",
    price: "£9.99",
    image: "https://example.com/dental-floss-image.jpg", // Replace with your actual image URL
    description:
      "Oral-B Essential Dental Floss removes plaque and debris with ease, promoting healthier gums and fresher breath.",
    features: [
      "Effective Cleaning: Removes plaque and debris from hard-to-reach areas.",
      "Shred-Resistant: Durable design for smooth, comfortable use.",
      "Daily Oral Care: Perfect addition to your dental routine.",
      "Value Pack: Includes 6 spools, each 50 meters long.",
    ],
    category: "Toiletries",
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto p-6 text-center">
        Product not found.
      </div>
    );
  }

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change)); // Prevent quantity from being less than 1
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <a href="/" className="hover:text-pink-600">
          Home
        </a>{" "}
        &gt;{" "}
        <a
          href={`/category/${product.category
            .toLowerCase()
            .replace(/ & /g, "")
            .replace(/\s/g, "")}`}
          className="hover:text-pink-600"
        >
          {product.category}
        </a>{" "}
        &gt; <span className="text-gray-800 font-medium">{product.name}</span>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex items-center justify-center bg-gray-100 rounded-lg p-10">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>
          <p className="text-2xl font-bold text-pink-600">{product.price}</p>
          <p className="text-gray-700 mt-4">{product.description}</p>

          {/* Features */}
          <ul className="mt-4 list-disc list-inside text-gray-600">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          {/* Quantity and Add to Basket */}
          <div className="mt-6 flex items-center">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="px-3 py-1 border rounded-l bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              −
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center border-y border-gray-300"
            />
            <button
              onClick={() => handleQuantityChange(1)}
              className="px-3 py-1 border rounded-r bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              +
            </button>

            <button className="ml-4 bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition">
              Add to Basket
            </button>
          </div>

          {/* Category */}
          <p className="mt-4 text-gray-500">
            <strong>Category:</strong> {product.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
