import { useOnboardingStore } from "@/store/onboarding.store";
import { Weight, ArrowUpFromDot, ArrowDownToDot } from "lucide-react";

const OnBoardingCard: React.FC = () => {
  const userOnboardingData = useOnboardingStore(
    (state) => state.onboardingData,
  );

  return (
    <div className="grid grid-cols-2 GAP">
      <div className="border-2 flex gap-0.5 flex-col lg:flex-row  items-center justify-between PADDING ROUNDED bg-[#B7BDF7]">
        <div className="font-bold text-xs lg:text-lg">Current weight</div>
        <div className="font-bold text-xs lg:text-lg">
          <div className="flex items-center gap-1">
            <Weight size={18} />
            {userOnboardingData?.currentWeight} Kg
          </div>
        </div>
      </div>
      <div className="border-2 flex gap-0.5 flex-col lg:flex-row items-center justify-between PADDING ROUNDED bg-[#FFCF96]">
        <div className="font-bold text-xs lg:text-lg">Journey towards</div>
        <div className="font-bold text-xs lg:text-lg">
          {userOnboardingData?.goal === "gain" ? (
            <div className="flex items-center gap-1">
              <ArrowUpFromDot size={15} />
              Gaining
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <ArrowDownToDot size={15} />
              Losing
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnBoardingCard;
