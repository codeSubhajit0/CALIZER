import { useOnboardingStore } from "@/store/onboarding.store";

const Banner: React.FC = () => {
  const username = useOnboardingStore(
    (state) => state.onboardingData?.username,
  );

  return (
    <div className="font-bold text-black text-3xl mb-2">
      Welcome, <span className="text-orange-400 uppercase">{username}</span>
    </div>
  );
};

export default Banner;
