"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Progress } from "@components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ArrowDown, Info } from "lucide-react";
import { useState } from "react";

export function NutrientCard({ nutrient }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="space-y-2 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center">
        <span className="font-semibold text-base">{nutrient.name}</span>
        <div className="flex items-center gap-3">
          <span className="text-white/90">
            {nutrient.current.toLocaleString()}/{nutrient.goal.toLocaleString()}{" "}
            {nutrient.unit}
          </span>
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/10">
            {nutrient.positive ? (
              <ArrowUp className="w-4 h-4" style={{ color: nutrient.color }} />
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
                ((nutrient.current - nutrient.goal) / nutrient.goal) * 100
              ).toFixed(0)}
              %
            </span>
          </div>
        </div>
      </div>
      <Progress
        value={(nutrient.current / nutrient.goal) * 100}
        className="h-2.5 bg-white/10 rounded-full"
        indicatorClassName="bg-gradient-to-r from-white/50 to-white/30"
      />
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute left-0 right-0 -bottom-2 flex justify-center"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="bg-white/20 p-1 rounded-full">
                  <Info className="w-4 h-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Details for {nutrient.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      )}
    </motion.div>
  );
}
