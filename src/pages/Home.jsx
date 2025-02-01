import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import FeatureBar from "../components/FeatureBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductList />
      <FeatureBar />
      <Footer />
    </div>
  );
};

export default Home;
