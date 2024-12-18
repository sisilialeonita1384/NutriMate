"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ProgressDashboardHero from "./Hero";
import NutritionalDataViewer from "./NutritionalViewer";

// Modal Component
const Modal = ({ isOpen, onClose, targetTitle, onSubmit }) => {
  const [target, setTarget] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit(target); // Submit the target
    setTarget(""); // Reset input after submission
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-1/3">
        <h2 className="text-xl font-bold text-gray-900">
          Set Target for {targetTitle}
        </h2>
        <div className="mt-4">
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter target"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Button
            variant="destructive"
            onClick={handleSubmit}
            className="bg-orange-500 text-white hover:bg-orange-600"
          >
            Submit
          </Button>
          <Button
            variant="ghost"
            onClick={onClose}
            className="bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

const DailyProgress = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<{
    title: string;
    percentage: number;
    current: number;
    target: number;
  } | null>(null);

  const [progressData, setProgressData] = useState([
    { title: "Protein", percentage: 90, current: 27, target: 30 },
    { title: "Carbohydrate", percentage: 113, current: 282, target: 250 },
    { title: "Fat", percentage: 70, current: 42, target: 60 },
    { title: "Calorie", percentage: 97, current: 1750, target: 1800 },
  ]);

  const getDates = () => {
    const dates = [];
    const currentDate = new Date(selectedDate);
    currentDate.setDate(currentDate.getDate() - 3);

    for (let i = 0; i < 7; i++) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const navigateWeek = (direction: "prev" | "next") => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + (direction === "next" ? 7 : -7));
    setSelectedDate(newDate);
  };

  const handleModalOpen = (item) => {
    setCurrentItem(item); // Set the selected item for the modal title
    setIsModalOpen(true);
  };

  const handleModalSubmit = (newTarget) => {
    if (currentItem) {
      const updatedProgressData = [...progressData];
      const updatedItem = updatedProgressData.find(
        (item) => item.title === currentItem.title
      );
      if (updatedItem) {
        updatedItem.target = parseInt(newTarget, 10);
        updatedItem.percentage = Math.round((updatedItem.current / updatedItem.target) * 100);
      }
      setProgressData(updatedProgressData);
    }
  };
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-orange-500">
        DAILY PROGRESS
      </h2>

      <Card>
        <CardContent className="p-6">
          <div className="text-center text-xl text-gray-800 mb-4">
            {selectedDate.toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>

          <div className="relative flex items-center justify-center gap-2 py-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 text-orange-500 hover:text-orange-600"
              onClick={() => navigateWeek("prev")}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex gap-4 overflow-hidden">
              {getDates().map((date, index) => (
                <motion.button
                  key={date.toISOString()}
                  onClick={() => setSelectedDate(date)}
                  className={`flex flex-col items-center p-2 rounded-full min-w-[4rem] transition-colors ${
                    date.toDateString() === selectedDate.toDateString()
                      ? "bg-orange-500 text-white"
                      : "hover:bg-orange-50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-medium">
                    {
                      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                        date.getDay()
                      ]
                    }
                  </span>
                  <span className="text-lg font-bold">{date.getDate()}</span>
                  <span className="text-xs">
                    {date.toLocaleDateString("en-US", { month: "short" })}
                  </span>
                </motion.button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 text-orange-500 hover:text-orange-600"
              onClick={() => navigateWeek("next")}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {progressData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="60"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-orange-100"
                        />
                        <motion.circle
                          cx="64"
                          cy="64"
                          r="60"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 60}`}
                          strokeDashoffset={`${
                            2 * Math.PI * 60 * (1 - item.percentage / 100)
                          }`}
                          className="text-orange-500"
                          initial={{ strokeDashoffset: `${2 * Math.PI * 60}` }}
                          animate={{
                            strokeDashoffset: `${
                              2 * Math.PI * 60 * (1 - item.percentage / 100)
                            }`,
                          }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-900">
                          {item.percentage}%
                        </span>
                      </div>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {item.current}/{item.target}
                    </p>
                    <Button
                      variant="ghost"
                      className="mt-4 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                      onClick={() => handleModalOpen(item)} // Open modal with specific item
                    >
                      Change Target
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        targetTitle={currentItem ? currentItem.title : ""}
        onSubmit={handleModalSubmit}
      />
    </motion.div>
  );
};

export default function ProgressOverview() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <ProgressDashboardHero />
      <DailyProgress />
      <NutritionalDataViewer />
    </div>
  );
}
