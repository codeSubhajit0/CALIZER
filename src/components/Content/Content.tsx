"use client";

import { useState } from "react";
import Home from "../Pages/Home/Home";
import Navigation from "../Utils/Navigation/Navigation";
import { OnboardingForm } from "../Utils/OnboardingForm/OnboardingForm";
import type { SCREEN_NAMES } from "@/constants/global.types";
import { useFeatureFlags } from "@/hooks/useFeatureFlags";

export const Content: React.FC = () => {
  const { isEnabled } = useFeatureFlags();
  const [activeScreen, setActiveScreen] = useState<SCREEN_NAMES>("Dashboard");
  const [showOnboardingModal, setShowOnboardingModal] = useState(true);

  return (
    <div className="h-screen w-full">
      {showOnboardingModal &&
        isEnabled("onboarding_step_form_functionality") && (
          <OnboardingForm onComplete={() => setShowOnboardingModal(false)} />
        )}
      <div className="relative w-full min-h-full bg-white bg-[radial-gradient(circle,rgba(0,0,0,0.12)_1px,transparent_1.2px)] bg-size-[22px_22px]">
        <div>
          <div className="mx-auto max-w-360 w-full">
            <div className="px-5 py-5">
              <Navigation
                activeScreen={activeScreen}
                onScreenChange={setActiveScreen}
              />
              <div>
                <Home activeScreen={activeScreen} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
