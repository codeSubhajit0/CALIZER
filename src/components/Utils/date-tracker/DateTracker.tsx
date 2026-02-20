import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { QUOTES } from "@/constants/config/RandomQuotes";
import type { DateTrackerTypes } from "./DateTracker.types";
import { motion } from "motion/react";

const DateTracker: React.FC = () => {
  const [date, setDate] = useState<DateTrackerTypes>({
    day: 0,
    dayName: "",
    month: "",
  });
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const handelerDate = () => {
      const today = new Date();
      const date = today.getDate();
      const dayName = today.toLocaleDateString("en-us", { weekday: "short" });
      const monthName = today.toLocaleDateString("en-us", { month: "long" });

      setDate({ day: date, dayName: dayName, month: monthName });
    };

    const index = Math.floor(Math.random() * QUOTES.length);
    setQuote(QUOTES[index]);
    handelerDate();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex justify-between border-2 PADDING ROUNDED BACKGROUND MARGIN-BOTTOM"
    >
      <div className="flex flex-col">
        <span className="font-bold text-sm lg:text-3xl">{quote}</span>
        <span className=" text-pretty text-xs lg:text-lg">
          Track your meals and your nutrition goals
        </span>
      </div>
      <div className="flex items-center ">
        <span className="bg-orange-400 PADDING rounded-full">
          <Calendar size={25} />
        </span>
        <div className="flex flex-col text-xs lg:text-md pl-3 leading-none">
          <span>
            {date.day} {date.dayName},
          </span>
          <span className="text-orange-500">{date.month}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default DateTracker;
