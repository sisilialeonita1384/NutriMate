"use client";

import { Filter, Plus, Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface FoodItem {
  id: string;
  name: string;
  image: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  category: "breakfast" | "lunch" | "dinner" | "snacks";
}

const foodItems: FoodItem[] = [
  {
    id: "1",
    name: "Grilled Salmon",
    image: "/images/dinner.png",
    calories: 367,
    protein: 39,
    carbs: 0,
    fat: 22,
    category: "dinner",
  },
  {
    id: "2",
    name: "Quinoa Salad",
    image: "/images/lunch.png",
    calories: 222,
    protein: 8,
    carbs: 39,
    fat: 6,
    category: "lunch",
  },
  {
    id: "3",
    name: "Avocado Toast",
    image: "/images/breakfast.png",
    calories: 190,
    protein: 4,
    carbs: 19,
    fat: 11,
    category: "breakfast",
  },
  {
    id: "4",
    name: "Greek Yogurt Parfait",
    image: "/images/snacks.png",
    calories: 253,
    protein: 14,
    carbs: 36,
    fat: 6,
    category: "snacks",
  },
];

const Recommendations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSort, setSelectedSort] = useState<string>("calories");
  const [animation, setAnimation] = useState(false);

  const categories = [
    { id: "breakfast", label: "Breakfast", icon: "🌅" },
    { id: "lunch", label: "Lunch", icon: "🍱" },
    { id: "dinner", label: "Dinner", icon: "🍽️" },
    { id: "snacks", label: "Snacks/Other", icon: "🍪" },
  ];

  const sortOptions = [
    { id: "calories", label: "Calories" },
    { id: "protein", label: "Protein" },
    { id: "carbs", label: "Carbs" },
    { id: "fat", label: "Fat" },
  ];

  const filteredFoodItems = foodItems
    .filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory
        ? item.category === selectedCategory
        : true;
      return matchesSearch && matchesCategory;
    })
    .sort(
      (a, b) =>
        b[selectedSort as keyof FoodItem] - a[selectedSort as keyof FoodItem]
    );

  useEffect(() => {
    setAnimation(true);
    const timer = setTimeout(() => setAnimation(false), 500);
    return () => clearTimeout(timer);
  }, [selectedSort, selectedCategory]);

  const NutritionBadge = ({
    label,
    value,
    color,
  }: {
    label: string;
    value: number;
    color: string;
  }) => (
    <div className="flex flex-col items-center bg-white rounded-lg p-2 shadow-sm">
      <span className={`text-sm font-semibold ${color}`}>{value}</span>
      <span className="text-xs text-gray-500">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white p-6 sm:p-10">
      {/* Floating Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-8">
        <header className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Food Recommendations
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mt-3 max-w-2xl mx-auto">
            Discover delicious and nutritious meals tailored for your daily
            needs
          </p>
        </header>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Enhanced Search Bar */}
          <div className="relative w-full sm:w-auto flex-1 max-w-md">
            <input
              type="text"
              className="w-full border border-gray-200 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 bg-white/90"
              placeholder="Search your favorite food..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors duration-200"
          >
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>

        {/* Expandable Filters Section */}
        {showFilters && (
          <div className="mt-4 p-4 bg-white rounded-xl shadow-inner animate-slideDown">
            <div className="flex flex-wrap gap-4">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() =>
                      setSelectedCategory(
                        category.id === selectedCategory ? "" : category.id
                      )
                    }
                    className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-200 ${
                      category.id === selectedCategory
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.label}</span>
                  </button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="flex flex-wrap gap-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedSort(option.id)}
                    className={`px-4 py-2 rounded-full transition-all duration-200 ${
                      option.id === selectedSort
                        ? "bg-pink-500 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Food Grid with Animation */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredFoodItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-100 ${
              animation ? "animate-fadeIn" : ""
            } flex flex-col`} // Added flex flex-col here
          >
            <div className="relative h-48 group">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 group-hover:opacity-90"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-600 shadow-md">
                {categories.find((c) => c.id === item.category)?.icon}{" "}
                {item.category}
              </div>
            </div>

            <div className="flex flex-col flex-grow p-6">
              <div className="flex-grow">
                {" "}
                {/* Nama Makanan */}
                <h2 className="text-xl font-semibold text-gray-800 mb-4 line-clamp-2">
                  {item.name}
                </h2>
                {/* Nutrition Grid */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  <NutritionBadge
                    label="Calories"
                    value={item.calories}
                    color="text-orange-500"
                  />
                  <NutritionBadge
                    label="Protein"
                    value={item.protein}
                    color="text-blue-500"
                  />
                  <NutritionBadge
                    label="Carbs"
                    value={item.carbs}
                    color="text-green-500"
                  />
                  <NutritionBadge
                    label="Fat"
                    value={item.fat}
                    color="text-purple-500"
                  />
                </div>
              </div>

              {/* Tombol Add to Meal Plan */}
              <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 font-medium group">
                <Plus
                  size={18}
                  className="group-hover:rotate-180 transition-transform duration-300"
                />
                <span>Add to Meal Plan</span>
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Recommendations;
