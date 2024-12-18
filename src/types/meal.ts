export interface Nutrient {
  label: string;
  value: number;
  unit: string;
}

export interface Meal {
  id: string;
  name: string;
  weight: number;
  unit: string;
  nutrients: {
    calorie: Nutrient;
    carb: Nutrient;
    protein: Nutrient;
    fiber: Nutrient;
    glucose: Nutrient;
    fat: Nutrient;
  };
}

export interface MealPopupProps {
  onClose: () => void;
  onAddMeals: (selectedMeals: Meal[]) => void;
}
