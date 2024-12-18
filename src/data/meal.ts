// data.ts
import { Meal } from "../types/meal"; // Mengimpor tipe Meal dan Nutrient

const createInitialMeal = (
  id: string,
  name: string,
  baseNutrients: {
    calorie: number;
    carb: number;
    protein: number;
    fiber: number;
    glucose: number;
    fat: number;
  }
): Meal => ({
  id,
  name,
  weight: 100,
  unit: "gram",
  nutrients: {
    calorie: { label: "Calories", value: baseNutrients.calorie, unit: "kcal" },
    carb: { label: "Carbs", value: baseNutrients.carb, unit: "g" },
    protein: { label: "Protein", value: baseNutrients.protein, unit: "g" },
    fiber: { label: "Fiber", value: baseNutrients.fiber, unit: "g" },
    glucose: { label: "Glucose", value: baseNutrients.glucose, unit: "g" },
    fat: { label: "Fat", value: baseNutrients.fat, unit: "g" },
  },
});

export const initialMeals: Meal[] = [
  createInitialMeal("1", "Fried Chicken", {
    calorie: 260,
    carb: 10.76,
    protein: 21.93,
    fiber: 1.4,
    glucose: 0.26,
    fat: 14.55,
  }),
  createInitialMeal("2", "Pizza", {
    calorie: 260,
    carb: 10.76,
    protein: 21.93,
    fiber: 1.4,
    glucose: 0.26,
    fat: 14.55,
  }),
  createInitialMeal("3", "Burger", {
    calorie: 260,
    carb: 10.76,
    protein: 21.93,
    fiber: 1.4,
    glucose: 0.26,
    fat: 14.55,
  }),
  createInitialMeal("4", "Sushi", {
    calorie: 260,
    carb: 10.76,
    protein: 21.93,
    fiber: 1.4,
    glucose: 0.26,
    fat: 14.55,
  }),
  createInitialMeal("5", "Smoothies", {
    calorie: 260,
    carb: 10.76,
    protein: 21.93,
    fiber: 1.4,
    glucose: 0.26,
    fat: 14.55,
  }),
];
