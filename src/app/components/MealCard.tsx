import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreVertical, Plus, Timer, Utensils } from "lucide-react";
import React from "react";
import { Meal } from "../../types/meal-journal";

interface MealCardProps {
  meal: string;
  data: Meal | null;
  addMeal?: () => void; // Tambahkan prop baru
}

const mealIcons: { [key: string]: React.ReactNode } = {
  breakfast: "🍳",
  lunch: "🍽️",
  dinner: "🍖",
  snack: "🍎",
};

const mealTimes: { [key: string]: string } = {
  breakfast: "6:00 - 9:00",
  lunch: "12:00 - 14:00",
  dinner: "18:00 - 21:00",
  snack: "Any time",
};

export const MealCard: React.FC<MealCardProps> = ({ meal, data, addMeal }) => {
  const progressPercentage = data ? (data.calories / 800) * 100 : 0; // Assuming 800 calories as max

  return (
    <Card className="flex-1 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, gray 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      />

      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <div className="text-xl">{mealIcons[meal.toLowerCase()]}</div>
          <div>
            <CardTitle className="text-base font-semibold capitalize">
              {meal}
            </CardTitle>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Timer size={12} />
              {mealTimes[meal.toLowerCase()]}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-500 hover:text-orange-500 hover:bg-orange-50"
          >
            <MoreVertical size={16} />
          </Button>
          {/* Add Button */}
          {addMeal && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-500 hover:text-orange-500 hover:bg-orange-50"
              onClick={addMeal}
            >
              <Plus size={16} />
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent>
        {data ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold text-gray-900">
                {data.menu}
              </div>
              <div className="text-sm font-medium text-orange-500">
                {data.calories} cal
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-500"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="relative p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-100">
                <div className="text-sm font-semibold text-blue-600">
                  {data.protein}g
                </div>
                <div className="text-xs text-blue-600/70">Protein</div>
              </div>
              <div className="relative p-3 rounded-xl bg-gradient-to-br from-green-50 to-green-100/50 border border-green-100">
                <div className="text-sm font-semibold text-green-600">
                  {data.carbs}g
                </div>
                <div className="text-xs text-green-600/70">Carbs</div>
              </div>
              <div className="relative p-3 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-100">
                <div className="text-sm font-semibold text-purple-600">
                  {data.fat}g
                </div>
                <div className="text-xs text-purple-600/70">Fat</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-32 flex flex-col items-center justify-center text-gray-400 gap-2">
            <Utensils className="h-6 w-6" />
            <div className="text-sm">No meal logged yet</div>
            {addMeal && (
              <Button
                variant="outline"
                size="sm"
                className="mt-2 text-xs border-dashed hover:border-orange-500 hover:text-orange-500"
                onClick={addMeal}
              >
                <Plus size={12} className="mr-1" />
                Add {meal}
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
