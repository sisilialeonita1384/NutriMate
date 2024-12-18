"use client";

import { format } from "date-fns";
import { useState } from "react";
import { Calendar } from "../../components/Calendar";
import { MealCard } from "../../components/MealCard";

export interface Meal {
  type: string;
  menu: string; 
  protein: number;
  carbohydrate: number;
  fat: number;
  calorie: number;
}


export default function MyJournal() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [mealsData, setMealsData] = useState<{ [key: string]: any[] }>({
    "2024-12-01": [
      {
        type: "breakfast",
        menu: "Omelette",
        protein: 50,
        carbs: 10,
        fat: 8,
        calorie: 150,
      },
      {
        type: "lunch",
        menu: "Grilled Chicken",
        protein: 50,
        carbs: 20,
        fat: 10,
        calorie: 300,
      },
      {
        type: "dinner",
        menu: "Pasta",
        protein: 20,
        carbs: 40,
        fat: 15,
        calorie: 350,
      },
    ],
    "2024-12-05": [
      {
        type: "breakfast",
        menu: "Pancakes",
        protein: 8,
        carbs: 25,
        fat: 6,
        calorie: 200,
      },
      {
        type: "snack",
        menu: "Cookies",
        protein: 2,
        carbs: 30,
        fat: 10,
        calorie: 150,
      },
    ],
  });

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  // Fungsi untuk menambahkan meal baru
  const addMeal = (mealType: string) => {
    if (!selectedDate) return;

    const newMeal = {
      type: mealType,
      menu: "New Meal",
      protein: 10,
      carbohydrate: 20,
      fat: 5,
      calorie: 200,
    };

    setMealsData((prevData) => {
      const updatedMeals = {
        ...prevData,
        [selectedDate]: [...(prevData[selectedDate] || []), newMeal],
      };
      return updatedMeals;
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary">My Meal Journal</h1>

      {/* Calendar Component */}
      <Calendar
        currentDate={currentDate}
        selectedDate={selectedDate}
        journalData={mealsData} // gunakan mealsData di sini
        onDateSelect={setSelectedDate}
        onPrevMonth={prevMonth}
        onNextMonth={nextMonth}
      />


      {/* Meal Card Section */}
      {selectedDate && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            {format(new Date(selectedDate), "MMMM d, yyyy")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["breakfast", "lunch", "dinner", "snack"].map((meal) => {
              // Filter data untuk meal yang sesuai
              const mealData =
                mealsData[selectedDate]?.find((m) => m.type === meal) || null;

              return (
                <MealCard
                  key={meal}
                  meal={meal}
                  data={mealData}
                  addMeal={() => addMeal(meal)} 
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
