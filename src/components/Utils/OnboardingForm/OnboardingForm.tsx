"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { nanoid } from "nanoid";
import type { OnboardingFormDataTypes } from "./OnboardingForm.types";
import { useOnboardingStore } from "@/store/onboarding.store";
import LoaderScreen from "../LoaderScreen/LoaderScreen";

const TOTAL_STEPS = 3;

export const OnboardingForm: React.FC = () => {
  const { setOnboardingData, completeOnboarding } = useOnboardingStore();
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [onboardingFormData, setOnboardingFormData] =
    useState<OnboardingFormDataTypes>({
      id: nanoid(),
      username: "",
      currentWeight: "",
      goal: null,
    });

  const isNextDisabled = () => {
    if (onboardingStep === 1) return onboardingFormData.username.trim() === "";
    if (onboardingStep === 2)
      return (
        onboardingFormData.currentWeight.trim() === "" ||
        Number(onboardingFormData.currentWeight) <= 0
      );
    if (onboardingStep === 3) return onboardingFormData.goal === null;
    return false;
  };

  const handleNext = () => {
    if (isNextDisabled()) return;
    if (onboardingStep < TOTAL_STEPS) {
      setOnboardingStep((s) => s + 1);
    } else {
      console.log({
        username: onboardingFormData.username,
        currentWeight: `${onboardingFormData.currentWeight} kg`,
        goal: onboardingFormData.goal,
      });
      setLoading(true);
      setTimeout(() => {
        setOnboardingData(onboardingFormData);
        completeOnboarding();
      }, 3000);
    }
  };

  if (loading) {
    return <LoaderScreen additionalNotes="Setting things up for you" />;
  }

  return (
    <div className="fixed inset-0 z-50 bg-white bg-[radial-gradient(circle,rgba(0,0,0,0.12)_1px,transparent_1.2px)] bg-size-[22px_22px] flex items-center justify-center px-5">
      <div className="w-full max-w-sm">
        <div className="text-center mb-4">
          <span className="text-4xl font-bold">
            CALIZER<span className="text-orange-400">.</span>
          </span>
        </div>

        {/* STEPS-INDICATOR */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => {
            const getStepIndicatorClass = () => {
              if (i + 1 === onboardingStep) return "w-6 bg-orange-400";
              if (i + 1 < onboardingStep) return "w-2 bg-orange-400";
              return "w-2 bg-gray-200";
            };
            return (
              <div
                key={`step-indicator-${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${getStepIndicatorClass()}`}
              />
            );
          })}
        </div>

        {/* ON-BOARDING-FORM */}
        <div className="bg-white border-2 border-orange-400 rounded-xl p-6">
          {/* USERNAME */}
          {onboardingStep === 1 && (
            <div>
              <h2 className="text-xl font-bold mb-1">Welcome!</h2>
              <p className="text-sm text-gray-500 mb-5">
                Let's get you set up. What should we call you?
              </p>
              <input
                type="text"
                placeholder="Your name"
                value={onboardingFormData.username}
                onChange={(e) =>
                  setOnboardingFormData({
                    ...onboardingFormData,
                    username: e.target.value,
                  })
                }
                onKeyDown={(e) => e.key === "Enter" && handleNext()}
                className="w-full border-2 border-orange-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300 text-black placeholder:text-gray-400"
              />
            </div>
          )}

          {/* CURRENT WEIGHT */}
          {onboardingStep === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-1">Current Weight</h2>
              <p className="text-sm text-gray-500 mb-5">
                How much do you currently weigh?
              </p>
              <div className="relative">
                <input
                  type="number"
                  placeholder="e.g. 70"
                  value={onboardingFormData.currentWeight}
                  min={1}
                  onChange={(e) =>
                    setOnboardingFormData({
                      ...onboardingFormData,
                      currentWeight: e.target.value,
                    })
                  }
                  onKeyDown={(e) => e.key === "Enter" && handleNext()}
                  className="w-full border-2 border-orange-400 rounded-xl px-4 py-3 pr-14 outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300 text-black placeholder:text-gray-400"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-orange-400">
                  kg
                </span>
              </div>
            </div>
          )}

          {/* GOAL */}
          {onboardingStep === 3 && (
            <div>
              <h2 className="text-xl font-bold mb-1">Your Goal</h2>
              <p className="text-sm text-gray-500 mb-5">
                What are you aiming for?
              </p>
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setOnboardingFormData({
                      ...onboardingFormData,
                      goal: "gain",
                    })
                  }
                  className={`border-2 rounded-xl px-4 py-3 text-left transition-all duration-300 font-bold ${
                    onboardingFormData.goal === "gain"
                      ? "border-orange-400 bg-orange-400 text-black"
                      : "border-orange-400 bg-white text-black opacity-60 hover:opacity-80"
                  }`}
                >
                  Gain Weight
                  <div className="block text-xs font-normal mt-0.5 opacity-70">
                    Build muscle and increase mass
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setOnboardingFormData({
                      ...onboardingFormData,
                      goal: "lose",
                    })
                  }
                  className={`border-2 rounded-xl px-4 py-3 text-left transition-all duration-300 font-bold ${
                    onboardingFormData.goal === "lose"
                      ? "border-orange-400 bg-orange-400 text-black"
                      : "border-orange-400 bg-white text-black opacity-60 hover:opacity-80"
                  }`}
                >
                  Lose Weight
                  <div className="block text-xs font-normal mt-0.5 opacity-70">
                    Burn calories and reduce mass
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* SUBMISSION */}
          <button
            type="button"
            onClick={handleNext}
            disabled={isNextDisabled()}
            className={`mt-6 w-full flex items-center justify-center gap-2 border border-orange-400 px-4 py-2.5 rounded-full font-bold transition-all duration-300 ${
              isNextDisabled()
                ? "opacity-40 cursor-not-allowed bg-white text-black"
                : "bg-orange-400 text-black hover:bg-orange-500 cursor-pointer"
            }`}
          >
            {onboardingStep === TOTAL_STEPS ? "Get Started" : "Continue"}
            <ChevronRight size={16} />
          </button>
        </div>

        {/* COUNTER */}
        <p className="text-center text-xs text-gray-400 mt-4">
          Step {onboardingStep} of {TOTAL_STEPS}
        </p>
      </div>
    </div>
  );
};

export default OnboardingForm;
