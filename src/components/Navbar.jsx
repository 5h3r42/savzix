import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold" style={{ color: "#1f3a8a" }}>
            SAVZIX
          </h1>
        </div>

        {/* Middle: Centered Search Bar */}
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            style={{ maxWidth: "300px", width: "100%" }}
          />
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6">
          <i
            className="fas fa-user text-xl cursor-pointer"
            style={{ color: "#1f3a8a" }}
          ></i>
          <i
            className="fas fa-shopping-cart text-xl cursor-pointer"
            style={{ color: "#1f3a8a" }}
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
