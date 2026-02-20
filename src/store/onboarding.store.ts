import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { OnboardingFormDataTypes } from "@/components/Utils/OnboardingForm/OnboardingForm.types";

type OnboardingStoreState = {
  onboardingData: OnboardingFormDataTypes | null;
  isComplete: boolean;

  setOnboardingData: (data: OnboardingFormDataTypes) => void;
  completeOnboarding: () => void;
};

export const useOnboardingStore = create<OnboardingStoreState>()(
  devtools(
    persist(
      (set) => ({
        onboardingData: null,
        isComplete: false,

        setOnboardingData: (data) => set({ onboardingData: data }),
        completeOnboarding: () => set({ isComplete: true }),
      }),
      {
        name: "calizerOnboardingStoreData",
        partialize: (state) => ({
          onboardingData: state.onboardingData,
          isComplete: state.isComplete,
        }),
      },
    ),
    { name: "calizer" },
  ),
);
