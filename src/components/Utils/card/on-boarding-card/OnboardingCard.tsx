import { useOnboardingStore } from "@/store/onboarding.store";
import { Weight, ArrowUpFromDot, ArrowDownToDot } from "lucide-react";
import { motion, cubicBezier } from "motion/react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.12,
      duration: 0.8,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  }),
};

const OnBoardingCard: React.FC = () => {
  const userOnboardingData = useOnboardingStore(
    (state) => state.onboardingData,
  );

  return (
    <div className="grid grid-cols-2 GAP">
      <motion.div
        custom={0}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="border-2 flex gap-0.5 flex-col lg:flex-row  items-center justify-between PADDING ROUNDED bg-[#B7BDF7]"
      >
        <div className="font-bold text-xs lg:text-lg">Current weight</div>
        <div className="font-bold text-xs lg:text-lg">
          <div className="flex items-center gap-1">
            <Weight size={18} />
            {userOnboardingData?.currentWeight} Kg
          </div>
        </div>
      </motion.div>
      <motion.div
        custom={1}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="border-2 flex gap-0.5 flex-col lg:flex-row items-center justify-between PADDING ROUNDED bg-[#8BAE66]"
      >
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
      </motion.div>
    </div>
  );
};

export default OnBoardingCard;
