const categories = [
  { name: "Beauty & Skincare", path: "/category/beautyandskincare" },
  { name: "Fragrance", path: "/category/fragrance" },
  { name: "Hair", path: "/category/hair" },
  { name: "Health & Wellness", path: "/category/healthandwellness" },
  { name: "Home & Garden", path: "/category/homeandgarden" },
  { name: "Pets", path: "/category/pets" },
  { name: "Food & Drink", path: "/category/foodanddrink" },
  { name: "Gift Sets", path: "/category/giftsets" },
  { name: "Electrical", path: "/category/electrical" },
  { name: "Baby & Child", path: "/category/babyandchild" },
];

const CategoryBar = () => {
  return (
    <div className="bg-gray-100 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center space-x-6">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.path}
            className="text-gray-700 hover:text-pink-600 font-medium cursor-pointer"
          >
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
