

const categories = [
  "Beauty & Skincare",
  "Fragrance",
  "Hair",
  "Health & Wellness",
  "Home & Garden",
  "Food & Drink",
  "Gift Sets",
  "Electrical",
  "Pets",
  "Baby & Child",
];

const CategoryBar = () => {
  return (
    <div className="bg-gray-100 py-3 shadow sticky top-16 z-10">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center space-x-6">
        {categories.map((category, index) => (
          <a
            key={index}
            href={`#${category.replace(/ & /g, "-").toLowerCase()}`}
            className="text-gray-700 hover:text-pink-600 font-medium cursor-pointer"
          >
            {category}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
