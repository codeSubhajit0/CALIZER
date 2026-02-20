import Banner from "@/components/Utils/banner/Banner";
import OnBoardingCard from "@/components/Utils/card/on-boarding-card/OnboardingCard";
import DateTracker from "@/components/Utils/date-tracker/DateTracker";

const Board: React.FC = () => {
  return (
    <>
      <Banner />
      <DateTracker />
      <OnBoardingCard />
    </>
  );
};

export default Board;
