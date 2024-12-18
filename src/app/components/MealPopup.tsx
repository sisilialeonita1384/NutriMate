import React, { useState, useCallback } from "react";
import { Search, X, ChevronDown, PieChart, Plus, Minus } from "lucide-react";
import { Meal, MealPopupProps } from "../../types/meal";
import { initialMeals } from "../../data/meal";

const MealPopup: React.FC<MealPopupProps> = ({ onClose, onAddMeals }) => {
  const [meals, setMeals] = useState<Meal[]>(initialMeals);
  const [mealInfoVisibility, setMealInfoVisibility] = useState<{
    [key: string]: boolean;
  }>({});
  const [nutrientVisibility, setNutrientVisibility] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedMeals, setSelectedMeals] = useState<{
    [key: string]: boolean;
  }>({});
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredMeals = meals.filter((meal) =>
    meal.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const calculateNutrients = (
    baseNutrients: (typeof initialMeals)[0]["nutrients"],
    weight: number,
    unit: string
  ) => {
    const factor = unit === "gram" ? weight / 100 : weight / 3.5274;
    return Object.entries(baseNutrients).reduce(
      (acc, [key, nutrient]) => ({
        ...acc,
        [key]: {
          ...nutrient,
          value: Number((nutrient.value * factor).toFixed(2)),
        },
      }),
      {}
    );
  };

  const handleWeightChange = useCallback((id: string, newWeight: number) => {
    setMeals((prevMeals) =>
      prevMeals.map((meal) => {
        if (meal.id !== id) return meal;

        const baseMeal = initialMeals.find((m) => m.id === id)!;
        return {
          ...meal,
          weight: newWeight,
          nutrients: calculateNutrients(
            baseMeal.nutrients,
            newWeight,
            meal.unit
          ) as typeof meal.nutrients,
        };
      })
    );
  }, []);

  const handleUnitChange = useCallback((id: string, newUnit: string) => {
    setMeals((prevMeals) =>
      prevMeals.map((meal) => {
        if (meal.id !== id) return meal;

        const baseMeal = initialMeals.find((m) => m.id === id)!;
        return {
          ...meal,
          unit: newUnit,
          nutrients: calculateNutrients(
            baseMeal.nutrients,
            meal.weight,
            newUnit
          ) as typeof meal.nutrients,
        };
      })
    );
  }, []);

  const toggleMealInfo = (id: string) => {
    setMealInfoVisibility((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleNutrientInfo = (id: string) => {
    setNutrientVisibility((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCheckboxChange = (id: string) => {
    setSelectedMeals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const incrementWeight = (id: string) => {
    const meal = meals.find((m) => m.id === id)!;
    handleWeightChange(id, meal.weight + 50);
  };

  const decrementWeight = (id: string) => {
    const meal = meals.find((m) => m.id === id)!;
    handleWeightChange(id, Math.max(50, meal.weight - 50));
  };

  const handleAddSelectedMeals = () => {
    const mealsToAdd = meals.filter((meal) => selectedMeals[meal.id]);
    onAddMeals(mealsToAdd);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-center gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search meals..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-3 text-gray-500 bg-gray-50 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
              />
              <Search className="absolute  top-1/2 left-4 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Meal List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {filteredMeals.length > 0 ? (
            filteredMeals.map((meal) => (
              <div
                key={meal.id}
                className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedMeals[meal.id] || false}
                      onChange={() => handleCheckboxChange(meal.id)}
                      className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    />
                    <h3 className="text-lg font-medium text-gray-800">
                      {meal.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => toggleMealInfo(meal.id)}
                      className="flex items-center gap-2  text-orange-400 hover:text-orange-600 transition-colors"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          mealInfoVisibility[meal.id] ? "rotate-180" : ""
                        }`}
                      />
                      <span className="text-sm font-medium">
                        {meal.weight} {meal.unit}
                      </span>
                    </button>
                    <button
                      onClick={() => toggleNutrientInfo(meal.id)}
                      className="flex items-center gap-2 text-orange-400 hover:text-orange-500 transition-colors"
                    >
                      <PieChart className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        {meal.nutrients.calorie.value}{" "}
                        {meal.nutrients.calorie.unit}
                      </span>
                    </button>
                  </div>
                </div>

                {mealInfoVisibility[meal.id] && (
                  <div className="mt-4 p-4 bg-orange-50/50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decrementWeight(meal.id)}
                          className="p-1 rounded-lg hover:bg-orange-100 text-orange-500 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <input
                          type="number"
                          value={meal.weight}
                          onChange={(e) =>
                            handleWeightChange(meal.id, Number(e.target.value))
                          }
                          className="w-20 px-3 py-2 text-orange-500 text-center border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        />
                        <button
                          onClick={() => incrementWeight(meal.id)}
                          className="p-1 rounded-lg hover:bg-orange-100 text-orange-500 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <select
                        value={meal.unit}
                        onChange={(e) =>
                          handleUnitChange(meal.id, e.target.value)
                        }
                        className="px-4 py-2 border text-orange-500 border-orange-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      >
                        <option value="gram">gram</option>
                        <option value="ounce">ounce</option>
                      </select>
                    </div>
                  </div>
                )}

                {nutrientVisibility[meal.id] && (
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {Object.entries(meal.nutrients).map(([key, nutrient]) => (
                      <div key={key} className="bg-orange-50/50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">
                          {nutrient.label}
                        </p>
                        <p className="text-lg font-medium text-gray-800">
                          {nutrient.value} {nutrient.unit}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-8">No meals found</div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100">
          <button
            onClick={handleAddSelectedMeals}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-xl font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center gap-2"
          >
            Add Selected Meals
            {Object.values(selectedMeals).filter(Boolean).length > 0 && (
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">
                {Object.values(selectedMeals).filter(Boolean).length}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealPopup;
