import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import FeatureBar from "../components/FeatureBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* Navbar and CategoryBar are already included globally through Header in App.jsx */}
      <Hero />
      <ProductList />
      <FeatureBar />
      <Footer />
    </div>
  );
};

export default Home;
