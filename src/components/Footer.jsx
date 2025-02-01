

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold">Customer Service</h3>
          <ul className="mt-2 space-y-2">
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Delivery & Returns</h3>
          <ul className="mt-2 space-y-2">
            <li>Delivery Information</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul className="mt-2 space-y-2">
            <li>Support Center</li>
            <li>Contact Form</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <i className="fab fa-instagram text-2xl"></i>
            <i className="fab fa-facebook text-2xl"></i>
            <i className="fab fa-tiktok text-2xl"></i>
          </div>
        </div>
      </div>
      <p className="text-center mt-8 text-sm">
        © 2025 Beauty Store. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
