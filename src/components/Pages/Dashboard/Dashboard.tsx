import Banner from "@/components/Utils/banner/Banner";
import OnBoardingCard from "@/components/Utils/card/on-boarding-card/OnboardingCard";
import DateTracker from "@/components/Utils/date-tracker/DateTracker";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Banner />
      <DateTracker />
      <OnBoardingCard />
    </div>
  );
};

export default Dashboard;
