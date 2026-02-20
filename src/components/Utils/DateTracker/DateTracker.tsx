import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { QUOTES } from "@/constants/config/RandomQuotes";
import type { DateTypes } from "@/global.types";

const DateTracker: React.FC = () => {
  const [date, setDate] = useState<DateTypes>({
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
    <div className="flex justify-between p-3 border-2 rounded-xl bg-white">
      <div className="flex flex-col">
        <span className="font-bold text-sm lg:text-3xl">{quote}</span>
        <span className=" text-pretty text-xs lg:text-lg">
          Track your meals and your nutrition goals
        </span>
      </div>
      <div className="flex items-center ">
        <span className="bg-orange-400 p-2 lg:p-4 rounded-full">
          <Calendar className="h-4 w-4 lg:h-6 lg:w-6" />
        </span>
        <div className="flex flex-col text-sm lg:text-lg pl-2 leading-none">
          <span>
            {date.day} {date.dayName},
          </span>
          <span className="text-orange-500">{date.month}</span>
        </div>
      </div>
    </div>
  );
};

export default DateTracker;
