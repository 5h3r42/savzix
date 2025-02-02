
import Navbar from "./Navbar";
import CategoryBar from "./CategoryBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-white shadow-md">
        <Navbar />
        <CategoryBar />
      </div>
    </header>
  );
};

export default Header;
