"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUp, Info, TrendingUp, Trophy } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { useState } from "react";

interface NutrientCardProps {
  nutrient: {
    name: string;
    current: number;
    goal: number;
    unit: string;
    positive: boolean;
    color: string;
  };
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    indicatorClassName?: string;
  }
>(({ className, value, indicatorClassName, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn("h-full w-full flex-1 transition-all", indicatorClassName)}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

const nutrients = [
  {
    name: "Protein",
    current: 560,
    goal: 500,
    unit: "g",
    positive: true,
    color: "rgb(134, 239, 172)",
  },
  {
    name: "Carbohydrate",
    current: 840,
    goal: 850,
    unit: "g",
    positive: false,
    color: "rgb(252, 165, 165)",
  },
  {
    name: "Fat",
    current: 350,
    goal: 340,
    unit: "g",
    positive: true,
    color: "rgb(134, 239, 172)",
  },
  {
    name: "Calorie",
    current: 10500,
    goal: 10700,
    unit: "kcal",
    positive: false,
    color: "rgb(252, 165, 165)",
  },
];

export default function ProgressDashboardHero() {
  const [hoveredNutrient, setHoveredNutrient] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 mb-12"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          Daily Progress Overview
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="col-span-2 overflow-hidden group hover:shadow-xl transition-all duration-500 dark:bg-gray-800">
          <CardContent className="p-0">
            <div className="bg-gradient-to-br from-orange-100 via-orange-50 to-white dark:from-orange-900 dark:via-orange-800 dark:to-gray-800 p-8 flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 dark:bg-orange-700 rounded-full blur-3xl opacity-20 -z-10" />

              <div className="flex-1 space-y-6">
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="p-3 bg-orange-500/10 dark:bg-orange-500/20 rounded-2xl">
                    <Trophy
                      className="w-12 h-12 text-orange-500 dark:text-orange-400 transform group-hover:scale-110 transition-transform duration-500"
                      strokeWidth={2}
                    />
                  </div>
                  <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-400 tracking-tight">
                    CONGRATULATIONS!
                  </h2>
                </motion.div>

                <motion.p
                  className="text-2xl text-gray-800 dark:text-gray-200 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  You are{" "}
                  <span className="text-orange-600 dark:text-orange-400 font-bold relative">
                    97% closer
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-orange-200 dark:bg-orange-700/50 -z-10" />
                  </span>{" "}
                  to achieving your calorie goal today.
                </motion.p>

                <motion.div
                  className="flex items-center gap-3 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-4 py-2 rounded-full w-fit"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">Keep pushing forward!</span>
                </motion.div>
              </div>

              <motion.div
                className="relative w-full lg:w-1/2 h-72"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent dark:from-gray-800/20 rounded-xl z-10" />
                <Image
                  src="/images/progress-hero.png"
                  alt="Progress Hero"
                  width={384}
                  height={288}
                  className="object-contain rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </motion.div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 via-orange-400 to-orange-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-400/20 dark:from-orange-700 dark:via-orange-600 dark:to-orange-700">
          <CardContent className="space-y-6 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold tracking-tight">
                Weekly Nutrients
              </h3>
              <div className="p-2 bg-white/10 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="space-y-4">
              {nutrients.map((nutrient) => (
                <motion.div
                  key={nutrient.name}
                  className="space-y-2 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 relative"
                  onHoverStart={() => setHoveredNutrient(nutrient.name)}
                  onHoverEnd={() => setHoveredNutrient(null)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-base">
                      {nutrient.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-white/90">
                        {nutrient.current.toLocaleString()}/
                        {nutrient.goal.toLocaleString()} {nutrient.unit}
                      </span>
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/10">
                        {nutrient.positive ? (
                          <ArrowUp
                            className="w-4 h-4"
                            style={{ color: nutrient.color }}
                          />
                        ) : (
                          <ArrowDown
                            className="w-4 h-4"
                            style={{ color: nutrient.color }}
                          />
                        )}
                        <span
                          className="font-bold text-sm"
                          style={{ color: nutrient.color }}
                        >
                          {Math.abs(
                            ((nutrient.current - nutrient.goal) /
                              nutrient.goal) *
                              100
                          ).toFixed(0)}
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                  <Progress
                    value={(nutrient.current / nutrient.goal) * 100}
                    className="h-2.5 bg-white/10 rounded-full"
                    indicatorClassName="bg-gradient-to-r from-white/50 to-white/30 transition-all duration-500"
                  />
                  <AnimatePresence>
                    {hoveredNutrient === nutrient.name && (
                      <motion.div
                        key={`tooltip-${nutrient.name}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 right-0 -bottom-2 flex justify-center"
                      >
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="bg-white/20 p-1 rounded-full">
                                <Info className="w-4 h-4" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                              <p>Detailed info about {nutrient.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
