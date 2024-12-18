"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Beef, Wheat, MoreHorizontal } from "lucide-react";
import * as React from "react";

interface MealItem {
  name: string;
  amount: number;
  unit: string;
}

interface MealData {
  title: string;
  items: MealItem[];
}

const nutritionalData = {
  protein: [
    {
      title: "Breakfast",
      items: [
        { name: "Eggs", amount: 6, unit: "g" },
        { name: "Toast", amount: 3, unit: "g" },
      ],
    },
    {
      title: "Lunch",
      items: [
        { name: "Chicken", amount: 30, unit: "g" },
        { name: "Salad", amount: 3, unit: "g" },
      ],
    },
    {
      title: "Dinner",
      items: [
        { name: "Steak", amount: 25, unit: "g" },
        { name: "Broccoli", amount: 3, unit: "g" },
      ],
    },
    {
      title: "Snack",
      items: [
        { name: "Yogurt", amount: 6, unit: "g" },
        { name: "Nuts", amount: 8, unit: "g" },
      ],
    },
  ],
  carbohydrate: [
    {
      title: "Breakfast",
      items: [
        { name: "Toast", amount: 30, unit: "g" },
        { name: "Jam", amount: 15, unit: "g" },
      ],
    },
    {
      title: "Lunch",
      items: [
        { name: "Rice", amount: 45, unit: "g" },
        { name: "Vegetables", amount: 20, unit: "g" },
      ],
    },
    {
      title: "Dinner",
      items: [
        { name: "Potato", amount: 35, unit: "g" },
        { name: "Corn", amount: 25, unit: "g" },
      ],
    },
    {
      title: "Snack",
      items: [
        { name: "Apple", amount: 25, unit: "g" },
        { name: "Crackers", amount: 20, unit: "g" },
      ],
    },
  ],
  fat: [
    {
      title: "Breakfast",
      items: [
        { name: "Butter", amount: 10, unit: "g" },
        { name: "Avocado", amount: 15, unit: "g" },
      ],
    },
    {
      title: "Lunch",
      items: [
        { name: "Olive Oil", amount: 8, unit: "g" },
        { name: "Cheese", amount: 12, unit: "g" },
      ],
    },
    {
      title: "Dinner",
      items: [
        { name: "Fish Oil", amount: 5, unit: "g" },
        { name: "Nuts", amount: 15, unit: "g" },
      ],
    },
    {
      title: "Snack",
      items: [
        { name: "Peanut Butter", amount: 8, unit: "g" },
        { name: "Dark Chocolate", amount: 6, unit: "g" },
      ],
    },
  ],
  calorie: [
    {
      title: "Breakfast",
      items: [{ name: "Total Breakfast", amount: 450, unit: "kcal" }],
    },
    {
      title: "Lunch",
      items: [{ name: "Total Lunch", amount: 650, unit: "kcal" }],
    },
    {
      title: "Dinner",
      items: [{ name: "Total Dinner", amount: 550, unit: "kcal" }],
    },
    {
      title: "Snack",
      items: [{ name: "Total Snacks", amount: 250, unit: "kcal" }],
    },
  ],
};

// Mapping of nutrition types to icons
const nutritionIcons = {
  protein: Beef,
  carbohydrate: Wheat,
  fat: MoreHorizontal,
  calorie: Flame,
};

const MealCard = ({ data }: { data: MealData }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
    className="flex-1"
  >
    <Card className="bg-gradient-to-br from-white to-orange-50 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 rounded-lg overflow-hidden">
      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-4 text-gray-800 border-b pb-2">
          {data.title}
        </h3>
        {data.items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 4 }}
            className="text-sm text-gray-600 flex justify-between items-center py-2 hover:bg-orange-50 px-2 rounded-md transition-colors duration-200 cursor-default"
          >
            <span className="font-medium">{item.name}</span>
            <span className="text-orange-600 font-semibold bg-orange-100/50 px-3 py-1 rounded-full">
              {item.amount}
              {item.unit}
            </span>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  </motion.div>
);
export default function NutritionalDataViewer() {
  return (
    <div className="space-y-6 bg-gray-50 p-6 rounded-xl">
      <h2 className="text-3xl font-bold text-center text-orange-600 flex items-center justify-center gap-3">
        <Flame className="w-10 h-10 text-orange-500" />
        NUTRITIONAL DATA VIEWER
        <Flame className="w-10 h-10 text-orange-500" />
      </h2>

      <Tabs defaultValue="protein" className="w-full">
        <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-4 mb-8 bg-gray-200 p-1 rounded-full">
          {Object.keys(nutritionalData).map((tab) => {
            const Icon = nutritionIcons[tab as keyof typeof nutritionIcons];
            return (
              <TabsTrigger
                key={tab}
                value={tab}
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-full flex items-center gap-2 transition-colors duration-300"
              >
                <Icon className="w-5 h-5" />
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            );
          })}
        </TabsList>

        <AnimatePresence mode="wait">
          {Object.entries(nutritionalData).map(([key, data]) => (
            <TabsContent key={key} value={key}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-center mb-6 text-gray-700">
                  {key.charAt(0).toUpperCase() + key.slice(1)} Intake
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {data.map((meal, index) => (
                    <MealCard key={index} data={meal} />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </AnimatePresence>
      </Tabs>
    </div>
  );
}
