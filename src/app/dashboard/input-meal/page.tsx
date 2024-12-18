"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronLeft,
  Gauge,
  Plus,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Meal } from "../../../types/meal";
import MealPopup from "../../components/MealPopup";

const InputDailyMeal = () => {
  const [selectedMealType, setSelectedMealType] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [expandedMeal, setExpandedMeal] = useState<string | null>(null);
  const [selectedMeals, setSelectedMeals] = useState<{ [key: string]: Meal[] }>(
    {
      Breakfast: [],
      Lunch: [],
      Dinner: [],
      "Snacks/Others": [],
    }
  );

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [calories, setCalories] = useState(0);
  const recommendedCalories = 2000;
  const percentage = (calories / recommendedCalories) * 100;

  const mealTypes = [
    {
      title: "Breakfast",
      icon: "/images/breakfast.png",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-orange-50/70",
    },
    {
      title: "Lunch",
      icon: "/images/lunch.png",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50/70",
    },
    {
      title: "Dinner",
      icon: "/images/dinner.png",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50/70",
    },
    {
      title: "Snacks/Others",
      icon: "/images/snacks.png",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50/70",
    },
  ];

  const handleMealClick = (mealType: string) => {
    setSelectedMealType(mealType);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedMealType(null);
  };

  const handleAddMeals = (meals: Meal[]) => {
    if (selectedMealType) {
      setSelectedMeals((prev) => ({
        ...prev,
        [selectedMealType]: [...prev[selectedMealType], ...meals],
      }));

      const newCalories = meals.reduce(
        (sum, meal) => sum + (meal.nutrients?.calorie?.value || 0),
        0
      );
      setCalories((prevCalories) => prevCalories + newCalories);
    }
    handleClosePopup();
  };

  // Helper function to safely get nutrient value
  const getNutrientValue = (meal: Meal, nutrientKey: string) => {
    try {
      return meal.nutrients[nutrientKey]?.value || 0;
    } catch {
      return 0;
    }
  };

  // Helper function to safely get nutrient unit
  const getNutrientUnit = (meal: Meal, nutrientKey: string) => {
    try {
      return meal.nutrients[nutrientKey]?.unit || "g";
    } catch {
      return "g";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-6 mb-8">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Input Daily Meal
            </h1>
            <p className="text-sm text-gray-500 mt-1">Today, {currentDate}</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-6 p-6 bg-orange-50/50 rounded-3xl shadow-[0px_2px_4px_rgba(0,0,0,0.15),-4px_-4px_8px_rgba(255,255,255,0.6)]">
            {mealTypes.map((meal) => (
              <div
                key={meal.title}
                className="transform transition-all hover:scale-[1.02]"
              >
                <h2 className="font-semibold mb-3 text-gray-700">
                  {meal.title}
                </h2>

                <button
                  onClick={() => handleMealClick(meal.title)}
                  className={`w-full ${meal.bgColor} rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`rounded-full p-3 bg-gradient-to-r ${meal.color}`}
                    >
                      <Plus className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">Add Meals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src={meal.icon}
                      alt={meal.title}
                      width={48}
                      height={48}
                      className="rounded-full shadow-sm"
                    />
                  </div>
                </button>

                {selectedMeals[meal.title].length > 0 && (
                  <div className="mt-6 space-y-4">
                    {selectedMeals[meal.title].map((selectedMeal, index) => {
                      const isExpanded =
                        expandedMeal === `${meal.title}-${index}`;
                      const caloriePercentage = Math.round(
                        (getNutrientValue(selectedMeal, "calorie") /
                          recommendedCalories) *
                          100
                      );

                      return (
                        <Card
                          key={index}
                          className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                          <Button
                            variant="ghost"
                            onClick={() =>
                              setExpandedMeal(
                                isExpanded ? null : `${meal.title}-${index}`
                              )
                            }
                            className="w-full p-0 h-auto hover:bg-transparent"
                          >
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                                    <Utensils className="w-6 h-6 text-orange-500" />
                                  </div>
                                  <div className="text-left">
                                    <h3 className="font-semibold text-xl text-gray-900">
                                      {selectedMeal.name}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-1">
                                      <span className="text-orange-500 font-medium">
                                        {selectedMeal.weight}{" "}
                                        {selectedMeal.unit}
                                      </span>
                                      <span className="text-gray-400">•</span>
                                      <div className="flex items-center gap-1.5">
                                        <Gauge className="w-4 h-4 text-gray-400" />
                                        <span className="text-gray-600">
                                          {caloriePercentage}% AKG
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <ChevronDown
                                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                                    isExpanded ? "rotate-180" : ""
                                  }`}
                                />
                              </div>
                            </CardContent>
                          </Button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="px-6 py-4 bg-gradient-to-br from-orange-50/50 to-orange-100/30">
                                  <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                      <NutrientItem
                                        label="Calorie"
                                        value={getNutrientValue(
                                          selectedMeal,
                                          "calorie"
                                        )}
                                        unit={getNutrientUnit(
                                          selectedMeal,
                                          "calorie"
                                        )}
                                      />
                                      <NutrientItem
                                        label="Carbohydrate"
                                        value={getNutrientValue(
                                          selectedMeal,
                                          "carbohydrate"
                                        )}
                                        unit={getNutrientUnit(
                                          selectedMeal,
                                          "carbohydrate"
                                        )}
                                      />
                                      <NutrientItem
                                        label="Protein"
                                        value={getNutrientValue(
                                          selectedMeal,
                                          "protein"
                                        )}
                                        unit={getNutrientUnit(
                                          selectedMeal,
                                          "protein"
                                        )}
                                      />
                                    </div>
                                    <div className="space-y-3">
                                      <NutrientItem
                                        label="Fiber"
                                        value={getNutrientValue(
                                          selectedMeal,
                                          "fiber"
                                        )}
                                        unit={getNutrientUnit(
                                          selectedMeal,
                                          "fiber"
                                        )}
                                      />
                                      <NutrientItem
                                        label="Glucose"
                                        value={getNutrientValue(
                                          selectedMeal,
                                          "glucose"
                                        )}
                                        unit={getNutrientUnit(
                                          selectedMeal,
                                          "glucose"
                                        )}
                                      />
                                      <NutrientItem
                                        label="Fat"
                                        value={getNutrientValue(
                                          selectedMeal,
                                          "fat"
                                        )}
                                        unit={getNutrientUnit(
                                          selectedMeal,
                                          "fat"
                                        )}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section - Progress and Motivation */}
          <div className="lg:w-96 space-y-6">
            {/* Calorie Progress Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <svg className="w-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#f1f5f9"
                    strokeWidth="10"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${percentage * 2.827}, 282.7`}
                    transform="rotate(-90 50 50)"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        stopColor={
                          calories < 500
                            ? "#f97316"
                            : calories < 1000
                            ? "#fbbf24"
                            : calories < 2000
                            ? "#34d399"
                            : "#ec4899"
                        }
                      />
                      <stop
                        offset="100%"
                        stopColor={
                          calories < 500
                            ? "#ec4899"
                            : calories < 1000
                            ? "#f97316"
                            : calories < 2000
                            ? "#10b981"
                            : "#f97316"
                        }
                      />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-2xl font-bold text-gray-800">
                    {Math.round(calories)}
                  </p>
                  <p className="text-sm text-gray-500">kcal</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-center font-semibold text-gray-700 mb-4">
                  Daily Calorie
                </p>
                <div className="flex justify-between items-center bg-gray-50 rounded-xl p-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Current</p>
                    <p className="text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                      {Math.round(calories)}
                    </p>
                  </div>
                  <div className="h-8 w-px bg-gray-200" />
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Target</p>
                    <p className="text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                      {recommendedCalories}
                    </p>
                  </div>
                </div>

                {/* Calorie Status Label */}
                <div className="mt-4 text-center">
                  {calories === 0 ? (
                    <p className="text-sm text-gray-500">
                      No meals entered yet.
                    </p>
                  ) : calories <= 500 ? (
                    <p className="text-sm text-yellow-500">
                      Keep it up! You're just getting started!
                    </p>
                  ) : calories <= 1000 ? (
                    <p className="text-sm text-green-500">
                      Great job! You're halfway there!
                    </p>
                  ) : calories <= 2000 ? (
                    <p className="text-sm text-blue-500">
                      Almost there! You're doing awesome!
                    </p>
                  ) : (
                    <p className="text-sm text-red-500">
                      Over the target! Well done!
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Motivation Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <p className="text-gray-600 font-medium mb-6">
                "A journey of a thousand miles begins with a single step."
                <br />
                <span className="text-sm text-gray-500 mt-2 block">
                  Keep going, you're doing great!
                </span>
              </p>
              <Image
                src="/images/motivationImage.png"
                alt="Motivation"
                width={160}
                height={160}
                className="mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Meal Popup */}
        {isPopupOpen && (
          <MealPopup onClose={handleClosePopup} onAddMeals={handleAddMeals} />
        )}
      </div>
    </div>
  );
};

const NutrientItem = ({ label, value, unit }: any) => (
  <div className="flex items-center justify-between">
    <span className="text-gray-600 font-medium">{label}</span>
    <span className="text-gray-900">
      {value} {unit}
    </span>
  </div>
);

export default InputDailyMeal;
