import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  isToday,
  startOfMonth,
} from "date-fns";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React from "react";

interface CalendarProps {
  currentDate: Date;
  selectedDate: string | null;
  journalData: { [key: string]: any[] };
  onDateSelect: (date: string | null) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export const Calendar: React.FC<CalendarProps> = ({
  currentDate,
  selectedDate,
  journalData,
  onDateSelect,
  onPrevMonth,
  onNextMonth,
}) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const getTotalCalories = (dateData: any) => {
    if (!dateData) return 0;
    return Object.values(dateData).reduce((total: number, meal: any) => {
      return total + (meal?.calories || 0);
    }, 0);
  };

  const renderCalendar = () => {
    const startDay = monthStart.getDay();
    const blanks = Array(startDay).fill(null);

    return (
      <>
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-xs font-semibold text-orange-500 h-8 flex items-center justify-center"
          >
            {day}
          </div>
        ))}

        {blanks.map((_, index) => (
          <div
            key={`blank-${index}`}
            className="h-28 bg-gray-50/50 rounded-lg border border-transparent"
          />
        ))}

        {daysInMonth.map((date) => {
          const dateString = format(date, "yyyy-MM-dd");
          const hasData = journalData[dateString]; // Ambil data berdasarkan tanggal
          const isSelected = selectedDate === dateString;
          const totalCalories = getTotalCalories(hasData);
          const isCurrentDay = isToday(date);

          return (
            <button
              key={dateString}
              onClick={() => onDateSelect(dateString)}
              className={`
                h-28 p-2 rounded-lg transition-all relative group
                border hover:border-orange-200
                ${isSelected ? "ring-2 ring-orange-500 ring-offset-2" : ""} 
                ${isCurrentDay ? "bg-orange-50/50" : "bg-white"}
                ${hasData ? "hover:shadow-md" : "hover:bg-gray-50"}
              `}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-sm font-medium inline-flex items-center justify-center
                      ${isCurrentDay ? "text-orange-500" : "text-gray-700"}
                      ${isSelected ? "bg-orange-100 w-6 h-6 rounded-full" : ""}
                    `}
                  >
                    {format(date, "d")}
                  </span>
                  {totalCalories > 0 && (
                    <span className="text-xs text-gray-500">
                      {totalCalories} cal
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  {hasData && (
                    <div className="space-y-1">
                      {/* Loop untuk menampilkan menu */}
                      {Object.entries(hasData).map(([meal, data]) => {
                        return (
                          data && (
                            <div
                              key={meal}
                              className="text-xs px-1.5 py-0.5 rounded-md truncate
                                bg-gradient-to-r from-orange-50 to-orange-100
                                text-orange-700 border border-orange-200"
                            >
                              {/* Tampilkan nama menu di sini */}
                              {data.menu}
                            </div>
                          )
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Hover effect for empty dates */}
              {!hasData && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-xs text-gray-400 flex items-center gap-1">
                    <CalendarIcon className="w-3 h-3" />
                    Add Entry
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </>
    );
  };

  return (
    <Card className="shadow-lg border-gray-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-900">
              {format(currentDate, "MMMM yyyy")}
            </h2>
            <div className="flex gap-1">
              <Button
                variant="outline"
                size="icon"
                onClick={onPrevMonth}
                className="h-8 w-8 border-gray-200 hover:bg-gray-50 hover:text-gray-900"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={onNextMonth}
                className="h-8 w-8 border-gray-200 hover:bg-gray-50 hover:text-gray-900"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onDateSelect(format(new Date(), "yyyy-MM-dd"))}
            className="text-sm hover:bg-gray-50"
          >
            Today
          </Button>
        </div>
        <div className="grid grid-cols-7 gap-2">{renderCalendar()}</div>
      </CardContent>
    </Card>
  );
};
