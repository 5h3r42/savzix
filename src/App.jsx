import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Combined sticky header
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import BeautyAndSkincare from "./pages/BeautyAndSkincare";
import Fragrance from "./pages/Fragrance";
import Hair from "./pages/Hair";
import HealthAndWellness from "./pages/HealthAndWellness";
import HomeAndGarden from "./pages/HomeAndGarden";
import Pets from "./pages/Pets";
import FoodAndDrink from "./pages/FoodAndDrink";
import GiftSets from "./pages/GiftSets";
import Electrical from "./pages/Electrical";
import BabyAndChild from "./pages/BabyAndChild";
import AboutUs from "./pages/AboutUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQs from "./pages/FAQs";
import DeliveryInformation from "./pages/DeliveryInformation";
import Returns from "./pages/Returns";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header /> {/* The combined sticky header */}
        <main className="bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route
              path="/category/beautyandskincare"
              element={<BeautyAndSkincare />}
            />
            <Route path="/category/fragrance" element={<Fragrance />} />
            <Route path="/category/hair" element={<Hair />} />
            <Route
              path="/category/healthandwellness"
              element={<HealthAndWellness />}
            />
            <Route path="/category/homeandgarden" element={<HomeAndGarden />} />
            <Route path="/category/pets" element={<Pets />} />
            <Route path="/category/foodanddrink" element={<FoodAndDrink />} />
            <Route path="/category/giftsets" element={<GiftSets />} />
            <Route path="/category/electrical" element={<Electrical />} />
            <Route path="/category/babyandchild" element={<BabyAndChild />} />

            {/* Information Pages */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/delivery" element={<DeliveryInformation />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
