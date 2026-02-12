import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import quotes from "@/constants/quotestext";

type DateInfo = {
  day: number;
  dayName: string;
  month: string;
};

const DateTracker: React.FC = () => {
  const [date, setDate] = useState<DateInfo>({
    day: 0,
    dayName: "",
    month: "",
  });

  const handelerDate = () => {
    const today = new Date();
    const date = today.getDate();
    const dayName = today.toLocaleDateString("en-us", { weekday: "short" });
    const monthName = today.toLocaleDateString("en-us", { month: "long" });

    setDate({ day: date, dayName: dayName, month: monthName });
  };

  const [quote, setQuote] = useState("");
  useEffect(() => {
    const index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);
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
        <span className="bg-orange-400 p-2 rounded-full">
          <Calendar size={25} />
        </span>
        <div className="flex flex-col text-xs lg:text-md pl-3 leading-none">
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
