import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 rounded-lg shadow-lg mt-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-8 justify-center">
        <div className="mx-auto">
          <h3 className="font-bold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:underline">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div className="mx-auto">
          <h3 className="font-bold mb-4">Delivery & Returns</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/delivery" className="hover:underline">
                Delivery Information
              </Link>
            </li>
            <li>
              <Link to="/returns" className="hover:underline">
                Returns
              </Link>
            </li>
          </ul>
        </div>

        <div className="mx-auto">
          <h3 className="font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Form
              </Link>
            </li>
          </ul>
        </div>

        <div className="mx-auto">
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-pink-500"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-pink-500"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-pink-500"
            >
              <FaTiktok className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        © 2025 SAVZIX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
