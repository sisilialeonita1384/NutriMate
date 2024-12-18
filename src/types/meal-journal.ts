export interface Meal {
  name: string;
  protein: number;
  carbs: number;
  fat: number;
  calories: number;
}

export interface DayData {
  breakfast: Meal | null;
  lunch: Meal | null;
  dinner: Meal | null;
  snack: Meal | null;
}

export type JournalData = Record<string, DayData>;

export const dummyData: JournalData = {
  "2024-10-01": {
    breakfast: {
      name: "Pancake",
      protein: 6,
      carbs: 30,
      fat: 10,
      calories: 250,
    },
    lunch: {
      name: "Chicken Salad",
      protein: 25,
      carbs: 10,
      fat: 5,
      calories: 200,
    },
    dinner: null,
    snack: null,
  },
  "2024-10-03": {
    breakfast: {
      name: "Granola Bar",
      protein: 5,
      carbs: 20,
      fat: 8,
      calories: 150,
    },
    lunch: null,
    dinner: null,
    snack: null,
  },
};
